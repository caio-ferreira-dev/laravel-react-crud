import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import LandingPage from "../pages";
import RegisterPage from "../pages/register";
import DashboardPage from "../pages/dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '/dashboard',
        element: <DashboardPage/>
    }
]);

export default router;