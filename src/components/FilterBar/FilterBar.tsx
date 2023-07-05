import { filters } from "../../data/filters";
import Filters from "./Filters";
import TimeFilter from "./TimeFilter";

function FilterBar() {
  return (
    <aside className="col-span-1 flex flex-col gap-10">
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
