import { BiSearch } from "react-icons/bi";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import CategoryTab from "./CategoryTab";
import SearchInput from "./SearchInput";

function SearchBar() {
  return (
    <div className="px-4 py-8 rounded-2xl border border-neutral/5">
      <div className="flex flex-row flex-wrap gap-12 lg:items-end justify-between">
        <div className="flex flex-col justify-between gap-8">
          <CategoryTab />

          {/* flying from */}
          <div className="flex items-center gap-4">
            <HiOutlineLocationMarker size={34} className="opacity-30" />
            <SearchInput fieldName="Flying from" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <div className="flex items-center gap-2">
            <HiOutlineUsers size="24" className="opacity-30" />
            <h5 className="font-medium">1 Traveler, Economy</h5>
          </div>

          {/* flying to */}
          <div className="flex items-center gap-4">
            <HiOutlineLocationMarker size={34} className="opacity-30" />
            <SearchInput fieldName="Flying to" />
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex items-center gap-4">
            <HiOutlineCalendar size={34} className="opacity-30" />
            <div>
              <h2 className="text-2xl font-semibold">Feb 08 - Feb 14</h2>
              <p className="text-base-content/50 py-2 h-8">
                Journey Date - Return Date
              </p>
            </div>
          </div>

          {/* search button */}
          <button className="relative inline-flex items-center justify-center p-4 mask-square w-fit h-fit overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group active:scale-95 transition-transform duration-100">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">
              <BiSearch size={40} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
