import React from "react";
import { Diet, Exercises, Membership } from "./pages";
import { Navbar, Header } from "./components";
import './App.css'
import Brand from "./components/brand/Brand";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <hr />
      <Header />
      <Brand />
      <Services />
      <Diet />
      {/* Exercises page */}
      {/* MemberShip plans page - take idea from the hospital website we created */}
    </div>
  );
};

export default App;
