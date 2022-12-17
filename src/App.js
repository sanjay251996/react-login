import "./App.css";
import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
