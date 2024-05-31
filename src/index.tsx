import { App } from "./components/App";
import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ShopLazy } from "./pages/shop/ShopLazy";
import { AboutLazy } from "./pages/about/AboutLazy";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        // <Suspense> - отоброжается, пока грузится ленивая компонента
        element: <Suspense fallback={'Loading...'}><AboutLazy/></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback={'Loading...'}><ShopLazy/></Suspense>
      },
    ]
  }
])

container.render(
  <RouterProvider router={router} />
);
