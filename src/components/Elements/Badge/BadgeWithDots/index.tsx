import ButtonContainer from "@/components/ui/ButtonContainer";

const BadgeWithDots = () => {
  const codeString = `
 <div className="flex flex-wrap space-x-2">
 <button className="flex items-center space-x-2 rounded-full bg-primary/10 text-primary px-4 py-2">
 <div className="h-2 w-2 rounded-full bg-current"></div>
 <span>Primary</span>
 </button>
 <button className="flex items-center space-x-2 rounded-full bg-secondary/10 text-secondary px-4 py-2">
 <div className="h-2 w-2 rounded-full bg-current"></div>
 <span>Secondary</span>
 </button>
 <button className="flex items-center space-x-2 rounded-full bg-info/10 text-info px-4 py-2">
 <div className="h-2 w-2 rounded-full bg-current"></div>
 <span>Info</span>
 </button>
 <button className="flex items-center space-x-2 rounded-full bg-success/10 text-success px-4 py-2">
 <div className="h-2 w-2 rounded-full bg-current"></div>
 <span>Success</span>
 </button>
 <button className="flex items-center space-x-2 rounded-full bg-warning/10 text-warning px-4 py-2">
 <div className="h-2 w-2 rounded-full bg-current"></div>
 <span>Warning</span>
 </button>
 <button className="flex items-center space-x-2 rounded-full bg-error/10 text-error px-4 py-2">
 <div className="h-2 w-2 rounded-full bg-current"></div>
 <span>Error</span>
 </button>
 </div>
 `;

  return (
    <ButtonContainer
      title="Badge With Dots"
      description="Badges can have a dot attached and can be represented as buttons. Check out the code for detail of usage."
      codeString={codeString}
    />
  );
};

export default BadgeWithDots;
