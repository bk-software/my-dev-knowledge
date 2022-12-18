import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignIn from "../components/signin_register/Signin";
import Register from '../components/signin_register/Register';
import Layout from "../components/layout/Layout";
import ProfilePage from "../components/profile/ProfilePage";
import { FunctionComponent } from "react";
import routes from "./routes";
const router = createBrowserRouter([
    {
      path: routes.LOGIN,
      element:<SignIn />,
    },
    {
      path: routes.REGISTER,
      element:<Register />,
    },
    {
      path: routes.HOMEPAGE,
      element:<Layout><ProfilePage></ProfilePage></Layout>,
    },
  ]);
  interface RouterProps {
    
  }
   
  const Router: FunctionComponent<RouterProps> = () => {
    return <RouterProvider router={router}  />
  }
   
  export default Router;