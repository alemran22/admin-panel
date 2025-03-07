import AvatarContainer from "@/components/ui/AvatarContainer";

const BorderedInitialAvatar = () => {
  const codeString = `
<div className="mt-5 flex flex-row items-end gap-3">
  <div className="w-12 h-12 bg-[#EDEDFC] rounded-full flex flex-row items-center justify-center text-base border border-[#4F46E5]/30 text-[#4F46E5] font-medium">
   JD
  </div>
  <div className="w-12 h-12 bg-[#FDE5F8] rounded-full flex flex-row items-center justify-center text-base border border-[#F000B9]/30 text-[#F000B9] font-medium">
   JD
  </div>
  <div className="w-12 h-12 bg-[#E7F6FD] rounded-full flex flex-row items-center justify-center text-base border border-[#0EA5E9]/30 text-[#0EA5E9] font-medium">
    JD
  </div>
  <div className="w-12 h-12 bg-[#E7F8F2] rounded-full flex flex-row items-center justify-center text-base border border-[#10B981]/30 text-[#10B981] font-medium">
    JD
   </div>
  <div className="w-12 h-12 bg-[#FFF5E5] rounded-full flex flex-row items-center justify-center text-base border border-[#FF9800]/30 text-[#FF9800] font-medium">
    JD
  </div>
  <div className="w-12 h-12 bg-[#FFEEE9] rounded-full flex flex-row items-center justify-center text-base border border-[#FF5724]/30 text-[#FF5724] font-medium">
   JD
  </div>
</div>`;
  return (
    <div>
      <AvatarContainer
        title={"Borderes Initial Avatar"}
        description={
          "Initial avatars can have a border. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default BorderedInitialAvatar;
