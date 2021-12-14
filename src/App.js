import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import UserProfile from "./components/UserProfile"

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </Container>
  </Fragment>
);

export default App;
