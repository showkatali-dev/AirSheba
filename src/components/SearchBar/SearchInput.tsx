import { JaroWinklerDistance } from "natural/lib/natural/distance";
import { useEffect, useRef, useState } from "react";
import { FaPlane } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface Airport {
  code: string;
  airport_name: string;
  city_name: string;
  country_name: string;
}

function SearchInput({ fieldName }: { fieldName: string }) {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [matchedAirports, setMatchedAirports] = useState<Airport[]>([]);
  const [openSuggestion, setOpenSuggestion] = useState(false);

  const matchedAirport = matchedAirports[0];

  const inputRef = useRef<HTMLInputElement>(null);

  //   for fetching airports data
  useEffect(() => {
    const fetchAirports = async () => {
      const result = await fetch("airport_autosuggestion.json").then((res) =>
        res.json()
      );
      setAirports(result);
    };
    fetchAirports();
  }, []);

  //   input search method
  const handleSearch = (text: string) => {
    if (text.length > 2) {
      text = text.toLowerCase();
      const filteredData = airports.some((airport) =>
        airport.code.toLowerCase().includes(text)
      )
        ? airports.filter((airport) =>
            airport.code.toLowerCase().includes(text)
          )
        : airports
            .map((airport) => ({
              ...airport,
              score: JaroWinklerDistance(text, airport.city_name, {
                ignoreCase: true,
              }),
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 1);

      setMatchedAirports(filteredData);
    } else {
      setMatchedAirports([]);
    }
  };

  // handle input focus
  const handleInputFocus = (text: string) => {
    setOpenSuggestion(true);
    handleSearch(text);
  };

  // handle input focus lose
  const handleInputFocusLose = () => {
    setTimeout(() => {
      setOpenSuggestion(false);
      setMatchedAirports([]);
    }, 200);
  };

  // select airport from suggestion
  const handleSelect = (city: string, code: string) => {
    if (inputRef.current) {
      inputRef.current.value = `${city} (${code})`;
    }
    setOpenSuggestion(false);
    setMatchedAirports([]);
  };

  return (
    <div className="self-end relative">
      <h2 className="text-2xl font-semibold mb-1">{fieldName}</h2>
      <input
        type="text"
        ref={inputRef}
        id={fieldName.split(" ")[1]}
        className="input bg-transparent focus:outline-0 px-0 h-8 placeholder:text-base-content/50 relative focus:z-20"
        placeholder="Airport Code / city"
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={(e) => handleInputFocus(e.target.value)}
        onBlur={handleInputFocusLose}
      />

      {/* the auto suggestion container */}
      {openSuggestion && matchedAirport && (
        <div className="absolute top-[calc(100%-40px)] -left-2 w-80 max-h-96 overflow-y-auto rounded-lg bg-base-100 shadow-xl shadow-neutral/10 pt-12 z-10">
          {/* the best matched city name */}
          <h3 className="flex items-center gap-2 mb-2 text-secondary px-2">
            <HiOutlineLocationMarker size={24} />
            <span>
              {matchedAirport.city_name}, {matchedAirport.country_name}
            </span>
          </h3>

          {/* airport lists by auto suggestion */}
          <ul>
            {airports
              .filter((airport) =>
                airport.city_name.includes(matchedAirport.city_name)
              )
              .map((airport) => (
                <li
                  key={airport.code}
                  className="flex items-center justify-between gap-5 hover:bg-primary/20 text-sm px-4 py-1 duration-100"
                  onClick={() => handleSelect(airport.city_name, airport.code)}
                >
                  <p className="flex items-center gap-2">
                    <FaPlane className="shrink-0" />
                    <span>
                      {airport.airport_name}, {airport.country_name}
                    </span>
                  </p>
                  <p>{airport.code}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
