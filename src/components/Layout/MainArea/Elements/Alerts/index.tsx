import BasicAlert from "./BasicAlert";
import BorderedAlert from "./BorderedAlert";
import DismissableAlert from "./DismissableAlert";
import OutlinedAlert from "./OutlinedAlert";
import SoftAlert from "./SoftAlert";

const Alerts = () => {
  return (
    <div className="grid">
      <BasicAlert />
      <OutlinedAlert />
      <SoftAlert />
      <BorderedAlert />
      <DismissableAlert />
    </div>
  );
};

export default Alerts;
