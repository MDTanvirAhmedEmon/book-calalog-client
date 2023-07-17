import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import AddBook from "../pages/addBook/AddBook";
import BookDetails from "../pages/BookDetails/BookDetails";
import EditBook from "../pages/EditBook/EditBook";

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
            path: '/book-details/:id',
            element: <BookDetails></BookDetails>
        },
        {
            path: '/addbook',
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute> 
        },
        {
            path: '/editbook/:id',
            element: <PrivateRoute><EditBook></EditBook></PrivateRoute> 
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