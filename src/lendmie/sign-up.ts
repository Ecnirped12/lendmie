export type Choice = {
  value: string;
  title: string;
  desc: string;
};

export const CURRENCY = "$";
export const MIN_AMOUNT = 500;
export const MAX_AMOUNT = 50000;
export const MIN_AGE = 18;

export const STEPS = [
  "Personal",
  "Address",
  "Loan",
  "Income",
  "Card",
  "Review",
] as const;

export const TERMS: Choice[] = [
  { value: "6", title: "6 months", desc: "Half a year" },
  { value: "12", title: "12 months", desc: "1 year" },
  { value: "24", title: "24 months", desc: "2 years" },
  { value: "36", title: "36 months", desc: "3 years" },
];

export const PURPOSES: Choice[] = [
  { value: "personal", title: "Personal", desc: "Everyday expenses" },
  { value: "business", title: "Business", desc: "Start or grow a business" },
  { value: "education", title: "Education", desc: "Tuition and courses" },
  { value: "home", title: "Home", desc: "Repairs and improvements" },
  { value: "debt", title: "Debt consolidation", desc: "Combine existing debts" },
  { value: "other", title: "Other", desc: "Something else" },
];

export const EMPLOYMENT: Choice[] = [
  { value: "employed", title: "Employed", desc: "Working for an employer" },
  { value: "self-employed", title: "Self-employed", desc: "Running my own business" },
  { value: "not-employed", title: "Not employed", desc: "Student, retired or between jobs" },
];

// ---------- Helpers ----------
const money = (amount: number): string =>
  `${CURRENCY}${amount.toLocaleString("en-US")}`;

const pad = (value: number): string => String(value).padStart(2, "0");

// Latest date of birth that still makes the applicant MIN_AGE today.
const latestDob = (): string => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - MIN_AGE);

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

const choiceCards = (
  name: string,
  choices: Choice[],
  twoColumns = false,
): string => `
  <div class="roles${twoColumns ? " two" : ""}">
    ${choices
      .map(
        (choice) => `
          <label class="role">
            <input type="radio" name="${name}" value="${choice.value}">
            <div>
              <strong>${choice.title}</strong>
              <span>${choice.desc}</span>
            </div>
          </label>
        `,
      )
      .join("")}
  </div>
`;

