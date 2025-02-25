import { roundedAvatarImages } from "@/assets/images/elements/avatar/rounded_avatar";
import React, { useState } from "react";

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

const RoundedAvatar: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="bg-white py-4 px-6 rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center my-3">
        <h3>Rounded Avatar</h3>
        <ToggleSwitch isChecked={isChecked} onToggle={handleToggle} />
      </div>
      <div className="w-1/2">
        <p className="">
          The Avatar component creates a scalable, colorable element that can
          have text, icon or image within its shape. Check out code for detail
          of usage.
        </p>
        <div className="flex flex-row items-center gap-3">
          {roundedAvatarImages.map((image) => (
            <div key={image.id} className="">
              <img src={image.image} alt="" className="rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoundedAvatar;
