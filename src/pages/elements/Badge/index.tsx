import BadgeNormal from "@/components/Elements/Badge/BadgeNormal";
import BadgeWithDots from "@/components/Elements/Badge/BadgeWithDots";
import BadgeWithIcons from "@/components/Elements/Badge/BAdgeWithIcon";
import GlowBadge from "@/components/Elements/Badge/GlowBadge";
import OutlinedBadge from "@/components/Elements/Badge/OutlinedBadge";
import RoundedBadge from "@/components/Elements/Badge/RoundedBadge";
import SoftColorButton from "@/components/Elements/Buttons/SoftButton";

const Badge = () => {
  return (
    <div>
      <BadgeNormal />
      <RoundedBadge />
      <GlowBadge />
      <SoftColorButton />
      <OutlinedBadge />
      <BadgeWithDots />
      <BadgeWithIcons />
    </div>
  );
};

export default Badge;
