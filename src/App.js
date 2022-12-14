import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainRout from "./Routes/MainRouts";
import Currency from "./Routes/Currency";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<MainRout />} />
          <Route path="/currency/:id" element={<Currency />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
