import ButtonGroupNormal from "@/components/Elements/ButtonGroup/ButtonGroupNormal";
import ButtonGroupOutlined from "@/components/Elements/ButtonGroup/ButtonGroupOutlined";
import ButtonGroupSoft from "@/components/Elements/ButtonGroup/ButtonGroupSoft";

const ButtonGroup = () => {
  return (
    <div className="flex flex-col gap-8">
      <ButtonGroupNormal />
      <ButtonGroupOutlined />
      <ButtonGroupSoft />
    </div>
  );
};

export default ButtonGroup;
