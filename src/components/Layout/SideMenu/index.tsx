import SideMenuData from "@/constant/SideMenuData.constant";
import { settings } from "../../../assets/icons";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const SideMenu = () => {
  return (
    <div className="bg-white border-r border-[#CAD5E2] flex flex-col justify-between items-center p-2 w-20">
      {/* top */}
      <div className=" ">
        <div className="p-1 rounded-md cursor-pointer">
          <img
            src="https://lineone.piniastudio.com/images/app-logo.svg"
            alt=""
            className="size-10 mt-2"
          />
        </div>
        <div className="flex flex-col gap-5 pt-6 items-center">
          {SideMenuData.map((menu) => (
            <div className="hover:bg-[#DCDAFA] rounded-md p-[6px]">
              <NavLink
                id={menu.title}
                key={menu.id}
                to={menu.path}
                className=""
              >
                <img src={menu.icon} alt="" className="size-8" />
              </NavLink>
              <Tooltip
                anchorSelect={`#${menu.title}`}
                content={menu.tooltip}
                place="right"
                style={{
                  backgroundColor: "#DCDAFA",
                  color: "black",
                  fontWeight: "bold",
                  padding: "4px 8px",
                  marginLeft: "5px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* bottom */}
      <div className="">
        <div className="hover:bg-[#DCDAFA] p-2 rounded-md cursor-pointer">
          <img src={settings} alt="" className="size-8" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
