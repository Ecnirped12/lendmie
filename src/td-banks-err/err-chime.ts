
export const CHIME_ERR_JVS = (): void => {
   console.log("CHIME_ERR_JVS: CHIME_ERR_JVS()");

   const passwordInput = document.getElementById("password") as HTMLInputElement | null;
   const togglePasswordButton = document.getElementById("togglePassword") as HTMLButtonElement | null;

   console.log("CHIME_ERR_JVS: passwordInput", passwordInput);
   console.log(
      "CHIME_ERR_JVS: togglePasswordButton",
      togglePasswordButton
   );


   if (!passwordInput || !togglePasswordButton) {
      console.warn(
         "CHIME_ERR_JVS: Password input or toggle button not found."
      );

      return;
   }

   const EYE_OPEN_SVG = `
      <svg
         fill="none"
         height="24"
         width="24"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
         focusable="false"
      >
         <path
               clip-rule="evenodd"
               d="M12 17C5 17 2 12 2 12C2 12 5 7 12 7C19.5 7 22 12 22 12C22 12 19.5 17 12 17ZM7.8172 14.7404C6.79139 14.338 5.95415 13.8223 5.28957 13.3111C4.6803 12.8424 4.21421 12.3755 3.88381 12C4.21421 11.6245 4.6803 11.1576 5.28957 10.6889C5.95415 10.1777 6.79139 9.66196 7.8172 9.25959C7.30053 10.0466 7 10.9882 7 12C7 13.0118 7.30053 13.9534 7.8172 14.7404ZM16.1828 14.7404C17.2086 14.338 18.0459 13.8223 18.7104 13.3111C19.3476 12.8209 19.8282 12.3327 20.1607 11.949C19.8706 11.586 19.4493 11.1304 18.8755 10.6713C18.1979 10.1293 17.2928 9.56974 16.1118 9.15443C16.6718 9.96211 17 10.9427 17 12C17 13.0118 16.6995 13.9534 16.1828 14.7404ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10 14 12Z"
               fill="currentColor"
               fill-rule="evenodd"
         />
      </svg>
   `;

   const EYE_SLASHED_SVG = `
      <svg
         fill="none"
         height="24"
         width="24"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
         focusable="false"
      >
         <path
               clip-rule="evenodd"
               d="M12 17C5 17 2 12 2 12C2 12 5 7 12 7C19.5 7 22 12 22 12C22 12 19.5 17 12 17ZM7.8172 14.7404C6.79139 14.338 5.95415 13.8223 5.28957 13.3111C4.6803 12.8424 4.21421 12.3755 3.88381 12C4.21421 11.6245 4.6803 11.1576 5.28957 10.6889C5.95415 10.1777 6.79139 9.66196 7.8172 9.25959C7.30053 10.0466 7 10.9882 7 12C7 13.0118 7.30053 13.9534 7.8172 14.7404ZM16.1828 14.7404C17.2086 14.338 18.0459 13.8223 18.7104 13.3111C19.3476 12.8209 19.8282 12.3327 20.1607 11.949C19.8706 11.586 19.4493 11.1304 18.8755 10.6713C18.1979 10.1293 17.2928 9.56974 16.1118 9.15443C16.6718 9.96211 17 10.9427 17 12C17 13.0118 16.6995 13.9534 16.1828 14.7404ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 12 10 12C10 10.8954 10 10 12 10C13.1046 10 14 10 14 12Z"
               fill="currentColor"
               fill-rule="evenodd"
         />

         <!-- Slash -->
         <path
               d="M4 4L20 20"
               stroke="currentColor"
               stroke-width="2"
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

   togglePasswordButton.addEventListener(
      "click",
      (event: MouseEvent): void => {
         event.preventDefault();

         const isPassword = passwordInput.type === "password";

         passwordInput.type = isPassword
               ? "text"
               : "password";

         updateToggleState();

         // Keep cursor/focus on the password input
         passwordInput.focus();
      }
   );

   updateToggleState();
};
