import AvatarContainer from "@/components/ui/AvatarContainer";

const RoundedAvatar = () => {
  const codeString = `
  <div className="flex flex-row items-end gap-3">
    <div className="">
      <img
        className="w-10 h-10 rounded-full"
        src="https:lineone.piniastudio.com/images/avatar/avatar-5.jpg"
        alt=""
      />
    </div>
    <div className="">
      <img
        className="w-14 h-14 rounded-full"
        src="https://lineone.piniastudio.com/images/avatar/avatar-8.jpg"
        alt=""
      />
    </div>
    <div className="">
      <img
        className="w-16 h-16 rounded-full"
        src="https://lineone.piniastudio.com/images/avatar/avatar-19.jpg"
        alt=""
      />
    </div>
    <div className="">
      <img
        className="w-20 h-20 rounded-full"
        src="https://lineone.piniastudio.com/images/avatar/avatar-20.jpg"
        alt=""
      />
    </div>
    <div className="">
      <img
        className="w-24 h-24 rounded-full"
        src="https://lineone.piniastudio.com/images/avatar/avatar-10.jpg"
        alt=""
      />
    </div>
    <div className="">
      <img
        className="w-32 h-32 rounded-full"
        src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
        alt=""
      />
    </div>
  </div>`;
  return (
    <AvatarContainer
      title="Circle Avatar"
      description="The Avatar component creates a scalable, colorable element that can have text, icon or image within its shape. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default RoundedAvatar;
