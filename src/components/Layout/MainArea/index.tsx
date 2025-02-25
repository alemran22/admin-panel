import { Breadcrumb } from "@/pages/elements";
import { Outlet } from "react-router-dom";
import RoundedAvatar from "./Elements/Avatar/RoundedAvatar";

const MainArea = () => {
  return (
    <div className="w-full pt-[60px] px-16  h-[960px] bg-[#F8FAFC]">
      <div className="py-6 w-full">
        <Breadcrumb />
      </div>
      <div className="bg-[#F8FAFC]">
        <Outlet />
        <RoundedAvatar />
      </div>
    </div>
  );
};

export default MainArea;
