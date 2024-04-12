import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import Addemployee from "./Pages/AddEmployee/Addemployee";
import EditEmployee from "./Pages/EditEmployee/EditEmployee";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/add-employee',
        element: <Addemployee />
    },
    {
        path: '/view-edit-employee/:id',
        element: <EditEmployee />
    },
])