import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App           from './App.jsx';
import Certificados  from './screens/certificados/Certificados.jsx'; // NÃO MODIFIQUE
import Animes        from './screens/animes/animes.jsx';              // NÃO MODIFIQUE


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

