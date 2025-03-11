import AlertContainer from "@/components/ui/AlertContainer";

const BorderedAlert = () => {
  const codeString = `
    <div className="w-1/2 flex flex-col gap-3">
      <div className="rounded-full border border-primary px-4 py-4 text-primary">
        This is simple Alert
      </div>
      <div className="flex overflow-hidden rounded-lg bg-secondary/10 text-secondary">
        <div className="w-1.5 bg-secondary"></div>
        <div className="p-4">This is simple alert</div>
      </div>
      <div className="flex overflow-hidden rounded-lg border border-info text-info">
        <div className="bg-info p-3 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
         <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        </div>
       <div className="px-4 py-3 sm:px-5">This is simple alert</div>
     </div>
     <div className="rounded-full border border-success px-4 py-4 text-success">
        This is simple Alert
     </div>
     <div className="flex overflow-hidden rounded-lg bg-warning/10 text-warning">
        <div className="flex flex-1 items-center space-x-3 p-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div className="flex-1">This is simple alert</div>
     </div>

        <div className="w-1.5 bg-warning"></div>
     </div>
      <div className="flex space-x-2 rounded-lg border border-error px-4 py-4 text-error">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         class="size-5"
         viewBox="0 0 20 20"
         fill="currentColor">
        <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        clip-rule="evenodd"/>
        </svg>
        <p>This is simple alert</p>
      </div>
    </div>`;
  return (
    <AlertContainer
      title={"Bordered Alert"}
      description={
        "Alerts can have a border. Check out code for detail of usage."
      }
      codeString={codeString}
    />
  );
};

export default BorderedAlert;
