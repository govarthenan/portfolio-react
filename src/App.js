import React from "react";

import Card from "./screens/Card"
import Hero from "./screens/Hero";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";

import "./index.css";

function App() {

  return (
    <>
      < NavBar />
      {/* <div className="columns"> */}
        <Card />
        <Hero />
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
