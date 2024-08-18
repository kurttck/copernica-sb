import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Carta from "./Carta/Carta";
import Locales from "./Locales/Locales";

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
