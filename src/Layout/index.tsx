import { MainArea, MenuList, SideMenu, TopBar } from "@/components/Layout";
import { useState } from "react";

const Layout = () => {
  const [showMenuList, setShowMenuList] = useState(true);
  return (
    <div className=" h-screen w-full flex flex-row overflow-hidden">
      <SideMenu />
      <div className="flex flex-row w-full">
        {/* menu list */}
        <MenuList showMenuList={showMenuList} />
        <section
          className={` overflow-y-auto h-screen ${
            showMenuList ? "w-[calc(100%-240px)]" : "w-full"
          }`}
        >
          <TopBar
            showMenuList={showMenuList}
            setShowMenuList={setShowMenuList}
          />
          <MainArea />
        </section>
      </div>
    </div>
  );
};

export default Layout;
