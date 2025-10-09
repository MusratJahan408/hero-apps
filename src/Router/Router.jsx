import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import MainLayOut from "../LayOut/MainLayOut";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/app/:id",
        Component: AppDetails,
      },
    ],
  },
]);
export default router;
