import ButtonContainer from "@/components/ui/ButtonContainer";

const BorderedButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button className="bg-indigo-100 border border-indigo-300 text-indigo-600 font-medium py-2 px-4 rounded-md">Primary</button>
      <button className="bg-pink-100 border border-pink-300 text-pink-600 font-medium py-2 px-4 rounded-md">Secondary</button>
      <button className="bg-sky-100 border border-sky-300 text-sky-600 font-medium py-2 px-4 rounded-md">Info</button>
      <button className="bg-emerald-100 border border-emerald-300 text-emerald-600 font-medium py-2 px-4 rounded-md">Success</button>
      <button className="bg-amber-100 border border-amber-300 text-amber-500 font-medium py-2 px-4 rounded-md">Warning</button>
      <button className="bg-red-100 border border-red-300 text-red-500 font-medium py-2 px-4 rounded-md">Error</button>
    </div>
  `;

  return (
    <ButtonContainer
      title="Bordered Button"
      description="Buttons can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default BorderedButton;