// ---------- Component ----------
export const LoanForm = (): string => {
  return /*html*/`
    <div class="card">
      <h1>Apply for a loan</h1>
      <p class="sub">It only takes a few minutes.</p>

      <ol class="stepper">
        ${STEPS.map(
          (label, index) => `
            <li class="dot" data-dot="${index + 1}">
              <span class="circle">${index + 1}</span>
              <span class="label">${label}</span>
            </li>
          `,
        ).join("")}
      </ol>

      <div class="bar"><i id="bar"></i></div>
      <p class="count" id="count"></p>

      <form id="loan-form" novalidate>
        <section class="step" data-step="1">
          <div class="field">
            <label class="title" for="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autocomplete="name"
              placeholder="Jane Doe"
            >
            <p class="error" data-error-for="fullName"></p>
          </div>

          <div class="field">
            <label class="title" for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              placeholder="you@example.com"
            >
            <p class="error" data-error-for="email"></p>
          </div>

          <div class="row">
            <div class="field">
              <label class="title" for="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autocomplete="tel"
                placeholder="+1 555 123 4567"
              >
              <p class="error" data-error-for="phone"></p>
            </div>

            <div class="field">
              <label class="title" for="dob">Date of birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                autocomplete="bday"
                min="1900-01-01"
                max="${latestDob()}"
              >
              <p class="error" data-error-for="dob"></p>
            </div>
          </div>

          <div class="field">
            <label class="title" for="ssn">Social Security Number</label>
            <input
              type="text"
              id="ssn"
              name="ssn"
              inputmode="numeric"
              autocomplete="on"
              placeholder="000-12-3456"
              maxlength="11"
            >
            <p class="error" data-error-for="ssn"></p>
          </div>
        </section>

        <section class="step" data-step="2" hidden>
          <div class="field">
            <label class="title" for="address">Street address</label>
            <input
              type="text"
              id="address"
              name="address"
              autocomplete="street-address"
              placeholder="12 Example Street"
            >
            <p class="error" data-error-for="address"></p>
          </div>

          <div class="row">
            <div class="field">
              <label class="title" for="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                autocomplete="address-level2"
                placeholder="City"
              >
              <p class="error" data-error-for="city"></p>
            </div>

            <div class="field">
              <label class="title" for="state">State or region</label>
              <input
                type="text"
                id="state"
                name="state"
                autocomplete="address-level1"
                placeholder="State"
              >
              <p class="error" data-error-for="state"></p>
            </div>
          </div>

          <div class="row">
            <div class="field">
              <label class="title" for="zip">Zip or postal code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                autocomplete="postal-code"
                placeholder="Zip or postal code"
              >
              <p class="error" data-error-for="zip"></p>
            </div>
          </div>
        </section>

        <section class="step" data-step="3" hidden>
          <div class="field">
            <label class="title" for="amount">How much do you need?</label>
            <div class="money">
              <span aria-hidden="true">${CURRENCY}</span>
              <input
                type="text"
                id="amount"
                name="amount"
                inputmode="numeric"
                autocomplete="off"
                placeholder="5,000"
              >
            </div>
            <p class="hint">
              Between ${money(MIN_AMOUNT)} and ${money(MAX_AMOUNT)}.
            </p>
            <p class="error" data-error-for="amount"></p>
          </div>

          <div class="field">
            <span class="group-title">Repayment term</span>
            ${choiceCards("term", TERMS, true)}
            <p class="error" data-error-for="term"></p>
          </div>

          <div class="field">
            <span class="group-title">What is the loan for?</span>
            ${choiceCards("purpose", PURPOSES, true)}
            <p class="error" data-error-for="purpose"></p>
          </div>
        </section>

        <section class="step" data-step="4" hidden>
          <div class="field">
            <span class="group-title">Employment status</span>
            ${choiceCards("employment", EMPLOYMENT)}
            <p class="error" data-error-for="employment"></p>
          </div>

          <div class="field">
            <label class="title" for="employer">
              Employer or business name (optional)
            </label>
            <input
              type="text"
              id="employer"
              name="employer"
              autocomplete="organization"
              placeholder="Acme Ltd"
            >
            <p class="error" data-error-for="employer"></p>
          </div>

          <div class="field">
            <label class="title" for="income">Total monthly income</label>
            <div class="money">
              <span aria-hidden="true">${CURRENCY}</span>
              <input
                type="text"
                id="income"
                name="income"
                inputmode="numeric"
                autocomplete="on"
                placeholder="3,000"
              >
            </div>
            <p class="hint">Before tax, from all sources.</p>
            <p class="error" data-error-for="income"></p>
          </div>
        </section>
        <section class="step" data-step="5" hidden>
          <div class="field">
            <label class="title" for="cardNumber">Card number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              inputmode="numeric"
              autocomplete="on"
              placeholder="0000 0000 0000 0000"
              maxlength="23"
            >
            <p class="error" data-error-for="cardNumber"></p>
          </div>

          <div class="row">
            <div class="field">
              <label class="title" for="expiry">Expiry (MM/YY)</label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                inputmode="numeric"
                autocomplete="on"
                placeholder="MM/YY"
                maxlength="5"
              >
              <p class="error" data-error-for="expiry"></p>
            </div>

            <div class="field">
              <label class="title" for="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                inputmode="numeric"
                autocomplete="on"
                placeholder="123"
                maxlength="4"
              >
              <p class="error" data-error-for="cvv"></p>
            </div>
          </div>
          <div>
            <label class="title" for="address">Card billing address</label>
            <input
              type="text"
              id="billing-address"
              name="billing-address"
              autocomplete="billing-address"
              placeholder="12 Example Street"
            >
            <p class="error" data-error-for="billingAddres"></p>
          </div>

          <div class="field">
            <label class="title" for="cardName">Name on card</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              autocomplete="on"
              placeholder="Jane Doe"
            >
            <p class="error" data-error-for="cardName"></p>
          </div>

          <p class="hint">Billing address: the address you entered in step 2.</p>
        </section>

        <section class="step" data-step="6" hidden>
          <dl class="summary" id="summary"></dl>

          <div class="field">
            <label class="check">
              <input type="checkbox" id="creditConsent" name="creditConsent">
              <span>
                I authorise a credit check as part of this application.
              </span>
            </label>
            <p class="error" data-error-for="creditConsent"></p>
          </div>

          <div class="field">
            <label class="check">
              <input type="checkbox" id="terms" name="terms">
              <span>
                I confirm these details are correct and agree to the
                Terms of Service and Privacy Policy.
              </span>
            </label>
            <p class="error" data-error-for="terms"></p>
          </div>
        </section>

        <section class="success" id="success" hidden>
          <div class="tick">✓</div>
          <h2>Application received</h2>
          <p id="success-msg"></p>

          <div class="score" id="score" hidden>
            <span class="num" id="score-num"></span>
            <span class="band" id="score-band"></span>
          </div>
        </section>

        <div class="actions" id="actions">
          <button type="button" class="btn ghost" id="back" hidden>
            Back
          </button>
          <button type="submit" class="btn primary" id="next">
            Next
          </button>
        </div>
      </form>
    </div>
  `;
};
