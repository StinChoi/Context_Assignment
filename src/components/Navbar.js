import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item>Home</Menu.Item>
      </NavLink>
      <NavLink to="/user/profile">
        {/* Will be replacing Name to an actual user */}
        <Menu.Item>Name</Menu.Item>
      </NavLink>
    </Menu>
  );
};

export default Navbar;
