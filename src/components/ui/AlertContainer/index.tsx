import { useState } from "react";
import ToggleButton from "../ToggleButton";
import JsxParser from "react-jsx-parser";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

type TAlertContainer = {
  title: string;
  description: string;
  codeString: string;
};
const AlertContainer: React.FC<TAlertContainer> = ({
  title,
  description,
  codeString,
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copy, setCopy] = useState(false);

  return (
    <div className="bg-white py-2 px-6 rounded-md shadow-md ">
      <div className="flex flex-row justify-between items-center my-3 w-1/2  ">
        <h3 className="text-[#7A8493] text-xl font-semibold">{title}</h3>
        <div className="flex flex-row gap-3 items-center ">
          <div className="">
            <p className="text-[#90A1B9] text-lg font-medium">Code</p>
          </div>
          <ToggleButton showCode={showCode} setShowCode={setShowCode} />
        </div>
      </div>
      <div className="w-1/2">
        <p className="my-4  ">{description}</p>
      </div>
      <JsxParser jsx={codeString} className="mb-8 " />
      {showCode && (
        <div className="">
          <div className="text-xl font-semibold py-2 px-5 flex flex-row justify-between items-center bg-[#282A36] rounded-t-lg w-1/2">
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
            style={monokaiSublime}
            wrapLongLines={true}
            customStyle={{
              borderRadius: "0 0 8px 8px ",
              padding: "15px 8px",
              height: "400px",
              width: "50%",
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

export default AlertContainer;
