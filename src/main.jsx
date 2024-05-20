import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Root layout
import RootLayout from "./Layouts/RootLayout";

//pages
import HomePage from "./Pages/Home/HomePage";
import About from "./Pages/About/About";
import Services from "./Pages/Service/ServicePage";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Pages/Error/NotFound";

//styles
import "./styles/index.css";
import ServicePage from "./Pages/Service/ServicePage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
