import { ChevronDown, ChevronUp, Pencil, Trash2 } from "lucide-react";
import "./users_table.css";
import { useContext } from "react";
import { AppContext } from "../../app/App";
import { useSort } from "../../hooks/useSort";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { PaginationContainer } from "../PaginationContainer/PaginationContainer";
import { useUpdate } from "../../hooks/useUpdate";

export const UsersTable = () => {
  const { state, dispatch } = useContext(AppContext);
  const { handleSort } = useSort(dispatch, state);
  const { handleDelete } = useDeleteUser(dispatch);
  const { handleSetUser } = useUpdate(dispatch)
  

  return (
    <div className="table_box">
      <h2>User Data Table</h2>
      <table>
        <thead>
          <tr>
            {["First Name", "Last Name", "Address", "Date"].map(
              (title, index) => (
                <th onClick={() => handleSort(title)} key={index}>
                  {title}
                  {title === state.sortKey ? <ChevronDown /> : <ChevronUp />}
                </th>
              )
            )}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.pageUsers.map((user) => (
            <tr key={user?.id}>
              <td>{user?.firstname}</td>
              <td>{user?.lastname}</td>
              <td>{user?.address}</td>
              <td>{user?.date}</td>
              <td>
                <div className="actions_btns">
                  <Pencil onClick={() => handleSetUser(user)}/>
                  <Trash2 onClick={() => handleDelete(user.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationContainer/>
    </div>
  );
};
