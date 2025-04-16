import ButtonContainer from "@/components/ui/ButtonContainer";

const GradientButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button class="py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-red-500">
        Gradient
      </button>
      <button class="py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500">
        Gradient
      </button>
      <button class="py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-500">
        Gradient
      </button>
      <button class="py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-yellow-400 to-orange-500">
        Gradient
      </button>
      <button class="py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-400 to-pink-300">
        Gradient
      </button>
      <button class="py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-green-400 to-blue-500">
        Gradient
      </button>
    </div>`;

  return (
    <ButtonContainer
      title="Gradient Buttons"
      description="Buttons can be gradient. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default GradientButton;
