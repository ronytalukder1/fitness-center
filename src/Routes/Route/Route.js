import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);