import AvatarContainer from "@/components/ui/AvatarContainer";

const SquircleInitialAvatar = () => {
  const codeString = ` 
    <div className="mt-5 flex flex-row items-end gap-3">
      <div className="w-12 h-12 bg-slate-200 mask mask-squircle flex flex-row items-center justify-center text-base text-gray-600 font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#4F46E5] mask mask-squircle flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#F000B9] mask mask-squircle flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#0EA5E9] mask mask-squircle flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#10B981] mask mask-squircle flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#FF9800] mask mask-squircle flex flex-row items-center justify-center text-base text-white font-medium">
        JD
      </div>
    </div>`;
  return (
    <div>
      <AvatarContainer
        title={"Squircle Initial Avatar"}
        description={
          "Initial avatars can have a squircle shape. To do this, you should use the mask is-squircle utility. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default SquircleInitialAvatar;
