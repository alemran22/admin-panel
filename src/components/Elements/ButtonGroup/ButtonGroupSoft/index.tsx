import ButtonContainer from "@/components/ui/ButtonContainer";

const ButtonGroupSoft = () => {
  const codeString = `
    <div className="flex flex-col gap-6">
      <div className="flex -space-x-px">
        <button className="rounded-l-md bg-emerald-100 text-emerald-700 px-4 py-2 font-medium hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:bg-emerald-200">1</button>
        <button className="bg-emerald-100 text-emerald-700 px-4 py-2 font-medium hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:bg-emerald-200">2</button>
        <button className="bg-emerald-100 text-emerald-700 px-4 py-2 font-medium hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:bg-emerald-200">3</button>
        <button className="bg-emerald-100 text-emerald-700 px-4 py-2 font-medium hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:bg-emerald-200">4</button>
        <button className="rounded-r-md bg-emerald-100 text-emerald-700 px-4 py-2 font-medium hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:bg-emerald-200">5</button>
      </div>

      <div className="flex -space-x-px">
        <button className="rounded-l-full bg-orange-100 text-orange-600 px-4 py-2 font-medium hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 active:bg-orange-400">First</button>
        <button className=" bg-orange-100 text-orange-600 px-4 py-2 font-medium hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 active:bg-orange-400">Second</button>
        <button className="rounded-r-full bg-orange-100 text-orange-600 px-4 py-2 font-medium hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 active:bg-orange-400">Third</button>
      </div>
    </div>
  `;

  return (
    <ButtonContainer
      title="Soft Button Group"
      description="Buttons groups can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default ButtonGroupSoft;
