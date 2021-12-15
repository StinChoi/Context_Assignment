import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountInfo } from "../providers/UserProvider";

const Home = () => {
  const account = useContext(AccountInfo);

  return (
    <div>
      <h1>Home</h1>
      <h3>Welcome, {account.firstName}!</h3>
      <Link to="/user/profile"><button>Edit Profile</button></Link>
    </div>
  );
};

export default Home;
