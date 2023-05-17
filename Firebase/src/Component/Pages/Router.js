import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./TableData";
import Login from "./Login";
import InfoView from "./InfoView";
import Signin  from "./Signin";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home name="home" />} />
        <Route path="/Home" element={<Home name="Home" />} />
        <Route path="/Signin" element={<Signin name="Signin" />} />
        <Route path="/Detail" element={<Detail name="Detail" />} />
        <Route path="/InfoView/:id" element={<InfoView name="InfoView" />} />
        <Route path="*" element={<Login name="Login" />} />
      </Routes>
    </>
  );
}
