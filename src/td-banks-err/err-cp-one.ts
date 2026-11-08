
export const CAPITAL_ONE_ERR_JVS = (): void => {
   const passwordInput = document.getElementById(
      "password",
   ) as HTMLInputElement | null;

   const togglePasswordButton = document.getElementById(
      "togglePassword",
   ) as HTMLButtonElement | null;

   if (!passwordInput || !togglePasswordButton) {
      return;
   }

   const EYE_OPEN_SVG = `
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
         aria-hidden="true"
      >
         <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
         <circle cx="12" cy="12" r="3" />
      </svg>
   `;

   const EYE_SLASHED_SVG = `
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
         aria-hidden="true"
      >
         <path d="M3 3l18 18" />
         <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
         <path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c6.5 0 10 8 10 8a18.4 18.4 0 0 1-3.1 4.4" />
         <path d="M6.6 6.6C3.7 8.6 2 12 2 12s3.5 8 10 8c1.7 0 3.2-.4 4.5-1" />
      </svg>
   `;

   const updateToggleState = (): void => {
      const isVisible = passwordInput.type === "text";

      togglePasswordButton.setAttribute(
         "aria-label",
         isVisible ? "Hide password" : "Show password",
      );

      togglePasswordButton.setAttribute(
         "aria-pressed",
         String(isVisible),
      );

      const iconHost =
         togglePasswordButton.querySelector("omni-icon");

      if (iconHost) {
         iconHost.innerHTML = isVisible
         ? EYE_SLASHED_SVG
         : EYE_OPEN_SVG;
      }
   };

   togglePasswordButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      passwordInput.type =
         passwordInput.type === "password"
         ? "text"
         : "password";

      updateToggleState();
   });

   updateToggleState();
};
