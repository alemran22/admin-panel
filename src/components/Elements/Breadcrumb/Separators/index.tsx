import ButtonContainer from "@/components/ui/ButtonContainer";

const Separators = () => {
  const codeString = `
<ul className="flex space-x-1 items-center mb-2">
  <li><a href="#" className="text-[#4F46E5]">Home</a></li>
  <li><span className="text-gray-500">⇒</span></li>
  <li><a href="#" className="text-[#4F46E5]">Elements</a></li>
  <li><span className="text-gray-500">⇒</span></li>
  <li><span className="text-gray-500">Breadcrumb</span></li>
</ul>
<ul className="flex space-x-1 items-center mb-2">
  <li><a href="#" className="text-[#4F46E5]">Home</a></li>
  <li><span className="text-gray-500">·</span></li>
  <li><a href="#" className="text-[#4F46E5]">Elements</a></li>
  <li><span className="text-gray-500">·</span></li>
  <li><span className="text-gray-500">Breadcrumb</span></li>
</ul>
<ul className="flex space-x-1 items-center mb-2">
  <li><a href="#" className="text-[#4F46E5]">Home</a></li>
  <li><span className="text-gray-500">|</span></li>
  <li><a href="#" className="text-[#4F46E5]">Elements</a></li>
  <li><span className="text-gray-500">|</span></li>
  <li><span className="text-gray-500">Breadcrumb</span></li>
</ul>
<ul className="flex space-x-1 items-center">
  <li><a href="#" className="text-[#4F46E5]">Home</a></li>
  <li><span className="text-gray-500">/</span></li>
  <li><a href="#" className="text-[#4F46E5]">Elements</a></li>
  <li><span className="text-gray-500">/</span></li>
  <li><span className="text-gray-500">Breadcrumb</span></li>
</ul>
`;

  return (
    <div>
      <ButtonContainer
        title="Separators"
        description="Separators can be svg or any unicode chars. Check out code for detail of usage."
        codeString={codeString}
      />
    </div>
  );
};

export default Separators;
