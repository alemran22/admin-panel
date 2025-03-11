import BasicAlert from "./BasicAlert";
import BorderedAlert from "./BorderedAlert";
import DismissableAlert from "./DismissableAlert";
import OutlinedAlert from "./OutlinedAlert";
import SoftAlert from "./SoftAlert";

const Alerts = () => {
  return (
    <div className="grid grid-cols-12 gap-5 w-full">
      <div className="col-span-6">
        <BasicAlert />
      </div>
      <div className="col-span-6">
        <OutlinedAlert />
      </div>
      <div className="col-span-6">
        <SoftAlert />
      </div>
      <div className="col-span-6">
        <BorderedAlert />
      </div>
      <div className="col-span-6">
        <DismissableAlert />
      </div>
    </div>
  );
};

export default Alerts;
