import React from "react";
import Button from "./Button";

function FilterByFlair() {
  return (
    <div>
      <h2 className="p-2 bg-gray-800 text-white font-semibold w-full">
        Filter by flair
      </h2>
      <div className="bg-white p-4">
        <div className=" flex justify-center items-center gap-3 ">
          <Button
            title="Need Help"
            btn="bg-red-600 hover:bg-[#DAE0E6] hover:text-black text-white font-normal py-3"
          />
          <Button
            title="Show /r/nextjs"
            btn="bg-yellow-600 text-white hover:text-black hover:bg-[#DAE0E6]  font-normal py-3"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterByFlair;
