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
import Apply from './components/Apply';
import Blogs from './components/Blogs';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: 'apply',
        element: <Apply />
      },
      {
        path: 'blogs',
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
