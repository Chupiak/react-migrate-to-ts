import React from "react";
import ReactDOM from "react-dom/client";
import Listing from "./listing/Listing";
import Description from "../src/description_components/ComponentTop/ComponentTop";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Listing />,
    },
    {
        path: "description",
        element: <Description/>,
    },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
