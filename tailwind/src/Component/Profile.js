import React from "react";
import { UserAuth } from "../Context/AuthContext";
import Profilecard from "./Profilecard";
import Login from "./Login";

const Home = () => {
  const { user } = UserAuth();

  return <>{user ? <Profilecard /> : <Login />}</>;
};

export default Home;
