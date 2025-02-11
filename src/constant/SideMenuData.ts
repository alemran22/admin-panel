import {
  bag,
  components,
  elements,
  forms,
  homeIcon,
  squareShape,
} from "../assets/icons";
const SideMenuData = [
  {
    id: 1,
    title: "dashboards",
    icon: homeIcon,
    path: "/",
    tooltip: "Dashboards",
  },
  {
    id: 2,
    title: "applications",
    icon: bag,
    path: "/",
    tooltip: "Applications",
  },
  {
    id: 3,
    title: "layouts",
    icon: squareShape,
    path: "/",
    tooltip: "Pages & Layouts",
  },
  { id: 4, title: "forms", icon: forms, path: "/", tooltip: "Forms" },
  {
    id: 4,
    title: "components",
    icon: components,
    path: "/",
    tooltip: "Components",
  },
  { id: 5, title: "elements", icon: elements, path: "/", tooltip: "Elements" },
];
export default SideMenuData;
