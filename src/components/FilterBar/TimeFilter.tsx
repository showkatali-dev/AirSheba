import { useState } from "react";
import { FiMoon, FiSun, FiSunrise, FiSunset } from "react-icons/fi";
function TimeFilter() {
  const [selectedTime, setSelectedTime] = useState(0);
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
      <div
        className={`border-2 rounded-2xl p-5 text-center flex flex-col justify-center items-center gap-1 cursor-pointer ${
          selectedTime === 0 ? "border-secondary" : "border-neutral/5"
        }`}
        onClick={() => setSelectedTime(0)}
      >
        <FiSunrise size={24} />
        <h3 className="font-semibold">Early Morning</h3>
        <p className="text-base-content/50 text-sm">(12:00am - 4:59am)</p>
      </div>

      <div
        className={`border-2 rounded-2xl p-5 text-center flex flex-col justify-center items-center gap-1 cursor-pointer ${
          selectedTime === 1 ? "border-secondary" : "border-neutral/5"
        }`}
        onClick={() => setSelectedTime(1)}
      >
        <FiSun size={24} />
        <h3 className="font-semibold">Morning</h3>
        <p className="text-base-content/50 text-sm">(5:00am - 11:59am)</p>
      </div>

      <div
        className={`border-2 rounded-2xl p-5 text-center flex flex-col justify-center items-center gap-1 cursor-pointer ${
          selectedTime === 2 ? "border-secondary" : "border-neutral/5"
        }`}
        onClick={() => setSelectedTime(2)}
      >
        <FiSunset size={24} />
        <h3 className="font-semibold">Afternoon</h3>
        <p className="text-base-content/50 text-sm">(12:00pm - 5:59pm)</p>
      </div>

      <div
        className={`border-2 rounded-2xl p-5 text-center flex flex-col justify-center items-center gap-1 cursor-pointer ${
          selectedTime === 3 ? "border-secondary" : "border-neutral/5"
        }`}
        onClick={() => setSelectedTime(3)}
      >
        <FiMoon size={24} />
        <h3 className="font-semibold">Evening</h3>
        <p className="text-base-content/50 text-sm">(6:00pm - 11:59pm)</p>
      </div>
    </div>
  );
}

export default TimeFilter;
