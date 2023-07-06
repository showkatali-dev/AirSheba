import { FaXmark } from "react-icons/fa6";
import { filters } from "../../data/filters";
import Filters from "./Filters";
import TimeFilter from "./TimeFilter";

function FilterBar({
  openFilter,
  setOpenFilter,
}: {
  openFilter: boolean;
  setOpenFilter: (value: boolean) => void;
}) {
  return (
    <aside
      className={`col-span-1 flex-col fixed md:static md:flex border-2 border-neutral/10 md:border-none bg-base-100 md:bg-transparent p-6 md:p-0 top-4 left-4 right-4 bottom-4 overflow-y-auto overflow-x-hidden gap-10 z-50 md:z-0 filter-bar ${
        openFilter ? "flex" : "hidden"
      }`}
    >
      <button
        onClick={() => setOpenFilter(false)}
        className="btn md:hidden btn-ghost btn-circle bg-neutral/30 hover:bg-neutral/40 text-secondary fixed top-1 right-1 z-[60] p-1"
      >
        <FaXmark size={20} />
      </button>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">Filters</h3>
        <button className="btn btn-sm btn-ghost border-neutral/10">
          Reset
        </button>
      </div>
      {filters.map((filter, i) => (
        <Filters
          key={i}
          filterName={filter.name}
          categories={filter.categories}
        />
      ))}

      <div>
        <h5 className="font-semibold mb-5">Departure time in Dhaka</h5>
        <TimeFilter />
      </div>
      <div>
        <h5 className="font-semibold mb-5">Arrival time in Singapore</h5>
        <TimeFilter />
      </div>
    </aside>
  );
}

export default FilterBar;
