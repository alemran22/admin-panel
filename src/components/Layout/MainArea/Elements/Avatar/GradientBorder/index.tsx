import AvatarContainer from "@/components/ui/AvatarContainer";

const GradientBorder = () => {
  const codeString = `
  <div className="flex flex-row items-end gap-3 mt-5">
    <div className="bg-gradient-to-r from-sky-400 to-blue-600 rounded-full p-[3px]">
      <img
        className="w-20 h-20 rounded-full border-2 border-white"
        src="https://lineone.piniastudio.com/images/avatar/avatar-5.jpg"
        alt=""
      />
    </div>
    <div className="bg-gradient-to-r from-[#FFB800] to-[#F54B00] rounded-full p-[3px]">
      <img
         className="w-20 h-20 rounded-full border-2 border-white"
        src="https://lineone.piniastudio.com/images/avatar/avatar-8.jpg"
        alt=""
      />
    </div>
    <div className="bg-gradient-to-r from-[#F73399] to-[#FF2058] rounded-full p-[3px] relative">
      <img
        className="w-20 h-20 rounded-full border-2 border-white"
        src="https://lineone.piniastudio.com/images/avatar/avatar-19.jpg"
        alt=""
      />
      <div className="absolute right-1 top-1 bg-orange-600 size-4 rounded-full border border-white"></div>
    </div>
    <div className="bg-gradient-to-r from-[#AE49FF] to-[#F44A00] rounded-full p-[3px]">
      <img
        className="w-20 h-20 rounded-full border-2 border-white"
        src="https://lineone.piniastudio.com/images/avatar/avatar-20.jpg"
        alt=""
      />
    </div>
    <div className="bg-gradient-to-r from-[#25DE77] to-[#EC6DFF] rounded-full p-[3px]">
      <img
        className="w-20 h-20 rounded-full border-2 border-white"
        src="https://lineone.piniastudio.com/images/avatar/avatar-10.jpg"
        alt=""
      />
    </div>
    <div className="bg-gradient-to-r from-orange-400 to-amber-700 rounded-full p-[3px]">
      <img
         className="w-20 h-20 rounded-full border-2 border-white"
        src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
        alt=""
      />
    </div>
  </div>`;
  return (
    <div>
      <AvatarContainer
        title={"Gradient Border"}
        description={
          "Border avatars can be gradient colors. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default GradientBorder;
