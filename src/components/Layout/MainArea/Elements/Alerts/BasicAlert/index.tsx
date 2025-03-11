import AlertContainer from "@/components/ui/AlertContainer";

const BasicAlert = () => {
  const codeString = `
    <div className="w-full flex flex-col gap-3">
      <div className="rounded-lg bg-slate-200 px-4 py-4 text-slate-600">
        This is simple Alert
      </div>
      <div className="rounded-lg bg-primary px-4 py-4 text-white">
        This is simple Alert
      </div>
      <div className="rounded-lg bg-secondary px-4 py-4 text-white">
        This is simple Alert
      </div>
      <div className="rounded-lg bg-info px-4 py-4 text-white">
        This is simple Alert
      </div>
      <div className="rounded-lg bg-success px-4 py-4 text-white">
        This is simple Alert
      </div>
      <div className="rounded-lg bg-error px-4 py-4 text-white">
        This is simple Alert
      </div>
      <div className="rounded-lg bg-warning px-4 py-4 text-white">
        This is simple Alert
      </div>
    </div>`;
  return (
    <AlertContainer
      title={"Basic Alert"}
      description={
        "The alert component is used to convey important information to the user through the use of contextual types, icons, and colors"
      }
      codeString={codeString}
    />
  );
};

export default BasicAlert;
