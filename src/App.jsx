import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";


// Add this new component
import About from "./About";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About /> {/* <- This must be present */}
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
