import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Carta from "./Carta";
import Locales from "./Locales";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Carta" element={<Carta />}></Route>
      <Route path="/Locales" element={<Locales />}></Route>
    </Routes>
  );
}

export default App;
