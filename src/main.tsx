import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import { ErrorPage } from './pages/Error'
import { Contact } from './routes/Contact'
import { Home } from './routes/Home'
import { Projects } from './routes/Projects'
import { GlobalStyle } from './styles/global'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  },
  {
    path: "projects",
    element: <Projects />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>,
)
