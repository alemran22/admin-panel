import AlertContainer from "@/components/ui/AlertContainer";

const SoftAlert = () => {
  const codeString = `
    <div className="w-full flex flex-col gap-3">
      <div className="rounded-full bg-primary/10 px-4 py-4 text-primary">
        This is simple Alert
      </div>
      <div className="rounded-full bg-secondary/10 px-4 py-4 text-secondary">
        This is simple Alert
      </div>
      <div className="rounded-full bg-info/10 px-4 py-4 text-info">
        This is simple Alert
      </div>
      <div className="rounded-full bg-success/10 px-4 py-4 text-success">
        This is simple Alert
      </div>
      <div className="rounded-full bg-error/10 px-4 py-4 text-error">
        This is simple Alert
      </div>
      <div className="rounded-full bg-warning/10 px-4 py-4 text-warning">
        This is simple Alert
      </div>
    </div>`;
  return (
    <AlertContainer
      title={"Soft Alert"}
      description={
        "Alerts can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      }
      codeString={codeString}
    />
  );
};

export default SoftAlert;
