import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./src/assets/components/NavBar.jsx";
import Login from "./src/assets/components/Login.jsx";
import { useEffect } from "react";
import App from "./App.jsx";
import "./src/assets/styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
