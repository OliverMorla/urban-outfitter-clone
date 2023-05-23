import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import News from "./pages/News/News";
import "./App.scss"

/* The PageLayout component is defined to layout the main structure of the page */
function PageLayout() {
    return (
        <div className="wrapper">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

/* The contentRouter object is created using the createBrowserRouter function from the react-router-dom library. */
const contentRouter = createBrowserRouter([{
    path: '/',
    element: <PageLayout />,
    children: [{
        path: '/',
        element: <Home />,
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/products/:id',
        element: <Product />
    },
    {
        path: '/mens-clothing',
        element: <Products />
    },
    {
        path: '/womens-clothing',
        element: <Products />
    },
    {
        path: '/contact-us',
        element: <Contact />
    },
    {
        path: '/news',
        element: <News />
    },]
}])

/* The App component is defined and returns a RouterProvider component from the react-router-dom library */
export default function App() {
    return (
        <>
            <RouterProvider router={contentRouter} />
        </>
    )
}