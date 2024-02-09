import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@material-tailwind/react";

import CreateCard from "./CreateCard";
import cardGetApi from "../api/cardGetApi";
import NavigateButton from "../shared/NavigateButton";
import PaginationButton from "../shared/PaginationButton";

function DisplayData() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate(null);
  const fetchData = async (page, skip, limit) => {
    const response = await cardGetApi(page, skip, limit);
    return response.data.products;
  };

  const { data } = useQuery(
    ["products", currentPage, currentPage - 1, pageSize],
    () => fetchData(currentPage, (currentPage - 1) * pageSize, pageSize)
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <h1 className="heading">Products Listing</h1>
      <div className="data_button">
        <NavigateButton title="Add Data" onclick={() => navigate("/card")} />
        <div className="card_pagination_button">
          <PaginationButton
            title="Prev Page"
            onclick={handlePreviousPage}
            disabled={currentPage === 1}
          />
          <Typography color="gray" className="font-normal">
            Page <span>{currentPage}</span> of <span>{pageSize}</span>
          </Typography>
          <PaginationButton
            title="Next Page"
            onclick={handleNextPage}
            disabled={currentPage === pageSize}
          />
        </div>
      </div>
      <div className="data">
        {data &&
          data.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                <CreateCard obj={obj} />
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default DisplayData;
