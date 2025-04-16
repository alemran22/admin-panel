import ButtonContainer from "@/components/ui/ButtonContainer";

const ButtonGroupNormal = () => {
  const codeString = `
    <div className="flex flex-col gap-6">
      <div className="flex -space-x-px">
        <button className="rounded-l-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">1</button>
        <button className="bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">2</button>
        <button className="bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">3</button>
        <button className="bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">4</button>
        <button className="rounded-r-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">5</button>
      </div>

      <div className="flex -space-x-px">
        <button className="rounded-l-full bg-pink-500 text-white px-4 py-2 font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">First</button>
        <button className="bg-pink-500 text-white px-4 py-2 font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">Second</button>
        <button className="rounded-r-full bg-pink-500 text-white px-4 py-2 font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">Third</button>
      </div>
    </div>
  `;

  return (
    <ButtonContainer
      title="Button Group"
      description="Button groups are an easy way to group a series of buttons together. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default ButtonGroupNormal;
