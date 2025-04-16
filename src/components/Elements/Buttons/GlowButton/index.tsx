import ButtonContainer from "@/components/ui/ButtonContainer";

const GlowButton = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button 
      class="py-2 px-4 rounded-lg bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90">
        Default
      </button>
      <button 
      class="py-2 px-4 rounded-lg bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90">
        Primary
      </button>
      <button 
      class="py-2 px-4 rounded-lg bg-secondary font-medium text-white shadow-lg shadow-secondary/50 hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90">
        Secondary
      </button>
      <button 
      class="py-2 px-4 rounded-lg bg-info font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus focus:shadow-lg focus:shadow-info/50 active:bg-info-focus/90">
        Info
      </button>
      <button 
      class="py-2 px-4 rounded-lg bg-success font-medium text-white hover:bg-success-focus hover:shadow-lg hover:shadow-success/50 focus:bg-success-focus focus:shadow-lg focus:shadow-success/50 active:bg-success-focus/90">
        Success
      </button>
      <button 
      class="py-2 px-4 rounded-lg bg-warning font-medium text-white shadow-lg shadow-warning/50 hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90">
        Warning
      </button>
      <button 
      class="py-2 px-4 rounded-lg bg-error font-medium text-white hover:bg-error-focus hover:shadow-lg hover:shadow-error/50 focus:bg-error-focus focus:shadow-lg focus:shadow-error/50 active:bg-error-focus/90">
        Error
      </button>
    </div>`;
  return (
    <ButtonContainer
      title="Glow Button"
      description="Buttons can be Glow. To do this, you should use colored shadows. Check out code for detail of usage."
      codeString={codeString}
    />
  );
};

export default GlowButton;
