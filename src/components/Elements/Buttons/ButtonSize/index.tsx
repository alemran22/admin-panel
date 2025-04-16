import ButtonContainer from "@/components/ui/ButtonContainer";

const ButtonSize = () => {
  const codeString = `
    <div className="flex flex-wrap items-end gap-3">
      <button className="bg-indigo-600 text-white text-xs font-medium hover:bg-[#4338CA] focus:bg-primary-focus active:bg-[#4338E7] px-4 py-2 rounded-lg">Button</button>
      <button className="bg-indigo-600 text-white text-sm font-medium hover:bg-[#4338CA] focus:bg-primary-focus active:bg-[#4338E7] px-4 py-2 rounded-lg">Button</button>
      <button className="bg-indigo-600 text-white text-base font-medium hover:bg-[#4338CA] focus:bg-primary-focus active:bg-[#4338E7] px-4 py-2 rounded-lg">Button</button>
      <button className="bg-indigo-600 text-white text-lg font-medium hover:bg-[#4338CA] focus:bg-primary-focus active:bg-[#4338E7] px-4 py-2 rounded-lg">Button</button>
      <button className="bg-indigo-600 text-white text-xl font-medium hover:bg-[#4338CA] focus:bg-primary-focus active:bg-[#4338E7] px-4 py-2 rounded-lg">Button</button>
      <button className="bg-indigo-600 text-white text-2xl font-medium hover:bg-[#4338CA] focus:bg-primary-focus active:bg-[#4338E7] px-4 py-2 rounded-lg">Button</button>
    </div>
  `;

  return (
    <ButtonContainer
      title="Button Size"
      description="Button components can have various sizes. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default ButtonSize;
