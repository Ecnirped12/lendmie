import './style.css'
import { registerRoutes, initRouter } from './router'
import { WAIT_PAGE_JVS } from './lendmie/wait-page'
import { mountLoanForm } from './lendmie-app/signup'

import { bindWaitPage } from './lendmie/wait-page'
registerRoutes({
   '/': {
      render: () => /*html*/`
         <div>
            ${WAIT_PAGE_JVS()}
         </div>
      `,
      onMount: () => {
         const root = document.querySelector<HTMLDivElement>('#app')!
         bindWaitPage(root, mountLoanForm)
      }
   },
   '/login': {
      render: () => /*html*/`
         <div>
            ${WAIT_PAGE_JVS()}
         </div>
      `,
      onMount: () => {
         const root = document.querySelector<HTMLDivElement>('#app')!
         bindWaitPage(root, mountLoanForm)
      }
   },
   '/signup': {
      render: () => '<div></div>',
      onMount: () => {
         mountLoanForm()
      }
   },
   '/about': {
      render: () => /*html*/`
         <div>
            <h1>About</h1><a href="/" data-link>Home</a>
         </div>
      `,
      onMount: () => {
         console.log(true)
      }
   },
})

initRouter()
