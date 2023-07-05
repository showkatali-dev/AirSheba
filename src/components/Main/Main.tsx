import { HiChevronDown } from "react-icons/hi";
import AvailableSeatCard from "./AvailableSeatCard";
import TimeTable from "./TimeTable";

function Main() {
  return (
    <main className="col-span-2 flex flex-col gap-10">
      <div className="breadcrumbs !font-medium p-0">
        <ul>
          <li>
            <a className="hover:!no-underline">Choose departing flight</a>
          </li>
          <li className="text-base-content/50 before:!opacity-100">
            Choose returning flight
          </li>
          <li className="text-base-content/50 before:!opacity-100">Checkout</li>
        </ul>
      </div>

      <TimeTable />

      <div className="flex items-center justify-between gap-8">
        <p className="text-xs">
          Prices displayed include taxes and may changes based on availability.
          You can review any additional fees before checkout. Prices are not
          final until you complete your purchase.
        </p>
        <div className="px-6 py-4 border border-neutral/5 rounded-2xl flex items-center gap-4 cursor-pointer">
          <h3 className="font-medium">Recommended</h3>
          <HiChevronDown size={16} />
        </div>
      </div>

      <div className="space-y-8">
        <AvailableSeatCard />
        <AvailableSeatCard />
        <AvailableSeatCard />
        <AvailableSeatCard />
      </div>
    </main>
  );
}

export default Main;
