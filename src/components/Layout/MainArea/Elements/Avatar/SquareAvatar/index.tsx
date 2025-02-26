import { avatarImagesData } from "@/assets/images/elements/avatar/rounded_avatar";
import ToggleSwitch from "@/components/Common/ToggleSwitch";
import { useState } from "react";

const SquareAvatar: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="bg-white py-2 px-6 rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center my-3">
        <h3 className="text-[#7A8493] text-xl font-semibold">Square Avatar</h3>
        <ToggleSwitch isChecked={isChecked} onToggle={handleToggle} />
      </div>
      <div className="w-1/2">
        <p className="">
          Avatars can have a square shape. To do this, you should use the
          rounded-lg utility. Check out code for detail of usage.
        </p>
        <div className="flex flex-row items-end gap-3">
          {avatarImagesData.map(({ id, image, size }) => (
            <div key={id} className="my-6">
              <img
                src={image}
                alt={`Avatar ${id}`}
                className={`rounded-lg ${size}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SquareAvatar;
