import React, { createContext, useEffect, useReducer } from "react";
import { AppContent } from "../components/AppContent/AppContent";
import { fetchAllUsers, fetchPageUsers } from "../api/api";
import { initialState, reducer } from "./AppReducer";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPageUsers(dispatch,state);
  }, [state.currentPage,state.allUsers]);

  useEffect(() => {
    fetchAllUsers(dispatch);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <AppContent />
      </div>
    </AppContext.Provider>
  );
}

export default App;
