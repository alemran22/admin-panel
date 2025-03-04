import { avatarImagesData } from "@/assets/images/elements/avatar/rounded_avatar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import JsxParser from "react-jsx-parser";
import ToggleButton from "@/components/ui/ToggleButton";
import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const RoundedAvatar = () => {
  const [showCode, setShowCode] = useState(false);
  const [copy, setCopy] = useState(false);
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
    <div className="bg-white py-2 px-6 rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center my-3">
        <h3 className="text-[#7A8493] text-xl font-semibold">Rounded Avatar</h3>
        <div className="flex flex-row gap-3 items-center">
          <div className="">
            <p className="text-[#90A1B9] text-lg font-medium">Code</p>
          </div>
          <ToggleButton showCode={showCode} setShowCode={setShowCode} />
        </div>
      </div>
      <div className="w-1/2">
        <p className="">
          The Avatar component creates a scalable, colorable element that can
          have text, icon or image within its shape. Check out code for detail
          of usage.
        </p>
        {/* <div className="flex flex-row items-end gap-3">
          {avatarImagesData.map(({ id, image, size }) => (
            <div key={id} className="my-6">
              <img
                src={image}
                alt={`Avatar ${id}`}
                className={`rounded-full ${size}`}
              />
            </div>
          ))}
        </div> */}
      </div>
      <JsxParser jsx={codeString} className="mb-8" />
      {showCode && (
        <div className="">
          <div className="text-xl font-semibold py-2 px-5 flex flex-row justify-between items-center bg-[#282A36] rounded-t-lg">
            <h2 className="">Example</h2>
            {copy ? (
              <button
                onClick={() => {
                  setCopy(false);
                }}
              >
                <LuCopyCheck />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCopy(true);
                  navigator.clipboard.writeText(codeString);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
              >
                <LuCopy />
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            customStyle={{
              borderRadius: "0 0 8px 8px ",
              padding: "15px 8px",
              height: "400px",
              overflow: "auto",
              marginBottom: "20px",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default RoundedAvatar;
