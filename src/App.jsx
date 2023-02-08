import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style/App.css";
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
