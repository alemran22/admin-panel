const ToggleSwitch: React.FC<{ isChecked: boolean; onToggle: () => void }> = ({
  isChecked,
  onToggle,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600">Code</span>
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isChecked}
          onChange={onToggle}
        />
        <div
          className={`block w-10 h-5 ${
            isChecked ? "bg-blue-500" : "bg-gray-300"
          } rounded-full transition`}
        ></div>
        <div
          className={`absolute top-1 left-1 w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${
            isChecked ? "translate-x-5" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};
export default ToggleSwitch;
