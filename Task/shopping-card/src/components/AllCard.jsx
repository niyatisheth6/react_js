import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateButton from "../shared/NavigateButton";

function AllCard() {
  const navigate = useNavigate();
  return (
    <div className="grid col-span-3 gap-2 flex-wrap">
      <NavigateButton
        title="1. DisplayData using usequery"
        onclick={() => navigate("/display-data")}
      />
      <NavigateButton
        title="2. Pagination using useEffect"
        onclick={() => navigate("/pagination-1")}
      />
      <NavigateButton
        title="3. Pagination 2 using useEffect"
        onclick={() => navigate("/pagination-2")}
      />
      <NavigateButton
        title="4. Pagination 3 using useQuery todo list"
        onclick={() => navigate("/pagination-3")}
      />
      <NavigateButton
        title="5. Pagination 4 using useQuery"
        onclick={() => navigate("/pagination-4")}
      />

    </div>
  );
}

export default AllCard;
