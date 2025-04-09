import Buttons from "@/components/Elements/Buttons";
import BorderedButton from "@/components/Elements/Buttons/BorderedButton";
import FlatButton from "@/components/Elements/Buttons/FlatButton";
import GlowButton from "@/components/Elements/Buttons/GlowButton/indx";
import OutlinedButton from "@/components/Elements/Buttons/OutlinedButton";
import RoundedButton from "@/components/Elements/Buttons/RoundedButton";
import SoftColorButton from "@/components/Elements/Buttons/SoftButton";

const ButtonPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Buttons />
      <RoundedButton />
      <OutlinedButton />
      <SoftColorButton />
      <BorderedButton />
      <FlatButton />
      <GlowButton />
    </div>
  );
};

export default ButtonPage;
