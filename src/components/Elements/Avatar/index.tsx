import { Alert } from "@/pages/elements";
import AvatarWithDots from "./AvatarWithDots";
import BorderedInitialAvatar from "./BorderedInitialAvatar";
import GradientBorder from "./GradientBorder";
import InitialAvatar from "./InitialAvatar";
import InitialWithDots from "./InitialWithDots";
import RoundedAvatar from "./RoundedAvatar";
import SoftInitialAvatar from "./SoftInitialAvatar";
import SquircleAvatarDots from "./SqircleAvatarDots";
import SquareAvatar from "./SquareAvatar";
import SquareInitialAvatar from "./SquareInitialAvatar";
import SquareSoftInitialAvatar from "./SquareSoftInitialAvatar";
import SquircleAvatar from "./SquircleAvatar";
import SquircleInitialAvatar from "./SquircleInitialAvatar";
import Alerts from "../Alerts";

const Avatars = () => {
  return (
    <div className="flex flex-col gap-8">
      <RoundedAvatar />
      <SquareAvatar />
      <SquircleAvatar />
      <InitialAvatar />
      <SquareInitialAvatar />
      <SquircleInitialAvatar />
      <SoftInitialAvatar />
      <BorderedInitialAvatar />
      <SquareSoftInitialAvatar />
      <AvatarWithDots />
      <SquircleAvatarDots />
      <InitialWithDots />
      <GradientBorder />
      <Alerts />
    </div>
  );
};

export default Avatars;
