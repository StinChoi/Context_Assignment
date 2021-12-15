import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AccountInfo } from "../providers/UserProvider";

const Navbar = () => {
  const account = useContext(AccountInfo);
  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item>Home</Menu.Item>
      </NavLink>
      <NavLink to="/user/profile">
        {/* Will be replacing Name to an actual user */}
        <Menu.Item>{account.firstName} {account.lastName}</Menu.Item>
      </NavLink>
    </Menu>
  );
};

export default Navbar;
