import ButtonContainer from "@/components/ui/ButtonContainer";

const GradientOutlineButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button className="bg-gradient-to-r from-amber-400 to-orange-600 p-0.5 font-medium rounded-lg">
        <span className="block bg-white dark:bg-navy-700 px-4 py-2 rounded-md">
          Outline
        </span>
      </button>
      <button className="bg-gradient-to-r from-sky-400 to-blue-600 p-0.5 font-medium rounded-lg">
        <span className="block bg-white dark:bg-navy-700 px-4 py-2 rounded-md">
          Outline
        </span>
      </button>
      <button className="bg-gradient-to-l from-pink-300 to-indigo-400 p-0.5 font-medium rounded-lg">
        <span className="block bg-white dark:bg-navy-700 px-4 py-2 rounded-md">
          Outline
        </span>
      </button>
      <button className="bg-gradient-to-r from-green-400 to-fuchsia-400 p-0.5 font-medium rounded-lg">
        <span className="block bg-white dark:bg-navy-700 px-4 py-2 rounded-md">
          Outline
        </span>
      </button>
      <button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-0.5 font-medium rounded-lg">
        <span className="block bg-white dark:bg-navy-700 px-4 py-2 rounded-md">
          Outline
        </span>
      </button>
    </div>`;

  return (
    <ButtonContainer
      title="Outlined Gradient Buttons"
      description="Buttons with gradient borders using nested spans. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default GradientOutlineButton;
