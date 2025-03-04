import LinkItem from "@/components/ui/LinkItem";
import {
  applicationMenuListData,
  componentsMenuListData,
  dashboardMenuListData,
  elementsMenuListData,
  formsMenuListData,
  pagesAndLayoutsMenuListData,
} from "@/constant/menuListData.constant";
import { useLocation } from "react-router-dom";

const MenuList = ({ showMenuList }: { showMenuList: boolean }) => {
  const { pathname } = useLocation();
  const pathBase = pathname.split("/")[1];
  return (
    <div
      className={
        showMenuList
          ? "w-[240px] h-full border-r border-[#CAD5E2] px-4 py-6 bg-white"
          : "hidden"
      }
    >
      {pathBase === "dashboards"
        ? dashboardMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem
                  key={id}
                  path={`/${pathBase}/${path}`}
                  title={title}
                />
              ))}
            </div>
          ))
        : pathBase === "applications"
        ? applicationMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem
                  key={id}
                  path={`/${pathBase}/${path}`}
                  title={title}
                />
              ))}
            </div>
          ))
        : pathBase === "layouts"
        ? pagesAndLayoutsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem
                  key={id}
                  path={`/${pathBase}/${path}`}
                  title={title}
                />
              ))}
            </div>
          ))
        : pathBase === "forms"
        ? formsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem
                  key={id}
                  path={`/${pathBase}/${path}`}
                  title={title}
                />
              ))}
            </div>
          ))
        : pathBase === "components"
        ? componentsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem
                  key={id}
                  path={`/${pathBase}/${path}`}
                  title={title}
                />
              ))}
            </div>
          ))
        : pathBase === "elements"
        ? elementsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem
                  key={id}
                  path={`/${pathBase}/${path}`}
                  title={title}
                />
              ))}
            </div>
          ))
        : ""}
    </div>
  );
};

export default MenuList;
