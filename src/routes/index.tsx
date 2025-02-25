import {
  applicationMenuListData,
  componentsMenuListData,
  dashboardMenuListData,
  elementsMenuListData,
  formsMenuListData,
  pagesAndLayoutsMenuListData,
} from "@/constant/menuListData.constant";
import SideMenuData from "@/constant/SideMenuData.constant";
import Layout from "@/Layout";
import { Error404V1 } from "@/pages/pagesAndLayout/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404V1 />,
    children: SideMenuData.map(({ path }) => ({
      path: path,
      element: <Outlet />,
      children:
        path === "/dashboards"
          ? dashboardMenuListData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/applications"
          ? applicationMenuListData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/layouts"
          ? pagesAndLayoutsMenuListData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, title }) => ({
                path: path,
                element: <h2 className="">{title}</h2>,
              })),
            }))
          : path === "/forms"
          ? formsMenuListData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/components"
          ? componentsMenuListData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/elements"
          ? elementsMenuListData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : [],
    })),
  },
]);
export default routes;
