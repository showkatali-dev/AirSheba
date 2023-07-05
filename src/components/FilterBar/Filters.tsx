import { useState } from "react";

function Filters({
  filterName,
  categories,
}: {
  filterName: string;
  categories: { name: string; price: number }[];
}) {
  const [sliced, setSliced] = useState(true);

  const slicedCategories = sliced ? categories.slice(0, 5) : categories;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h5 className="font-semibold">{filterName}</h5>
        <h5 className="font-semibold">Form</h5>
      </div>
      {slicedCategories.map((category, i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary checkbox-sm"
                defaultChecked={i === 0}
              />
              <span className="ml-3">{category.name}</span>
            </label>
          </div>
          <p>${category.price}</p>
        </div>
      ))}

      {categories.length > 5 && (
        <button
          onClick={() => setSliced(false)}
          className={`mt-4 font-medium text-secondary ${
            !sliced ? "hidden" : ""
          }`}
        >
          See more
        </button>
      )}
    </div>
  );
}

export default Filters;
