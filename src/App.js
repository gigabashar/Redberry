import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Forms from "./Forms";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
