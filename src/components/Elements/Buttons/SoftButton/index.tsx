import ButtonContainer from "@/components/ui/ButtonContainer";

const SoftColorButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button className="bg-indigo-100 text-indigo-600 font-medium py-2 px-4 rounded-md">Primary</button>
      <button className="bg-pink-100 text-pink-600 font-medium py-2 px-4 rounded-md">Secondary</button>
      <button className="bg-sky-100 text-sky-600 font-medium py-2 px-4 rounded-md">Info</button>
      <button className="bg-emerald-100 text-emerald-600 font-medium py-2 px-4 rounded-md">Success</button>
      <button className="bg-amber-100 text-amber-500 font-medium py-2 px-4 rounded-md">Warning</button>
      <button className="bg-red-100 text-red-500 font-medium py-2 px-4 rounded-md">Error</button>
    </div>
  `;

  return (
    <ButtonContainer
      title="Soft Color Button"
      description="Buttons can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default SoftColorButton;
