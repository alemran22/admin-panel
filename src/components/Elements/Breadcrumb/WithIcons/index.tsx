import ButtonContainer from "@/components/ui/ButtonContainer";

const WithIcons = () => {
  const codeString = `
<ul className="flex flex-wrap items-center space-x-2">
    <li className="flex items-center space-x-2">
      <a
        className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
      <svg
        x-ignore
        xmlns="http://www.w3.org/2000/svg"
        className="size-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </li>
    <li className="flex items-center space-x-2">
      <a
        className="flex items-center space-x-1.5 text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          ></path>
        </svg>
        <span>Elements</span>
      </a>
      <svg
        x-ignore
        xmlns="http://www.w3.org/2000/svg"
        className="size-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </li>
    <li>
      <div className="flex items-center space-x-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4.5 text-slate-400 dark:text-navy-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>Calendar</span>
      </div>
    </li>
  </ul>
`;

  return (
    <div>
      <ButtonContainer
        title="With Icon"
        description="Breadcrumb can have an icon. Check out code for detail of usage."
        codeString={codeString}
      />
    </div>
  );
};

export default WithIcons;
