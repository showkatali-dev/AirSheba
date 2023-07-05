import { useState } from "react";
const categories = ["Round Trip", "One Way", "Multi City"];
function CategoryTab() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs tabs-boxed bg-transparent">
      {categories.map((category, i) => (
        <div
          key={i}
          className={`tab font-medium ${i === activeTab ? "tab-active" : ""}`}
          onClick={() => setActiveTab(i)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default CategoryTab;
