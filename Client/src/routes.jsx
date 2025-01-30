import Followers from "./Components/Followers";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const routes = [
    {
        element: <Home />, 
        path: "/",
    }, 
    {
        element: <Followers />, 
        path: "/test"
    },
    {
        element: <Login />, 
        path: "/login",
        primary: false,
    },
    {
        element: <Register />, 
        path: "/register",
        primary: false,
    }, 
    {
        element: <Inbox />, 
        path: "/inbox",
        primary: true,
        rSide: true, 
    }
]

export default routes;