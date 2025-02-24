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
      element: (
        <h2 className="">
          <Outlet />
        </h2>
      ),
      children:
        path === "/dashboards"
          ? dashboardMenuListData.map(({ menu }) => ({
              path: "",
              element: (
                <h1>
                  <Outlet />
                </h1>
              ),
              children: menu.map(({ path, title }) => ({
                path: path,
                element: <h2>{title}</h2>,
              })),
            }))
          : path === "/applications"
          ? applicationMenuListData.map(({ menu }) => ({
              path: "",
              element: (
                <h1>
                  <Outlet />
                </h1>
              ),
              children: menu.map(({ path, title }) => ({
                path: path,
                element: <h1 className="">{title}</h1>,
              })),
            }))
          : path === "/layouts"
          ? pagesAndLayoutsMenuListData.map(({ menu }) => ({
              path: "",
              element: (
                <h1>
                  <Outlet />
                </h1>
              ),
              children: menu.map(({ path, title }) => ({
                path: path,
                element: <h1 className="">{title}</h1>,
              })),
            }))
          : path === "/forms"
          ? formsMenuListData.map(({ menu }) => ({
              path: "",
              element: (
                <h1>
                  <Outlet />
                </h1>
              ),
              children: menu.map(({ path, title }) => ({
                path: path,
                element: <h1 className="">{title}</h1>,
              })),
            }))
          : path === "/components"
          ? componentsMenuListData.map(({ menu }) => ({
              path: "",
              element: (
                <h1>
                  <Outlet />
                </h1>
              ),
              children: menu.map(({ path, title }) => ({
                path: path,
                element: <h1 className="">{title}</h1>,
              })),
            }))
          : path === "/elements"
          ? elementsMenuListData.map(({ menu }) => ({
              path: "",
              element: (
                <h1>
                  <Outlet />
                </h1>
              ),
              children: menu.map(({ path, title }) => ({
                path: path,
                element: <h1 className="">{title}</h1>,
              })),
            }))
          : [],
    })),
  },
]);
export default routes;
