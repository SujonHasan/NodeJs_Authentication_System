import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import SignUp from "../../Signup/SignUp";
import DashBoard from "../../Dashboard/DashBoard";
import PrivateRoute from "../Private Route/PrivateRoute";

const Router = createBrowserRouter(
    [{
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>
            },
        ]
    }
    ])

export default Router;