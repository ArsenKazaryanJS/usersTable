export const initialState = { 
    allUsers: [], 
    pageUsers: [], 
    sortKey: "", 
    addUser: {}, 
    currentPage: 1, 
    totalPagesCount: null, 
    popUp: false, 
    user: {} 
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case "PAGE_USERS":
        return { ...state, pageUsers: action.payload };
      case "ALL_USERS":
        return { ...state, allUsers: action.payload }; 
      case "TOTAL_PAGES_COUNT":
        return { ...state, totalPagesCount: action.payload };
      case "SET_SORT_KEY":
        return { ...state, sortKey: action.payload };
      case "ADD_USER":
        return { ...state, allUsers: [action.payload, ...state.allUsers] }; 
      case "DELETE_USER":
        return { ...state, pageUsers: state.pageUsers.filter((el) => el.id !== action.payload) };
      case "UPDATE_USER":
        return { ...state, allUsers: state.allUsers.map((el) => el.id === action.payload.id ? { ...el, ...action.payload } : el) };  
      case "USER":
        return { ...state, user: action.payload };   
      case "SET_CURRENT_PAGE":
        return { ...state, currentPage: action.payload };
      case "SET_POPUP":
        return { ...state, popUp: action.payload };
      default:
        return state;
    }
  }
  