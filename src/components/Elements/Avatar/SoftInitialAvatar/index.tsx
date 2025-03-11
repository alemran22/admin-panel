import AvatarContainer from "@/components/ui/AvatarContainer";

const SoftInitialAvatar = () => {
  const codeString = `
    <div className="mt-5 flex flex-row items-end gap-3">
      <div className="w-12 h-12 bg-[#EDEDFC] rounded-full flex flex-row items-center justify-center text-base text-[#4F46E5] font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#FDE5F8] rounded-full flex flex-row items-center justify-center text-base text-[#F000B9] font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#E7F6FD] rounded-full flex flex-row items-center justify-center text-base text-[#0EA5E9] font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#E7F8F2] rounded-full flex flex-row items-center justify-center text-base text-[#10B981] font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#FFF5E5] rounded-full flex flex-row items-center justify-center text-base text-[#FF9800] font-medium">
        JD
      </div>

      <div className="w-12 h-12 bg-[#FFEEE9] rounded-full flex flex-row items-center justify-center text-base text-[#FF5724] font-medium">
        JD
      </div>
    </div>`;
  return (
    <div>
      <AvatarContainer
        title={"Soft Initial Avatar"}
        description={
          "Initial avatars can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default SoftInitialAvatar;
