import Buttons from "@/components/Elements/Buttons";
import BorderedButton from "@/components/Elements/Buttons/BorderedButton";
import ButtonSize from "@/components/Elements/Buttons/ButtonSize";
import DisabledButton from "@/components/Elements/Buttons/DisabledButton";
import FlatButton from "@/components/Elements/Buttons/FlatButton";
import GlowButton from "@/components/Elements/Buttons/GlowButton";
import GradientButton from "@/components/Elements/Buttons/GradientButton";
import OutlinedButton from "@/components/Elements/Buttons/OutlinedButton";
import GradientOutlineButton from "@/components/Elements/Buttons/OutlinedGradientButtons";
import RoundedButton from "@/components/Elements/Buttons/RoundedButton";
import SoftColorButton from "@/components/Elements/Buttons/SoftButton";
import WithIcons from "@/components/Elements/Buttons/WithIcons";

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
      <GradientButton />
      <GradientOutlineButton />
      <WithIcons />
      <ButtonSize />
      <DisabledButton />
    </div>
  );
};

export default ButtonPage;
