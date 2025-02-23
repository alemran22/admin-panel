import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="w-full pt-[60px] px-16 flex flex-row h-[960px] bg-[#F8FAFC]">
      <Outlet />
    </div>
  );
};

export default MainArea;
