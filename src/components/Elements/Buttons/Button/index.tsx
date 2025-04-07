import ButtonContainer from "@/components/ui/ButtonContainer";

const Button = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded">Default</button>
      <button className="bg-indigo-600 text-white font-medium py-2 px-4 rounded">Primary</button>
      <button className="bg-pink-500 text-white font-medium py-2 px-4 rounded">Secondary</button>
      <button className="bg-sky-500 text-white font-medium py-2 px-4 rounded">Info</button>
      <button className="bg-emerald-500 text-white font-medium py-2 px-4 rounded">Success</button>
      <button className="bg-amber-400 text-white font-medium py-2 px-4 rounded">Warning</button>
      <button className="bg-red-500 text-white font-medium py-2 px-4 rounded">Error</button>
    </div>
  `;

  return (
    <ButtonContainer
      title="Button"
      description="Use Button component for actions in forms, dialogs, and more with support for multiple sizes, states, and more. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default Button;
