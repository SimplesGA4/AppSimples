import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Certificados  from './screens/certificados/certificados.jsx';
import Animes        from "./screens/animes/animes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"                  element={<Navigate to="/home" />} />
        <Route path="/home"              element={<App />} />
        <Route path="/home/certificados" element={<Certificados />} />
        <Route path="/home/animes"       element={<Animes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

