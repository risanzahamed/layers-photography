import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import BookService from "../Pages/BookService/BookService";
import Contact from "../Pages/Contact/Contact";
import MainHome from "../Pages/Home/MainHome";
import MyBookedService from "../Pages/MyBookedService/MyBookedService";
import UserBookedService from "../Pages/MyBookedService/UserBookedService";
import MyReview from "../Pages/MyReview/MyReview";
import SingleMyReview from "../Pages/MyReview/SingleMyReview";
import UpdateReview from "../Pages/MyReview/UpdateReview";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Service from "../Pages/Service/Service";
import PrivateRoute from "../Routes/PrivateRoute";
import Login from "../Shared/Authen/Login/Login";
import Register from "../Shared/Authen/Register/Register";
import Root from "./Root";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <MainHome />,
            },
            {
                path: "/home",
                element: <MainHome />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/reviews",
                element: <PrivateRoute><MyReview /></PrivateRoute>,
            },
            {
                path: "/services",
                element: <Service />,
            },
            {
                path: "/book-a-service",
                element: <PrivateRoute><BookService /></PrivateRoute> ,
            },
            {
                path: "/my-booked-service",
                element: <PrivateRoute><MyBookedService /></PrivateRoute>,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "post/:id",
                element: <PostDetails></PostDetails>,
                loader: ({ params }) => fetch(`https://layers-photography-server.vercel.app/post/${params.id}`)
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://layers-photography-server.vercel.app/update/${params.id}`),
                element: <UpdateReview></UpdateReview>
            },
        ],
    }
]);

export default router