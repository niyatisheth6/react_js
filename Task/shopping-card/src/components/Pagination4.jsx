import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import jasonGetApi from "../api/jasonGetApi";
import PaginationButton from "../shared/PaginationButton";

function Pagination4() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchProducts = async (page, skip, limit) => {
    const response = await jasonGetApi(page, skip, limit);
    return response.data.products;
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", currentPage, currentPage - 1, pageSize], () =>
    fetchProducts(currentPage, (currentPage - 1) * pageSize, pageSize)
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      <div className="card_list">
        {products.map((product) => (
          <div key={product.id} className="card_content">
            <h3 className="card_title">
              {product.id} {product.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="pagination_button">
        <div>
          <PaginationButton
            onclick={handlePreviousPage}
            title="Previous Page"
            disabled={currentPage === 1}
          />
          <PaginationButton onclick={handleNextPage} title="Next Page" />
        </div>
      </div>
    </div>
  );
}

export default Pagination4;
