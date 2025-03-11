import AvatarContainer from "@/components/ui/AvatarContainer";

const SquareInitialAvatar = () => {
  const codeString = `
    <div className="mt-5 flex flex-row items-end gap-3">
      <div className="w-12 h-12 bg-slate-200 rounded-lg flex flex-row items-center justify-center text-base text-gray-600 font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#4F46E5] rounded-lg flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#F000B9] rounded-lg flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#0EA5E9] rounded-lg flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#10B981] rounded-lg flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#FF9800] rounded-lg flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>
    </div>`;
  return (
    <div>
      <AvatarContainer
        title={"Square Initial Avatar"}
        description={
          "Initial avatars can have a square shape. To do this, you should use the rounded-lg utility. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default SquareInitialAvatar;
