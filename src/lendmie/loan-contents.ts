import {
  CURRENCY,
  MIN_AMOUNT,
  MAX_AMOUNT,
  MIN_AGE,
  TERMS,
  PURPOSES,
} from "../lendmie/sign-up";

// The numbers below come from the application form's own settings, so the
// page and the form can never disagree about limits or terms.
const money = (amount: number): string =>
  `${CURRENCY}${amount.toLocaleString("en-US")}`;

const termMonths = TERMS.map((term) => term.value);
const termList = `${termMonths.slice(0, -1).join(", ")} or ${termMonths.at(-1)} months`;

const purposeList = PURPOSES.map((purpose) => purpose.title.toLowerCase()).join(", ");

type Content = { title: string; description: string };

export type Offer = Content & { icon: keyof typeof LOAN_ICONS };

export type Faq = { question: string; answer: string };

// ---------- Icons (24x24, drawn with the current text colour) ----------
const icon = (paths: string): string => `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${paths}
  </svg>
`;

export const LOAN_ICONS = {
   amount: icon(
      '<line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
   ),
   calendar: icon(
      '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
   ),
   purposes: icon(
      '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
   ),
   clock: icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
   shield: icon(
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
   ),
   mail: icon('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
   checked: icon(
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
   ),
   } as const;

   // ---------- What we offer ----------
   export const LOAN_OFFERS: Offer[] = [
   {
      icon: "amount",
      title: "Flexible amounts",
      description: `Borrow anywhere from ${money(MIN_AMOUNT)} to ${money(MAX_AMOUNT)}, depending on what you need.`,
   },
   {
      icon: "calendar",
      title: "Repayment terms that fit",
      description: `Choose to repay over ${termList}.`,
   },
   {
      icon: "purposes",
      title: "Loans for many needs",
      description: `Use your loan for ${purposeList}.`,
   },
   {
      icon: "clock",
      title: "Quick online application",
      description:
         "Apply from your phone or computer in a few minutes. There is no paperwork to print.",
   },
   {
      icon: "shield",
      title: "Credit check with your permission",
      description:
         "A credit check is part of the application, and we only run it after you agree.",
   },
   {
      icon: "mail",
      title: "Kept in the loop",
      description:
         "Once you apply, we email you at the address you provide so you always know where you stand.",
   },
];

// ---------- How it works ----------
export const LOAN_STEPS: Content[] = [
   {
      title: "Tell us about yourself",
      description:
         "Share your name, contact details, date of birth and home address.",
   },
   {
      title: "Choose your loan",
      description: `Pick an amount between ${money(MIN_AMOUNT)} and ${money(MAX_AMOUNT)}, a repayment term, and what the loan is for.`,
   },
   {
      title: "Share your income",
      description:
         "Tell us about your work and your total monthly income so we can understand what you can comfortably repay.",
   },
   {
      title: "Add your payment card",
      description:
         "Enter the card you want to use. Your billing address is the one you already gave us.",
   },
   {
      title: "Review and submit",
      description:
         "Check everything, give your permission for a credit check, and send in your application.",
   },
];

// ---------- Who can apply ----------
export const LOAN_ELIGIBILITY: Content[] = [
   {
      title: `You are ${MIN_AGE} or older`,
      description: "You must be at least 18 to apply for a loan.",
   },
   {
      title: "You have a regular income",
      description:
         "From a job, your own business, or another steady source you can tell us about.",
   },
   {
      title: "You can be reached",
      description:
         "You have a valid email address, phone number and home address.",
   },
   {
      title: "You agree to a credit check",
      description:
         "We review your credit as part of every application, with your permission.",
   },
];

// ---------- FAQs ----------
export const LOAN_FAQS: Faq[] = [
   {
      question: "How much can I borrow?",
      answer: `You can apply for between ${money(MIN_AMOUNT)} and ${money(MAX_AMOUNT)}. The amount you are offered depends on your application.`,
   },
   {
      question: "How long will I have to repay?",
      answer: `You can choose a repayment term of ${termList}.`,
   },
   {
      question: "What can I use the loan for?",
      answer: `Common reasons include ${purposeList}. If yours is not listed, choose “Other” on the form.`,
   },
   {
      question: "What do I need to apply?",
      answer:
         "Your personal and contact details, home address, employment and income information, and a payment card.",
   },
   {
      question: "Will you check my credit?",
      answer:
         "Yes. A credit check is part of the application, and we ask for your permission before we run it.",
   },
   {
      question: "How will I hear about my application?",
      answer:
         "We email you at the address you gave when you applied. Check your spam folder if you do not see our message.",
   },
];
