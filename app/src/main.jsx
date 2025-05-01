import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App           from './App.jsx';
import Certificados  from './screens/Certificados/Certificados.jsx';
import Animes        from './screens/Animes/Animes.jsx';


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

