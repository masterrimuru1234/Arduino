import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import React, { Fragment } from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route exact path="/Team" element={<Teams />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
