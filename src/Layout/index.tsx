import { MainArea, SideMenu, TopBar } from "@/components/Layout";

const Layout = () => {
  return (
    <div className=" h-screen w-full flex flex-row ">
      {/* left nav */}
      <SideMenu />
      {/* right area */}
      <section className="w-full">
        {/* top bar */}
        <TopBar />
        {/* Main area */}
        <MainArea />
      </section>
    </div>
  );
};

export default Layout;
