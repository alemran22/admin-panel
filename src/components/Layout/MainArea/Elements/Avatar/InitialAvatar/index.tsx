import AvatarContainer from "@/components/ui/AvatarContainer";

const InitialAvatar = () => {
  const codeString = `
    <div className="mt-5 flex flex-row items-end gap-3">
      <div className="w-12 h-12 bg-slate-200 rounded-full flex flex-row items-center justify-center text-base text-gray-600 font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#4F46E5] rounded-full flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#F000B9] rounded-full flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#0EA5E9] rounded-full flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#10B981] rounded-full flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#FF9800] rounded-full flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>
    </div>`;
  return (
    <div>
      <AvatarContainer
        title={"Initial Avatar"}
        description={
          "In the absence of a image, you can use the initial. Initials can be used in various variants. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default InitialAvatar;
