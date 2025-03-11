import AlertContainer from "@/components/ui/AlertContainer";

const OutlinedAlert = () => {
  const codeString = `
    <div className="w-1/2 flex flex-col gap-3">
      <div className="rounded-lg border border-slate-200 px-4 py-4 text-slate-600">
        This is simple Alert
      </div>
      <div className="rounded-lg border border-primary px-4 py-4 text-primary">
        This is simple Alert
      </div>
      <div className="rounded-lg border border-secondary px-4 py-4 text-secondary">
        This is simple Alert
      </div>
      <div className="rounded-lg border border-info px-4 py-4 text-info">
        This is simple Alert
      </div>
      <div className="rounded-lg border border-success px-4 py-4 text-success">
        This is simple Alert
      </div>
      <div className="rounded-lg border border-error px-4 py-4 text-error">
        This is simple Alert
      </div>
      <div className="rounded-lg border border-warning px-4 py-4 text-warning">
        This is simple Alert
      </div>
    </div>`;
  return (
    <AlertContainer
      title={"Outlined Alert"}
      description={
        "The alert component is used to convey important information to the user through the use of contextual types, icons, and colors"
      }
      codeString={codeString}
    />
  );
};

export default OutlinedAlert;
