import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App'
import Layout from './components/layout/Layout';
import Register from './components/signin_register/Register';
import SignIn from './components/signin_register/Signin';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<SignIn />,
  },
  {
    path: "/register",
    element:<Register />,
  },
  {
    path: "/home",
    element:<Layout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
