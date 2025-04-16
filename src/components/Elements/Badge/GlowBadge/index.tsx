import ButtonContainer from "@/components/ui/ButtonContainer";

const GlowBadge = () => {
  const codeString = `
    <div className="flex flex-wrap space-x-2">
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-gray-400 bg-gray-500 text-gray-800 px-4 py-2 rounded font-medium">
        Default
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-purple-400 bg-purple-500 text-white px-4 py-2 rounded font-medium">
        Primary
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-pink-400 bg-pink-500 text-white px-4 py-2 rounded font-medium">
        Secondary
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-blue-400 bg-blue-500 text-white px-4 py-2 rounded font-medium">
        Info
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-green-400 bg-green-500 text-white px-4 py-2 rounded font-medium">
        Success
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-yellow-400 bg-yellow-500 text-white px-4 py-2 rounded font-medium">
        Warning
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-red-400  bg-red-500 text-white px-4 py-2 rounded font-medium">
        Error
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-black bg-black text-white px-4 py-2 rounded font-medium">
        Dark
      </span>
      <span className="shadow-lg hover:shadow-xl active:shadow-md transition duration-300 ease-in-out shadow-white bg-white text-gray-800 px-4 py-2 rounded border-gray-300 border font-medium">
        Light
      </span>
    </div>
  `;
  return (
    <ButtonContainer
      title="Glow Badge"
      description="Badges can be glow. To do this, you should use colored shadows. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default GlowBadge;
