import { useContext, useState } from "react";
import { AddUserForm } from "../AddUserForm/AddUserForm";
import { Head } from "../Head/Head";
import { UpdatePopUp } from "../UpdatePopUp/UpdatePopUp";
import { UsersTable } from "../UsersTable/UsersTable";
import "./app_content.css";
import { AppContext } from "../../app/App";

export const AppContent = () => {
  const {state:{popUp}} = useContext(AppContext)

  return (
    <div className="container">
      <Head />
      <div className="content">
        <AddUserForm />
        <UsersTable />
        {popUp && <UpdatePopUp />}
      </div>
    </div>
  );
};
