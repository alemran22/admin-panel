import ButtonContainer from "@/components/ui/ButtonContainer";

const ButtonGroupOutlined = () => {
  const codeString = `
    <div className="flex flex-col gap-6">
      <div className="flex -space-x-px">
        <button className="rounded-l-md border border-blue-500 text-blue-600 px-4 py-2 font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-500">1</button>
        <button className="border border-blue-500 text-blue-600 px-4 py-2 font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-500">2</button>
        <button className="border border-blue-500 text-blue-600 px-4 py-2 font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-500">3</button>
        <button className="border border-blue-500 text-blue-600 px-4 py-2 font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-500">4</button>
        <button className="rounded-r-md border border-blue-500 text-blue-600 px-4 py-2 font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-500">5</button>
      </div>

      <div className="flex -space-x-px">
        <button className="rounded-l-full border border-orange-500 text-orange-500 px-4 py-2 font-medium hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300">First</button>
        <button className="border border-orange-500 text-orange-500 px-4 py-2 font-medium hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300">Second</button>
        <button className="rounded-r-full border border-orange-500 text-orange-500 px-4 py-2 font-medium hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300">Third</button>
      </div>
    </div>
  `;

  return (
    <ButtonContainer
      title="Outlined"
      description="Buttons groups can be outlined. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default ButtonGroupOutlined;
