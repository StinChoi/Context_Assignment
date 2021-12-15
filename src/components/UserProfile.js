import React, { useContext } from "react";
import { AccountInfo } from "../providers/UserProvider";
import User from "./User";
import UserForm from "./UserForm";

const UserProfile = () => {
const account = useContext(AccountInfo);

  return (
    <div>
      <h1>Users' Profile</h1>
      <User/>
      <UserForm/>
    </div>
  );
};

export default UserProfile;
