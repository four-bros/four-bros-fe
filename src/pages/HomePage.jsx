import React from "react";
import Home from "../components/Home";
import Navbar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h2>Made a change</h2>
      <Home />
    </div>
  );
};

export default HomePage;
