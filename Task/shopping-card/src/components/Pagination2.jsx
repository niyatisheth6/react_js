import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import CreateCard from "./CreateCard";
import todoGetApi from "../api/todoGetApi";
import NavigateButton from "../shared/NavigateButton";

function Pagination2() {
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const navigate = useNavigate(null);
  const getData = async () => {
    const response = await todoGetApi();
    setData(response.data.products);
  };

  useEffect(() => {
    getData();
  }, [page]);
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
  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: page === index ? "blue" : "blue-gray",
    onClick: () => setPage(index),
  });
  return (
    <div className="container">
      <div>
        <h1 className="heading">Products Listing</h1>
      </div>
      <div className="data_button">
        <NavigateButton title="Add Data" onclick={() => navigate("/card")} />
        <div className="flex items-center gap-4">
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2 rounded-full"
            onClick={handlePrev}
            disabled={page === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton {...getItemProps(1)}>1</IconButton>
            <IconButton {...getItemProps(2)}>2</IconButton>
            <IconButton {...getItemProps(3)}>3</IconButton>
            <IconButton {...getItemProps(4)}>4</IconButton>
            <IconButton {...getItemProps(5)}>5</IconButton>
            <IconButton {...getItemProps(6)}>6</IconButton>
          </div>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2 rounded-full"
            onClick={handleNext}
            disabled={page === pageCount}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
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

export default Pagination2;
