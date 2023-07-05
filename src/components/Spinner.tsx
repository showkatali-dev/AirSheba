import { BarLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-base-100">
      <BarLoader color="#059dff" width={200} />
    </div>
  );
}

export default Spinner;
