import React from 'react'

export const useSort = (dispatch,state) => {
    const handleSort = (key) => {
        const sortKey = key.toLowerCase().replace(' ', ''); 
        
        dispatch({ type: "SET_SORT_KEY", payload: key });
        console.log(state.pageUsers);
        
        const sortedUsers = [...state.pageUsers].sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1; 
          if (a[sortKey] > b[sortKey]) return 1; 
          return 0; 
        });
        
        dispatch({ type: "PAGE_USERS", payload: sortedUsers });
      };

      return{handleSort}
}

