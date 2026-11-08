export type offerContentsType = {
   title: string;
   description: string;
   icon: string;
}

export const offerIcons: Record<string, string> = {
  "hand-coins": `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M11 15h2a2 2 0 0 0 0-4h-3a3 3 0 0 0-2 1l-1 1"/>
      <path d="m7 15 2 2h5l4-4a2 2 0 0 0-3-3l-2 2"/>
      <path d="M2 14h4v7H2z"/>
      <circle cx="16" cy="5" r="3"/>
      <path d="M16 3.5v3M14.8 4.5h2.4"/>
    </svg>
  `,
  "users-round": `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M18 21a8 8 0 0 0-16 0"/>
      <circle cx="10" cy="8" r="5"/>
      <path d="M20 21a8 8 0 0 0-5-7.3"/>
      <path d="M16 3.1a5 5 0 0 1 0 9.8"/>
    </svg>
  `,
  "clipboard-check": `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <rect x="5" y="4" width="14" height="18" rx="2"/>
      <path d="M9 4.5V3h6v1.5"/>
      <path d="m9 14 2 2 4-4"/>
    </svg>
  `,
  "bell-ring": `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/>
      <path d="M10 21h4"/>
      <path d="M2 2l3 3M22 2l-3 3"/>
    </svg>
  `,
  "checked": `
      <svg
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.8"
         stroke-linecap="round"
         stroke-linejoin="round"
         aria-hidden="true"
      >
         <circle cx="12" cy="12" r="9"/>
         <path d="m8 12 2.5 2.5L16 9"/>
      </svg>
  `
};

export const offerContents: offerContentsType[] = [
   {
      title: "Financial Assistance",
      description: "Support for qualifying expenses, subject to program rules.",
      icon: "hand-coins",
   },
   {
      title: "Individual Support",
      description: "Information and guidance throughout the application process.",
      icon: "users-round",
   },
   {
      title: "Clear Process",
      description: "Understand application steps, required documents, and review criteria.",
      icon: "clipboard-check",
   },
   {
      title: "Applicant Updates",
      description: "Stay informed through the program’s official communication channels.",
      icon: "bell-ring",
   },
];

export const HOW_IT_WORKS_CONTENTS: { title: string, description: string}[] = [
   {
      title: "Eligibility Check",
      description: "Determine if you meet the program's requirements.",
   },
   {
      title: "Application Submission",
      description: "Complete and submit your application with necessary documents.",
   },
   {
      title: "Review Process",
      description: "Undergo a thorough review of your application and supporting documents.",
   },
   {
      title: "Decision Notification",
      description: "Receive a notification regarding the outcome of your application.",
   },
]

export const WHO_CAN_APPLY: { title: string, description: string}[] = [
   {
      title: "Basic eligibility",
      description: "Meet the program's age, residency, or other applicable criteria.",
   },
   {
      title: "Required information",
      description: "Provide accurate information and only the documents genuinely required.",
   },
   {
      title: "Application review",
      description: "Applications are reviewed under the published program rules. Applying does not guarantee approval.",
   }
]

export const faqs: { question: string, answer: string}[] = [
   {
      question: "Who is eligible to receive benefits?",
      answer:
         "Eligibility depends on the criteria published for this program. Review the requirements before applying.",
   },
   {
      question: "How long does an application take?",
      answer:
         "Processing times depend on the program. Check the program details for an estimated timeframe, if available.",
   },
   {
      question: "Is there an application fee?",
      answer:
         "Check the program's fee policy to confirm whether applying is free or a fee applies.",
   },
   {
      question: "How can I contact support?",
      answer:
         "Use the verified email address or telephone number published by the program operator.",
   },
];
