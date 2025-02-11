type Props = { children: string };

const PageHeading = ({ children }: Props) => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-red-500 underline">
        {children} Page
      </h1>
    </div>
  );
};

export default PageHeading;
