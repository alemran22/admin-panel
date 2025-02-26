import RoundedAvatar from "./RoundedAvatar";
import SquareAvatar from "./SquareAvatar";
import SquircleAvatar from "./SquircleAvatar";

const Avatar = () => {
  return (
    <div className="flex flex-col gap-8">
      <RoundedAvatar />
      <SquareAvatar />
      <SquircleAvatar />
    </div>
  );
};

export default Avatar;
