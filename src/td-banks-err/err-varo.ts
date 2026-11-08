export const VARO_ERR_JVS = (): void => {

   const passwordInput = document.querySelector("#password") as HTMLInputElement | null
   const togglePasswordButton = document.querySelector("#togglePassword") as HTMLInputElement | null

   if (!passwordInput || !togglePasswordButton) {
      return
   }
   
   const EYE_OPEN_SVG = `
      <svg height="24" viewBox="0 0 24 24" width="24">
         <path
         d="M12 15.3334C13.8409 15.3334 15.3333 13.841 15.3333 12C15.3333 10.1591 13.8409 8.66669 12 8.66669C10.159 8.66669 8.66663 10.1591 8.66663 12C8.66663 13.841 10.159 15.3334 12 15.3334Z"
         fill="#1c1c1c">
         </path>
         <path
         d="M12 4.66669C7.12212 4.66669 2.898 7.52159 0.74108 11.6939C0.641808 11.8859 0.641808 12.1141 0.74108 12.3062C2.898 16.4784 7.12212 19.3334 12 19.3334C16.8778 19.3334 21.1019 16.4785 23.2588 12.3062C23.3581 12.1141 23.3581 11.8859 23.2588 11.6939C21.1019 7.5216 16.8778 4.66669 12 4.66669ZM12 18C7.7823 18 4.08148 15.5997 2.08931 12C4.08148 8.40035 7.7823 6.00002 12 6.00002C16.2176 6.00002 19.9184 8.40036 21.9106 12C19.9184 15.5997 16.2176 18 12 18Z"
         fill="#1c1c1c">
         </path>
      </svg>
   `;

   const EYE_CLOSE_SVG = `
      <svg width="24" height="24" viewBox="0 0 24 24">
         <path
         fill-rule="evenodd"
         d="M17.1113 21.8897L15.3652 18.8653C14.2936 19.1703 13.1654 19.3333 12 19.3333C7.12212 19.3333 2.898 16.4784 0.74108 12.3061C0.641808 12.1141 0.641808 11.8859 0.74108 11.6938C2.21874 8.8355 4.66661 6.59544 7.63021 5.46804L5.79757 2.2938L6.95227 1.62714L18.266 21.2231L17.1113 21.8897ZM13.5347 15.695L14.6748 17.6696C13.816 17.8857 12.9203 18 12 18C7.7823 18 4.08148 15.5997 2.08931 12C3.47177 9.50201 5.67706 7.58159 8.30688 6.64007L9.56783 8.82409C8.61457 9.5552 7.99996 10.7058 7.99996 12C7.99996 14.2091 9.79082 16 12 16C12.5437 16 13.0621 15.8915 13.5347 15.695Z"
         fill="#1c1c1c">
         </path>
         <path
         d="M17.8463 17.8564C20.1442 16.6182 22.0345 14.6744 23.2588 12.3061C23.3581 12.1141 23.3581 11.8859 23.2588 11.6938C21.1019 7.52157 16.8778 4.66666 12 4.66666C11.423 4.66666 10.8553 4.7066 10.299 4.78393L11.0259 6.04298C11.3471 6.01451 11.672 5.99999 12 5.99999C16.2176 5.99999 19.9184 8.40033 21.9106 12C20.7976 14.0112 19.1511 15.648 17.1792 16.7009L17.8463 17.8564Z"
         fill="#1c1c1c">
         </path>
      </svg>
   `;

   const updateToggleState = (): void => {
      const isVisible = passwordInput.type === "text";

      togglePasswordButton.setAttribute(
         "aria-label",
         isVisible ? "eye-close" : "eye-open",
      );

      togglePasswordButton.innerHTML = isVisible
         ? EYE_CLOSE_SVG
         : EYE_OPEN_SVG;
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