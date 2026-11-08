type Route = {
  render: () => string
  onMount?: () => void
}

export const routes: Record<string, Route> = {}

export function registerRoutes(r: Record<string, Route>) {
  Object.assign(routes, r)
}

export function render(path: string) {
   const app = document.querySelector<HTMLDivElement>('#app')!
   const route = routes[path]

   if (!route) {
      app.innerHTML = "<h1>404 - Page not found</h1>"
      return
   }

   app.innerHTML = route.render()
      route.onMount?.()
}

export function navigate(path: string) {
   history.pushState({}, "", path)
   render(path)
}

export function initRouter() {
   // handle link clicks
   document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement

      if (target.matches("[data-link]")) {
         e.preventDefault()
         navigate(target.getAttribute("href")!)
      }
   })

   // back/forward buttons
   window.addEventListener("popstate", () => {
      render(location.pathname)
   })

   // initial load
   window.addEventListener("load", () => {
      render(location.pathname)
   })
}