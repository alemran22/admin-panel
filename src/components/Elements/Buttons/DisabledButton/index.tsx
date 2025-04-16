import ButtonContainer from "@/components/ui/ButtonContainer";

const DisabledButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
        <button disabled className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg disabled:pointer-events-none disabled:select-none disabled:opacity-60">Default</button>
        <button disabled className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg disabled:pointer-events-none disabled:select-none disabled:opacity-60">Primary</button>
        <button disabled className="bg-pink-500 text-white font-medium py-2 px-4 rounded-lg disabled:pointer-events-none disabled:select-none disabled:opacity-60">Secondary</button>
        <button disabled className="bg-sky-500 text-white font-medium py-2 px-4 rounded-lg disabled:pointer-events-none disabled:select-none disabled:opacity-60">Info</button>
        <button disabled className="bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg disabled:pointer-events-none disabled:select-none disabled:opacity-60">Success</button>
        <button disabled className="bg-amber-400 text-white font-medium py-2 px-4 rounded-lg disabled:pointer-events-none disabled:select-none disabled:opacity-60">Warning</button>
        <button disabled className="bg-red-500 text-white font-medium py-2 px-4 rounded-lg disabled:pointer-events-none disabled:select-none disabled:opacity-60">Error</button>
    </div>
  `;

  return (
    <ButtonContainer
      title="Disabled Button"
      description="Buttons have their own style when disabled. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default DisabledButton;
