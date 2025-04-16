import ButtonContainer from "@/components/ui/ButtonContainer";

const RoundedBadge = () => {
  const codeString = `
 <div className="flex flex-wrap space-x-2">
 <span className="bg-gray-500 text-gray-800 px-4 py-2 rounded-full font-medium">Default</span>
 <span className="bg-purple-500 text-white px-4 py-2 rounded-full font-medium">Primary</span>
 <span className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium">Secondary</span>
 <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium">Info</span>
 <span className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">Success</span>
 <span className="bg-yellow-500 text-white px-4 py-2 rounded-full font-medium">Warning</span>
 <span className="bg-red-500 text-white px-4 py-2 rounded-full font-medium">Error</span>
 <span className="bg-black text-white px-4 py-2 rounded-full font-medium">Dark</span>
 <span className="bg-white text-gray-800 px-4 py-2 rounded-full border-gray-300 border font-medium">Light</span>
 </div>
 `;

  return (
    <ButtonContainer
      title="RoundedBadge"
      description="Badges can have a rounded shape. To do this, you should use the rounded-full utility Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default RoundedBadge;
