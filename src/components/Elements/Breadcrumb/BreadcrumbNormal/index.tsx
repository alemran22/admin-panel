import ButtonContainer from "@/components/ui/ButtonContainer";

const BreadcrumbNormal = () => {
  const codeString = `
   <ul className="flex space-x-2 items-center">
        <li className="flex space-x-1 items-center">
          <a href="#" className="text-[#4F46E5] transition-colors">
            Home
          </a>
          <svg
            x-ignore
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
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
        <li className="flex space-x-1 items-center">
          <a href="#" className="text-[#4F46E5] transition-colors">
            Elements
          </a>
          <svg
            x-ignore
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
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
        <li className="flex space-x-1 items-center">
          <a href="#">Breadcrumb</a>
        </li>
      </ul>
 `;

  return (
    <div>
      <ButtonContainer
        title="Breadcrumb"
        description="Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website. Check out code for detail of usage."
        codeString={codeString}
      />
    </div>
  );
};

export default BreadcrumbNormal;
