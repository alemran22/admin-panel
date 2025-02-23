import SideMenuData from "@/constant/SideMenuData.constant";
import Layout from "@/Layout";

import { Error404V1 } from "@/pages/pagesAndLayout/Error";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404V1 />,
    children: SideMenuData.map((el) => ({
      path: el.path,
      element: (
        <h2 className="text-5xl italic mx-auto text-center text-green-600 capitalize font-extrabold mt-20">
          {el.title}
        </h2>
      ),
    })),
  },
]);
export default routes;
