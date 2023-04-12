import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import Blogs from './components/Blogs';
import Details from './components/Details/Details';
import Applied from './components/Apply/Applied';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('/feature.json')
      },
      {
        path: 'details/:useId',
        element: <Details />,
        loader: () => fetch('/feature.json')
      },
      {
        path: 'header',
        element: <Headers />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied',
        element: <Applied />,
        loader: () => fetch('/feature.json')
      },
      {
        path: 'blogsc',
        element: <Blogs />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
