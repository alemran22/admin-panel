import ButtonContainer from "@/components/ui/ButtonContainer";

const OutlinedBadge = () => {
  const codeString = `
 <div className="flex flex-wrap space-x-2">
 <span className="border border-gray-700 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium">Default</span>
 <span className="border border-purple-700 bg-purple-200 text-purple-700 px-4 py-2 rounded-full font-medium">Primary</span>
 <span className="border border-pink-700 bg-pink-200 text-pink-700 px-4 py-2 rounded-full font-medium">Secondary</span>
 <span className="border border-blue-700 bg-blue-200 text-blue-700 px-4 py-2 rounded-full font-medium">Info</span>
 <span className="border border-green-700 bg-green-200 text-green-700 px-4 py-2 rounded-full font-medium">Success</span>
 <span className="border border-yellow-700 bg-yellow-200 text-yellow-700 px-4 py-2 rounded-full font-medium">Warning</span>
 <span className="border border-red-700 bg-red-200 text-red-700 px-4 py-2 rounded-full font-medium">Error</span>
 <span className="border border-black bg-black/20 text-black/80 px-4 py-2 rounded-full font-medium">Dark</span>
 <span className="border bg-white text-gray-800 px-4 py-2 rounded-full border-gray-300 font-medium">Light</span>
 </div>
 `;

  return (
    <ButtonContainer
      title="Outlined Badge"
      description="Badges can be outlined. Check out code for detail of usage.

"
      codeString={codeString}
    />
  );
};

export default OutlinedBadge;
