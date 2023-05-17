import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Profile from "./Profile";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login name="Login" />} />
        <Route path="/Home" element={<Home name="Home" />} />
        <Route path="/Register" element={<Register name="Register" />} />
        <Route path="/Profile" element={<Profile name="Profile" />} />
        <Route path="*" element={<Login name="Login" />} />
      </Routes>
    </>
  );
}
