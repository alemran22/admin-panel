import ButtonContainer from "@/components/ui/ButtonContainer";
import {
  FaThumbsUp,
  FaCloud,
  FaChartLine,
  FaSync,
  FaBan,
  FaBatteryQuarter,
} from "react-icons/fa";

const WithIcons = () => {
  const codeString = `
    <div className="flex flex-wrap items-center gap-3">
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
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
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
        <span>Like</span>
      </button>
      <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
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
        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
      />
    </svg>
        <span>Primary</span>
      </button>
      <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
      />
    </svg>
        <span>Cloud</span>
      </button>
      <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
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
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
        <span>Trending</span>
      </button>
      <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
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
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
      </svg>
        <span>Refresh</span>
      </button>
      <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
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
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>

        <span>Block</span>
      </button>
      <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
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
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
        <span>Low Energy</span>
      </button>
    </div>`;

  return (
    <ButtonContainer
      title="Buttons with Icons"
      description="Buttons with hover and focus effects. Includes consistent elevation and focus rings for accessibility."
      codeString={codeString}
    />
  );
};

export default WithIcons;
