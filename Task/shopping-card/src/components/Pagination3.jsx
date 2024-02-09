import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import dummyGetApi from "../api/dummyGetApi";
import PaginationButton from "../shared/PaginationButton";

function Pagination3() {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTodos = async (page) => {
    const response = await dummyGetApi(page);
    return response.data;
  };

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery(["todos", currentPage], () => fetchTodos(currentPage));

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
        {todos.map((todo) => (
          <div key={todo.id} className="card_content">
            <h3 className="card_title">
              {todo.id} {todo.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="pagination_button">
        <div>
          <PaginationButton onclick={handlePreviousPage} title="Previous Page" disabled={currentPage === 1}/>
          <PaginationButton onclick={handleNextPage} title="Next Page" />
        </div>
      </div>
    </div>
  );
}

export default Pagination3;
