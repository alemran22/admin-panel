import BreadcrumbNormal from "@/components/Elements/Breadcrumb/BreadcrumbNormal";
import Separators from "@/components/Elements/Breadcrumb/Separators";
import WithIcons from "@/components/Elements/Breadcrumb/WithIcons";

const Breadcrumbs = () => {
  return (
    <div className="flex flex-col gap-5 border border-red-500">
      <BreadcrumbNormal />
      <Separators />
      <WithIcons />
    </div>
  );
};

export default Breadcrumbs;
