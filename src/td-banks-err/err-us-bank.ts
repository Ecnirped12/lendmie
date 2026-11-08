export const US_BANK_ERR_JVS = (): void => {

   const passwordInputElement =
      document.querySelector<HTMLInputElement>("#password");

   const togglePasswordButtonElement =
   document.querySelector<HTMLButtonElement>("#togglePassword");

   if (passwordInputElement && togglePasswordButtonElement) {
      const passwordInput = passwordInputElement;
      const togglePasswordButton = togglePasswordButtonElement;

      function updateToggleState(): void {
         const isVisible = passwordInput.type === "text";

         // Change only the visible button text.
         const textNode = togglePasswordButton.firstChild;

         if (textNode?.nodeType === Node.TEXT_NODE) {
            textNode.textContent = isVisible ? " Hide " : " Show ";
         }

         togglePasswordButton.setAttribute(
            "aria-label",
            isVisible ? "Hide password" : "Show password",
         );

         togglePasswordButton.setAttribute(
            "aria-pressed",
            String(isVisible),
         );
      }

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
   }

}