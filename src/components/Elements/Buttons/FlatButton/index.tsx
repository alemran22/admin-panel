import ButtonContainer from "@/components/ui/ButtonContainer";

const FlatButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
        <button
         class="py-2 px-4 rounded-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 ">
            Default
        </button>
         <button
          class="py-2 px-4 rounded-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
             Primary
        </button>
        <button
         class="py-2 px-4 rounded-lg font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25">
             Secondary
        </button>
        <button
         class="py-2 px-4 rounded-lg font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
            Info
        </button>
        <button
         class="py-2 px-4 rounded-lg font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25">
            Warning
        </button>
        <button
         class="py-2 px-4 rounded-lg font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
            Error
        </button>
    </div>`;
  return (
    <ButtonContainer
      title="Flat Button"
      description="Buttons can be flat. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default FlatButton;
