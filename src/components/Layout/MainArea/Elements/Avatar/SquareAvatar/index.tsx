import { avatarImagesData } from "@/assets/images/elements/avatar/rounded_avatar";
import ToggleButton from "@/components/ui/ToggleButton";
import { useState } from "react";

const SquareAvatar = () => {
  const [showCode, setShowCode] = useState(true);
  return (
    <div className="bg-white py-2 px-6 rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center my-3">
        <h3 className="text-[#7A8493] text-xl font-semibold">Square Avatar</h3>
        <div className="flex flex-row gap-3 items-center">
          <div className="">
            <p className="text-[#90A1B9] text-lg font-medium">Code</p>
          </div>
          <ToggleButton showCode={showCode} setShowCode={setShowCode} />
        </div>
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
