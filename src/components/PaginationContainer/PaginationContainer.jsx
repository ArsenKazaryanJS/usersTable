import { useContext } from "react";
import { AppContext } from "../../app/App";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePagination } from "../../hooks/usePagination";

export const PaginationContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentPage, totalPagesCount } = state;
  const {handlePagination,pagesArray} = usePagination(dispatch,currentPage,totalPagesCount)

  return (
    <div className="pagination_box">
      <p onClick={() => handlePagination("prev")}>
        <ChevronLeft /> Previous
      </p>
      {pagesArray.map((page) => (
        <div key={page} className={`page_number ${currentPage === page ? "active" : ""}`}
          onClick={() => handlePagination(page)}>
          {page}
        </div>
      ))}
      <p onClick={() => handlePagination("next")}>
        Next <ChevronRight />
      </p>
    </div>
  );
};
