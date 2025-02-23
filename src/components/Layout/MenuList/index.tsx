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
  return (
    <div
      className={
        showMenuList
          ? "w-[240px] h-full border-r border-[#CAD5E2] px-4 py-6 "
          : "hidden"
      }
    >
      {pathname === "/dashboards"
        ? dashboardMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem key={id} path={`/dashboards/${path}`} title={title} />
              ))}
            </div>
          ))
        : pathname === "/applications"
        ? applicationMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem
                  key={id}
                  path={`/applications/${path}`}
                  title={title}
                />
              ))}
            </div>
          ))
        : pathname === "/layouts"
        ? pagesAndLayoutsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem key={id} path={`/layouts/${path}`} title={title} />
              ))}
            </div>
          ))
        : pathname === "/forms"
        ? formsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem key={id} path={`/forms/${path}`} title={title} />
              ))}
            </div>
          ))
        : pathname === "/components"
        ? componentsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem key={id} path={`/components/${path}`} title={title} />
              ))}
            </div>
          ))
        : pathname === "/elements"
        ? elementsMenuListData.map(({ group, menu }) => (
            <div key={group} className="border-b py-5">
              {menu.map(({ id, path, title }) => (
                <LinkItem key={id} path={`/elements/${path}`} title={title} />
              ))}
            </div>
          ))
        : ""}
    </div>
  );
};

export default MenuList;
