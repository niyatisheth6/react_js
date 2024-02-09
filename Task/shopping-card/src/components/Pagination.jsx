import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import CreateCard from "./CreateCard";
import todoGetApi from "../api/todoGetApi";
import NavigateButton from "../shared/NavigateButton";

function Pagination() {
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const navigate = useNavigate();
  const getData = async () => {
    const response = await todoGetApi();
    setData(response?.data.products);
  };

  useEffect(
    () => {
      getData();
    },
    [page],
    []
  );

  const handlePrev = () => {
    if (page === 1) return page;
    setPage(page - 1);
  };

  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
  };

  useEffect(() => {
    const pageDataCount = Math.ceil(data.length / 5);
    setPageCount(pageDataCount);
    if (page) {
      const LIMIT = 5;
      const skip = LIMIT * page;
      const dataSkip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataSkip);
    }
  }, [data]);
  return (
    <div className="container">
      <div>
        <h1 className="heading">Products Listing</h1>
      </div>
      <div className="data_button">
        <NavigateButton title="Add Data" onclick={() => navigate("/card")} />
        <div className="flex items-center gap-8">
          <IconButton
            size="sm"
            variant="outlined"
            color="blue-gray"
            onClick={handlePrev}
            disabled={page === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <span>{page}</span> of <span>{pageCount}</span>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            color="blue-gray"
            onClick={handleNext}
            disabled={page === pageCount}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
      </div>
      <div className="data">
        {pageData &&
          pageData.map((obj, index) => {
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

export default Pagination;
