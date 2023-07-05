import { BiTime, BiTimer } from "react-icons/bi";
import { FaPlane } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

function AvailableSeatCard() {
  return (
    <div className="border border-neutral/5 rounded-2xl flex flex-col lg:flex-row item-center">
      <div className="border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-dashed border-neutral/10 px-4 py-8 flex items-center justify-between gap-4">
        <div>
          <h6>Dhaka</h6>
          <h1 className="text-4xl font-extrabold">DAC</h1>
          <h6>12:30pm</h6>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-28 h-1 bg-gradient-to-r from-neutral/0 to-neutral"></span>
          <FaPlane size={26} />
        </div>
        <div>
          <h6>Dublin</h6>
          <h1 className="text-4xl font-extrabold">DUB</h1>
          <h6>06:55pm</h6>
        </div>
      </div>
      <div className="px-4 py-8 flex items-center justify-between gap-3 2xl:gap-6">
        <div>
          <h6 className="flex items-center gap-1">
            <FcRating />
            Thai
          </h6>
          <h5 className="text-lg font-medium mb-3">
            Thai Airways International
          </h5>
          <p className="flex items-center gap-1 text-sm">
            <BiTime />
            <span>Duration: 28h 0m (1 Stop)</span>
          </p>
          <p className="flex items-center gap-1 text-sm">
            <BiTimer />
            <span>Layover: 20h 35m in Colombo (CMB)</span>
          </p>
        </div>
        <div>
          <p className="text-error italic font-medium">4 seat left at</p>
          <h2 className="text-2xl font-medium">$400</h2>
        </div>
      </div>
    </div>
  );
}

export default AvailableSeatCard;
