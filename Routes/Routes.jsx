import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "../src/Pages/Home/Home.jsx";
import About from "../src/Pages/About/About.jsx";
import Contact from "../src/Pages/Contact/Contact.jsx";
import SingleProduct from "../src/Pages/SingleProduct/SingleProduct.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />, 
        children: [
            { path: "home", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "SingleProduct/:id", element: <SingleProduct /> }
        ]
    }
]);


