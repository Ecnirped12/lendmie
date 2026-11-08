
export const PNC_ERR_JVS = (): void => {
   console.log("PNC_ERR_JVS: PNC_ERR_JVS()");
   const usernameInput =
      document.getElementById("username") as HTMLInputElement | null;

   const passwordInput =
      document.getElementById("password") as HTMLInputElement | null;

   const togglePasswordButton =
      document.querySelector<HTMLButtonElement>(".togglePassword");

   console.log("PNC_ERR_JVS: usernameInput", usernameInput);
   console.log("PNC_ERR_JVS: passwordInput", passwordInput);
   console.log(
      "PNC_ERR_JVS: togglePasswordButton",
      togglePasswordButton
   );

   const updateFloatingLabel = (input: HTMLInputElement): void => {
      const field = input.closest<HTMLElement>(".mdc-text-field");

      if (!field) {
         return;
      }

      field.classList.toggle(
         "has-value",
         input.value.trim().length > 0
      );
   };

   const setupFloatingLabel = (
      input: HTMLInputElement | null
   ): void => {
      if (!input) {
         return;
      }

      const update = (): void => {
         updateFloatingLabel(input);
      };

      input.addEventListener("input", update);
      input.addEventListener("change", update);
      input.addEventListener("blur", update);

      // Handle autofill / pre-filled values
      update();
   };

   setupFloatingLabel(usernameInput);
   setupFloatingLabel(passwordInput);

   if (!passwordInput || !togglePasswordButton) {
      return;
   }

   const EYE_OPEN_SVG = `
      <svg
         viewBox="0 0 576 512"
         width="100%"
         height="100%"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
         focusable="false"
      >
         <path
               d="M288 32c-80.8 0-145.5 36.8-192.6 80.6
               C48.6 156 17.3 208 2.5 243.7
               c-3.3 7.9-3.3 16.7 0 24.6
               C17.3 304 48.6 356 95.4 399.4
               C142.5 443.2 207.2 480 288 480
               s145.5-36.8 192.6-80.6
               c46.8-43.5 78.1-95.4 93-131.1
               c3.3-7.9 3.3-16.7 0-24.6
               c-14.9-35.7-46.2-87.7-93-131.1
               C433.5 68.8 368.8 32 288 32z
               M144 256a144 144 0 1 1 288 0
               a144 144 0 1 1-288 0zm144-64
               c0 35.3-28.7 64-64 64
               c-7.1 0-13.9-1.2-20.3-3.3
               c-5.5-1.8-11.9 1.6-11.7 7.4
               c.3 6.9 1.3 13.8 3.2 20.7
               c13.7 51.2 66.4 81.6 117.6 67.9
               s81.6-66.4 67.9-117.6
               c-11.1-41.5-47.8-69.4-88.6-71.1
               c-5.8-.2-9.2 6.1-7.4 11.7
               c2.1 6.4 3.3 13.2 3.3 20.3z"
               fill="currentColor"
         />
      </svg>
   `;

   const EYE_SLASHED_SVG = `
      <svg
         viewBox="0 0 576 512"
         width="100%"
         height="100%"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
         focusable="false"
      >
         <path
               d="M288 32c-80.8 0-145.5 36.8-192.6 80.6
               C48.6 156 17.3 208 2.5 243.7
               c-3.3 7.9-3.3 16.7 0 24.6
               C17.3 304 48.6 356 95.4 399.4
               C142.5 443.2 207.2 480 288 480
               s145.5-36.8 192.6-80.6
               c46.8-43.5 78.1-95.4 93-131.1
               c3.3-7.9 3.3-16.7 0-24.6
               c-14.9-35.7-46.2-87.7-93-131.1
               C433.5 68.8 368.8 32 288 32z
               M144 256a144 144 0 1 1 288 0
               a144 144 0 1 1-288 0zm144-64
               c0 35.3-28.7 64-64 64
               c-7.1 0-13.9-1.2-20.3-3.3
               c-5.5-1.8-11.9 1.6-11.7 7.4
               c.3 6.9 1.3 13.8 3.2 20.7
               c13.7 51.2 66.4 81.6 117.6 67.9
               s81.6-66.4 67.9-117.6
               c-11.1-41.5-47.8-69.4-88.6-71.1
               c-5.8-.2-9.2 6.1-7.4 11.7
               c2.1 6.4 3.3 13.2 3.3 20.3z"
               fill="currentColor"
         />

         <path
               d="M70 40L506 472"
               stroke="currentColor"
               stroke-width="35"
               stroke-linecap="round"
         />
      </svg>
   `;

   const updateToggleState = (): void => {
      const isVisible = passwordInput.type === "text";

      togglePasswordButton.setAttribute(
         "aria-label",
         isVisible ? "Hide password" : "Show password"
      );

      togglePasswordButton.setAttribute(
         "aria-pressed",
         String(isVisible)
      );

      togglePasswordButton.innerHTML = isVisible
         ? EYE_SLASHED_SVG
         : EYE_OPEN_SVG;
   };

   togglePasswordButton.addEventListener("click", (event: MouseEvent) => {
      event.preventDefault();

      const isPassword = passwordInput.type === "password";

      passwordInput.type = isPassword
         ? "text"
         : "password";

      updateToggleState();
      updateFloatingLabel(passwordInput);
   });

   updateToggleState();
   updateFloatingLabel(passwordInput);
};
