import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import { Root } from "./pages/root/root";
import { First } from "./pages/first/first";
import { Second } from "./pages/second/second";

function App() {
  return (
    <div>
      <header>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/root"
          >
            Главная{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/first"
          >
            Библиотека
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/second"
          >
            Новости{" "}
          </NavLink>
        </ul>
      </header>
      <Routes>
        <Route path="/root" element={<Root />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </div>
  );
}

export default App;
