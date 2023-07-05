function Filters({
  filterName,
  categories,
}: {
  filterName: string;
  categories: { name: string; price: number }[];
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h5 className="font-semibold">{filterName}</h5>
        <h5 className="font-semibold">Form</h5>
      </div>
      {categories.map((category, i) => (
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
    </div>
  );
}

export default Filters;
