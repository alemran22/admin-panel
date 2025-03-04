const ToggleButton = ({
  showCode,
  setShowCode,
}: {
  showCode: boolean;
  setShowCode: (value: boolean) => void;
}) => {
  return showCode ? (
    <button
      onClick={() => {
        setShowCode(!showCode);
      }}
      className="relative bg-[#4F46E5] h-5 w-10 rounded-full"
    >
      <div className="absolute bg-white w-4 h-4 rounded-full top-0.5 right-0.5"></div>
    </button>
  ) : (
    <button
      onClick={() => {
        setShowCode(!showCode);
      }}
      className="relative bg-[#CAD5E2] h-5 w-10 rounded-full"
    >
      <div className="absolute bg-white w-4 h-4 rounded-full top-0.5 left-0.5"></div>
    </button>
  );
};

export default ToggleButton;
