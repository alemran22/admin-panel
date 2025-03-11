import AlertContainer from "@/components/ui/AlertContainer";

const DismissableAlert = () => {
  const codeString = `
    <div className="w-1/2 flex flex-col gap-3">
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
      <div className="px-2">
        <button
          @click="isShow = false; setTimeout(()=>$root.remove(),300)"
          className="size-7 rounded-full p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      x-data="{isShow:true}"
      data-alert-root
      :className="!isShow && 'opacity-0 transition-opacity duration-300'"
      className="flex items-center justify-between overflow-hidden rounded-lg bg-navy-900 py-4 px-4 text-slate-200 dark:text-navy-100 sm:px-5"
    >
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <div
        x-data="usePopper({placement:'bottom-end',offset:4})"
        @click.outside="isShowPopper && (isShowPopper = false)"
        class="inline-flex"
      >
        <button
          x-ref="popperRef"
          @click="isShowPopper = !isShowPopper"
          className="-mr-1.5 size-7 shrink-0 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
        <div
          x-ref="popperRoot"
          class="popper-root"
          :class="isShowPopper && 'show'"
        >
          <div
            className="rounded-md border border-slate-150 bg-white py-1.5 font-inter"
          >
            <ul>
              <li>
                <a
                  @click="isShow = false; setTimeout(()=>$el.closest('[data-alert-root]').remove(),300)"
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800"
                  >Remove</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800"
                  >Another Action</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800"
                  >Something else</a
                >
              </li>
            </ul>
            <div className="my-1 h-px bg-slate-150"></div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800"
                  >Separated Link</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      x-data="{isShow:true}"
      :className="!isShow && 'opacity-0 transition-opacity duration-300'"
      className="flex flex-col items-center justify-between space-y-4 rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-800 dark:border-navy-450 dark:text-navy-50 sm:flex-row sm:space-y-0 sm:px-5"
    >
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <button
        @click="isShow = false; setTimeout(()=>$root.remove(),300)"
        className="space-x-2 rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
      >
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
            stroke-width="1.5"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span>REMIND ME LATER</span>
      </button>
    </div>
    </div>`;
  return (
    <AlertContainer
      title={"Dismissable Alert"}
      description={
        "Alerts can be dismissable. Check out code for detail of usage."
      }
      codeString={codeString}
    />
  );
};

export default DismissableAlert;
