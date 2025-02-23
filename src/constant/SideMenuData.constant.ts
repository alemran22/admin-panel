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
    path: "/dashboards",
    tooltip: "Dashboards",
  },
  {
    id: 2,
    title: "applications",
    icon: bag,
    path: "/applications",
    tooltip: "Applications",
  },
  {
    id: 3,
    title: "layouts",
    icon: squareShape,
    path: "/layouts",
    tooltip: "Pages & Layouts",
  },
  { id: 4, title: "forms", icon: forms, path: "/forms", tooltip: "Forms" },
  {
    id: 4,
    title: "components",
    icon: components,
    path: "/components",
    tooltip: "Components",
  },
  {
    id: 5,
    title: "elements",
    icon: elements,
    path: "/elements",
    tooltip: "Elements",
  },
];
export default SideMenuData;
