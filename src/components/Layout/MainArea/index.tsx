import { Breadcrumb } from "@/pages/elements";
import { Outlet } from "react-router-dom";
import Elements from "./Elements";

const MainArea = () => {
  return (
    <div className="w-full pt-[60px] px-16 bg-[#F8FAFC]">
      <div className="py-6 w-full">
        <Breadcrumb />
      </div>
      <div className="bg-[#F8FAFC]">
        <Outlet />
        <Elements />
      </div>
    </div>
  );
};

export default MainArea;
