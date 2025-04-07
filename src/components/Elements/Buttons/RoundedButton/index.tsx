import ButtonContainer from "@/components/ui/ButtonContainer";

const RoundedButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full">Default</button>
      <button className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-full">Primary</button>
      <button className="bg-pink-500 text-white font-medium py-2 px-4 rounded-full">Secondary</button>
      <button className="bg-sky-500 text-white font-medium py-2 px-4 rounded-full">Info</button>
      <button className="bg-emerald-500 text-white font-medium py-2 px-4 rounded-full">Success</button>
      <button className="bg-amber-400 text-white font-medium py-2 px-4 rounded-full">Warning</button>
      <button className="bg-red-500 text-white font-medium py-2 px-4 rounded-full">Error</button>
    </div>
  `;

  return (
    <ButtonContainer
      title="Rounded Button"
      description="Buttons can have a rounded shape. To do this, you should use the rounded-full utility. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default RoundedButton;
