import ButtonContainer from "@/components/ui/ButtonContainer";

const OutlinedButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button className="border border-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md">Default</button>
      <button className="border border-indigo-600 text-indigo-600 font-medium py-2 px-4 rounded-md">Primary</button>
      <button className="border border-pink-500 text-pink-500 font-medium py-2 px-4 rounded-md">Secondary</button>
      <button className="border border-sky-500 text-sky-500 font-medium py-2 px-4 rounded-md">Info</button>
      <button className="border border-emerald-500 text-emerald-500 font-medium py-2 px-4 rounded-md">Success</button>
      <button className="border border-amber-400 text-amber-400 font-medium py-2 px-4 rounded-md">Warning</button>
      <button className="border border-red-500 text-red-500 font-medium py-2 px-4 rounded-md">Error</button>
    </div>
  `;

  return (
    <ButtonContainer
      title="Outlined Button"
      description="Buttons can be outlined. Use border utility classes to create outlined buttons. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default OutlinedButton;
