import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="w-full pt-[60px] px-16 bg-[#F8FAFC]">
      <div className="bg-[#F8FAFC]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainArea;
