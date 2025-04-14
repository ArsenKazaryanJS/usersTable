export const usePagination = (dispatch,currentPage,totalPagesCount) => {

    const startPage = (currentPage + 1) - 1
    const endPage = Math.min(totalPagesCount, startPage + 2);
    const pagesArray = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  
    const handlePagination = (action) => {
      if (typeof action === "number") {
        dispatch({ type: "SET_CURRENT_PAGE", payload: action });
      } else if (action === "prev" && currentPage > 1) {
        dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 });
      } else if (action === "next" && currentPage < totalPagesCount) {
        dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 });
      }
    };

   return { handlePagination, pagesArray}
}
