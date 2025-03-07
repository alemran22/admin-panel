import AvatarContainer from "@/components/ui/AvatarContainer";

const SquircleAvatarDots = () => {
  const codeString = `
    <div className="flex flex-row items-end gap-3">
      <div className="relative">
        <img
          className="w-10 h-10 mask mask-squircle"
          src="https://lineone.piniastudio.com/images/avatar/avatar-5.jpg"
          alt=""
        /> 
        <div className="absolute right-0 top-0.5 size-2 bg-blue-600 rounded-full border border-white"></div>
      </div>
      <div className="relative">
        <img
          className="w-14 h-14 mask mask-squircle"
          src="https://lineone.piniastudio.com/images/avatar/avatar-8.jpg"
          alt=""
        />
         <div className="absolute right-0 top-0.5 size-2.5 bg-blue-600 rounded-full border border-white"></div>
      </div>
      <div className="relative">
        <img
          className="w-16 h-16 mask mask-squircle"
          src="https://lineone.piniastudio.com/images/avatar/avatar-19.jpg"
          alt=""
        />
         <div className="absolute right-0.5 top-0.5 size-3 bg-blue-600 rounded-full border border-white"></div>
      </div>
      <div className="relative">
        <img
          className="w-20 h-20 mask mask-squircle"
          src="https://lineone.piniastudio.com/images/avatar/avatar-20.jpg"
          alt=""
        />
        <div className="absolute right-1 top-1 size-3.5 bg-blue-600 rounded-full border border-white"></div>
      </div>
       
      <div className="relative">
        <img
          className="w-24 h-24 mask mask-squircle"
          src="https://lineone.piniastudio.com/images/avatar/avatar-10.jpg"
          alt=""
        />
         <div className="absolute right-1 top-1 size-4 bg-blue-600 rounded-full border border-white"></div>
      </div>
      <div className="relative">
        <img
          className="w-32 h-32 mask mask-squircle"
          src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
          alt=""
        />
         <div className="absolute right-2 top-1.5 size-4 bg-blue-600 rounded-full border border-white"></div>
      </div>
    </div>`;
  return (
    <div>
      <AvatarContainer
        title={"Squircle Avatar Dots"}
        description={
          "Avatars can be a dot attached to it. It can be used to indicate the user status. Check out code for detail of usage."
        }
        codeString={codeString}
      />
    </div>
  );
};

export default SquircleAvatarDots;
