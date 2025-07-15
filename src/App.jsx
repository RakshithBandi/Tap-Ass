import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NetworkStatus from "./components/NetworkStatus";
import LocationFinder from "./components/LocationFinder";
import NotePad from "./components/NotePad";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/network">Network</Link>
        <Link to="/location">Location</Link>
        <Link to="/notepad">NotePad</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<NetworkStatus />} />
        <Route path="/location" element={<LocationFinder />} />
        <Route path="/notepad" element={<NotePad />} />
      </Routes>
    </div>
  );
};

export default App;
