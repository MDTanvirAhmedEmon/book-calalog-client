import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allbooks',
            element: <AllBooks></AllBooks>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        },
      ]
    },
  ]);


  export default router;