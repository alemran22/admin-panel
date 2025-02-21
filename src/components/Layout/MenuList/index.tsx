import LinkItem from "@/components/ui/LinkItem";

const MenuList = ({ showMenuList }: { showMenuList: boolean }) => {
  return (
    <div
      className={
        showMenuList
          ? "w-[240px] h-full border-r border-[#CAD5E2] px-4 py-6 "
          : "hidden"
      }
    >
      <h3 className="text-[#485262] font-semibold py-2">Dashboards</h3>
      <div className="">
        <LinkItem path="/" title={"CRM Analytics"} />
      </div>
    </div>
  );
};

export default MenuList;
