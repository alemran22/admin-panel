import AvatarContainer from "@/components/ui/AvatarContainer";

const InitialWithDots = () => {
  const codeString = `
<div className="flex flex-row items-end gap-3">
  <div className="relative">
    <div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex justify-center items-center text-[#6B788C] font-semibold text-sm">JD</div>
    <div className="absolute right-0 top-0.5 size-2 bg-blue-600 rounded-full border border-white"></div>
  </div>
  <div className="relative">
    <div className="w-14 h-14 rounded-full bg-gray-300 flex justify-center items-center text-[#6B788C] text-base font-semibold">JD</div>
    <div className="absolute right-0.5 top-0.5 size-2.5 bg-blue-600 rounded-full border border-white"></div>
  </div>
  <div className="relative">
    <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center text-[#6B788C] text-lg font-semibold">JD</div>
    <div className="absolute right-0.5 top-0.5 size-3 bg-blue-600 rounded-full border border-white"></div>
  </div>
  <div className="relative"> 
    <div className="w-20 h-20 rounded-full bg-gray-300 flex justify-center items-center text-[#6B788C] text-xl font-semibold">JD</div>
    <div className="absolute right-1 top-1 size-3.5 bg-blue-600 rounded-full border border-white"></div>
  </div>
  <div className="relative">
    <div className="w-24 h-24 rounded-full bg-gray-300 flex justify-center items-center text-[#6B788C] text-2xl font-semibold">JD</div>
    <div className="absolute right-1 top-1 size-4 bg-blue-600 rounded-full border border-white"></div>
  </div>
  <div className="relative">
    <div className="w-28 h-28 rounded-full bg-gray-300 flex justify-center items-center text-[#6B788C] text-2xl font-semibold">JD</div>
    <div className="absolute right-2.5 top-2.5 size-4 bg-blue-600 rounded-full border border-white"></div>
  </div>
</div>`;
  return (
    <div>
      <AvatarContainer
        title={"Initial With Dots"}
        description={
          "Initial avatars can be a dot attached to it, too. It can be used to indicate the user status. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default InitialWithDots;
