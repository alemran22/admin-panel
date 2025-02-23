import { Link } from "react-router-dom";

const Error404V1 = () => {
  return (
    <div className=" mx-auto text-center mt-20">
      <h3 className="text-3xl font-extrabold text-red-600 my-5">
        Page Not Found
      </h3>
      <Link to={"/"} className="bg-slate-600 px-4 py-2 rounded-md text-white">
        Back to Home Page
      </Link>
    </div>
  );
};

export default Error404V1;
