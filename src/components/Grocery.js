import { useState } from "react";
import GroceryCard from "./GroceryCard";
import groceryData from "../../utils/mockGrocery.json";

const Grocery = () => {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState(groceryData.data);
  return (
    <div className="h-[55rem] mt-10  flex flex-col items-center ">
      <div className="border-2 border-[#f67016] rounded-lg">
        <input
          placeholder="Search any Category..."
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className=" w-[600px] rounded-lg  py-2 text-center focus:outline-none"
        />
        <button
          onClick={() => {
            filter = groceryData.data.filter((item) =>
              item.displayName.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredData(filter);
            setInput("");
          }}
        >
          <i className="fa-solid fa-search p-4 rounded-tr rounded-br text-white bg-[#f67016]">
            {" "}
          </i>
        </button>
      </div>
      <div className="flex flex-wrap gap-10 justify-center m-10">
        {filteredData.map((item) => (
          <GroceryCard item={item} key={item.nodeId} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;
