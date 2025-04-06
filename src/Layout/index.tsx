import { MainArea, MenuList, SideMenu, TopBar } from "@/components/Layout";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Layout = () => {
  const [showMenuList, setShowMenuList] = useState(false);
  const handle = useFullScreenHandle();
  return (
    <FullScreen handle={handle}>
      <div className="h-screen w-full flex flex-row overflow-hidden">
        <SideMenu />
        <div className="flex flex-row w-full">
          {/* menu list */}
          <MenuList showMenuList={showMenuList} />
          <section
            className={`overflow-y-auto h-screen ${
              showMenuList ? "w-[calc(100%-240px)]" : "w-full"
            }`}
          >
            <TopBar
              handle={handle}
              showMenuList={showMenuList}
              setShowMenuList={setShowMenuList}
            />
            <MainArea />
          </section>
        </div>
      </div>
    </FullScreen>
  );
};

export default Layout;
