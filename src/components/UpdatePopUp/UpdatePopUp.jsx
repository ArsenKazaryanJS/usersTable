import { X } from "lucide-react";
import "./update_popup.css";
import { useContext } from "react";
import { AppContext } from "../../app/App";
import { useUpdate } from "../../hooks/useUpdate";

export const UpdatePopUp = () => {
  const { dispatch, state: { user,allUsers }} = useContext(AppContext);
  const {handleUpdate} = useUpdate(dispatch,user,allUsers)
  let addresses = [
    {
      value: "",
      label: "Select an address",
    },
    {
      value: "gyumri",
      label: "Gyumri",
    },
    {
      value: "artashat",
      label: "Artashat",
    },
    {
      value: "kapan",
      label: "Kapan",
    },
    {
      value: "sevan",
      label: "Sevan",
    },
    {
      value: "stepanakert",
      label: "Stepanakert",
    },
    {
      value: "hrazdan",
      label: "Hrazdan",
    },
    {
      value: "abovyan",
      label: "Abovyan",
    },
    {
      value: "masis",
      label: "Masis",
    },
    {
      value: "vardenis",
      label: "Vardenis",
    },
    {
      value: "tavush",
      label: "Tavush",
    },
    {
      value: "armavir",
      label: "Armavir",
    },
    {
      value: "kotayk",
      label: "Kotayk",
    },
    {
      value: "lori",
      label: "Lori",
    },
    {
      value: "syunik",
      label: "Syunik",
    },
  ];

  return (
    <div className="edit-user-container">
      <form className="edit-task" onSubmit={handleUpdate}>
        <div className="edit-user-title">
          <X onClick={() => dispatch({ type: "SET_POPUP", payload: false })} />
          <h2>Edit User</h2>
        </div>
        <div className="edit-user">
          <h3>First Name</h3>
          <input type="text" defaultValue={user.firstname} required />
        </div>
        <div className="edit-user">
          <h3>Last Name</h3>
          <input type="text" defaultValue={user.lastname} required />
        </div>
        <div className="edit-user">
          <h3>
            Addres : <span> {user.address}</span>
          </h3>
          <select id="armenian-countries" name="address" required>
            {addresses.map((el, index) => (
              <option key={index} value={el.value}>
                {el.label}
              </option>
            ))}
          </select>
        </div>
        <div className="new-task-edit-cancel">
          <button
            className="cancel-btn"
            onClick={() => dispatch({ type: "SET_POPUP", payload: false })}
          >
            Cancel
          </button>
          <button className="edit-user-btn">Update</button>
        </div>
      </form>
    </div>
  );
};
