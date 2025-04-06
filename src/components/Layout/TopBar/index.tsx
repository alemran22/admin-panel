import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import {
  CiSearch,
  GrPaint,
  HiOutlineBell,
  IoSunny,
  LiaAngleLeftSolid,
  PiSquaresFour,
  RiMenu2Line,
} from "../../../assets/icons";
import type { FullScreenHandle } from "react-full-screen";
const TopBar = ({
  showMenuList,
  setShowMenuList,
  handle,
}: {
  showMenuList: boolean;
  setShowMenuList: React.Dispatch<React.SetStateAction<boolean>>;
  handle: FullScreenHandle;
}) => {
  return (
    <div
      className={`h-[60px] fixed bg-white/80 border-b border-[#CAD5E2] flex flex-row justify-between items-center px-16 ${
        showMenuList ? "w-[calc(100%-320px)]" : "w-[calc(100%-80px)]"
      }`}
    >
      {/* left */}
      <button onClick={() => setShowMenuList(!showMenuList)} className="">
        {showMenuList ? (
          <LiaAngleLeftSolid size={26} className="text-[#4F46E5]" />
        ) : (
          <RiMenu2Line size={26} className="text-[#4F46E5]" />
        )}
      </button>
      {/* right */}
      <div className="flex flex-row gap-4 items-center">
        {/* input field */}
        <div className="relative">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Here"
            className="bg-[#E9EEF5] pl-10 py-1 rounded-full outline-none"
          />
          <CiSearch
            size={20}
            className="absolute top-1/2 -translate-y-1/2 ml-3 text-[#5c6065]"
          />
        </div>
        <div className="flex flex-row gap-1 items-center">
          <button className="hover:bg-[#E9EEF5] p-2 rounded-full">
            <IoSunny size={24} className="text-[#FFB900]" />
          </button>
          <button className="hover:bg-[#E9EEF5] p-2 rounded-full">
            <GrPaint size={24} className="text-[#0092FF]" />
          </button>
          <button className="hover:bg-[#E9EEF5] p-2 rounded-full">
            <HiOutlineBell size={24} className="" />
          </button>
          <button className="hover:bg-[#E9EEF5] p-2 rounded-full">
            <PiSquaresFour size={24} />
          </button>
          <button
            onClick={handle.active ? handle.exit : handle.enter}
            className="hover:bg-[#E9EEF5] p-2 rounded-full"
          >
            {handle.active ? (
              <MdFullscreenExit size={24} />
            ) : (
              <MdFullscreen size={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
