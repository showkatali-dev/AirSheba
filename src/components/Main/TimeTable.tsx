import { FcCalendar } from "react-icons/fc";
import { HiArrowDown, HiArrowRight, HiChevronDown } from "react-icons/hi";

function TimeTable() {
  return (
    <div className="border border-neutral/5 rounded-2xl p-5">
      <div className="flex justify-between items-center pb-4 border-b border-neutral/5 cursor-pointer">
        <div className="flex items-center gap-3">
          <FcCalendar size={40} />
          <div>
            <h3 className="font-semibold text-xl">Flexible dates</h3>
            <p className="text-sm">Compare prices for nearby days</p>
          </div>
        </div>
        <HiChevronDown size={24} />
      </div>

      <div className="flex items-center gap-3 my-8">
        <h3 className="text-lg italic">Departure</h3>
        <HiArrowRight size={20} className="mt-1" />
      </div>

      {/* table */}
      <div className="w-full overflow-x-auto">
        <table className="custom-table w-full overflow-x-auto">
          <thead>
            <tr>
              <th>Mon, 15 May</th>
              <th>Mon, 16 May</th>
              <th>Mon, 17 May</th>
              <th className="bg-primary/5">Mon, 18 May</th>
              <th>Mon, 19 May</th>
              <th>Mon, 20 May</th>
              <th>Mon, 21 May</th>
              <th className="!text-base italic">
                Return <HiArrowDown size={20} className="inline ml-2" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$251</td>
              <td>$251</td>
              <td>-</td>
              <td className="bg-primary/5">-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <th>Mon, 16 May</th>
            </tr>
            <tr>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td className="bg-primary/5">-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <th>Mon, 16 May</th>
            </tr>
            <tr>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td className="bg-primary/5">$251</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <th>Mon, 16 May</th>
            </tr>
            <tr>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td className="tab-active text-white">$251</td>
              <td className="bg-primary/5">$251</td>
              <td className="bg-primary/5">-</td>
              <td className="bg-primary/5">-</td>
              <th className="bg-primary/5">Mon, 16 May</th>
            </tr>
            <tr>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>-</td>
              <th>Mon, 16 May</th>
            </tr>
            <tr>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <th>Mon, 16 May</th>
            </tr>
            <tr>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <td>$251</td>
              <th>Mon, 16 May</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimeTable;
