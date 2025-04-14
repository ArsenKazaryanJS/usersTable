export const fetchAllUsers = async (dispatch) => {
  const res = await fetch(`http://localhost:3001/users`);
  const data = await res.json();
  dispatch({ type: "ALL_USERS", payload: data });
};

export const fetchPageUsers = async (dispatch,state) => {
  const res = await fetch(
    `http://localhost:3001/users?_page=${state.currentPage}&_per_page=5`
  ); //per_page=limit
  const { data, pages } = await res.json();
  dispatch({ type: "PAGE_USERS", payload: data });
  dispatch({ type: "TOTAL_PAGES_COUNT", payload: pages });
};
