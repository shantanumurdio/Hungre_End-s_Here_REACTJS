import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body.js";
import Fotter from "./src/Components/Footer.js";
// import About from "./src/Components/About";
import Error from "./src/Components/Error";
import Contact from "./src/Components/Contact";
import RestrauntMenu from "./src/Components/RestrauntMenu";
import Profile from "./src/Components/Profile";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import Cart from "./src/Components/Cart";
import store from "./src/utils/store";

const About = lazy(() => import("./src/Components/About"));

const Instamart = lazy(() => import("./src/Components/Instamart"));

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        {/* <Body /> */}
        <Outlet />
        <Fotter />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaraunt/:restrauntId",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Layout />);
root.render(<RouterProvider router={appRouter} />);