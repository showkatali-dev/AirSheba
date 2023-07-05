import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[95vh] bg-base-100">
      <h2 className="text-7xl text-neutral font-bold mb-4">404</h2>
      <p className="mb-8">The page you are looking for does not exist.</p>

      {/* back to home button */}
      <Link
        to="/"
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group active:scale-95 transition-transform duration-100"
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
        </span>
        <span className="relative text-white flex gap-2 items-center">
          <HiArrowLeft />
          Back to Home
        </span>
      </Link>
    </div>
  );
}

export default ErrorPage;
