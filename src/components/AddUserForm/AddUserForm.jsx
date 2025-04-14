import React, { useContext } from "react";
import "./user_form.css";
import { AppContext } from "../../app/App";
import { useAddUser } from "../../hooks/useAddUser";

export const AddUserForm = () => {
  const {state, dispatch } = useContext(AppContext);
  const { handleSubmit } = useAddUser(dispatch,state.totalPagesCount);

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
    <div className="newUser_box">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstname"
            placeholder="Enter first name"
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastname"
            placeholder="Enter last name"
            required
          />
        </label>
        <label>
          Address
          <select id="armenian-countries" name="address" required>
            {addresses.map((el, index) => (
              <option key={index} value={el.value}>
                {el.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
