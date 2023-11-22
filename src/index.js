import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Movies from "./Movies";
import Dashboard from "./Dashboard";
import "./index.css";
import Preferences from "./Preferences";
import { createRoot } from "react-dom/client";
import Espanol from "./Espanol";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="movies" element={<Movies />} />
      <Route path="espanol" element={<Espanol />} />
      <Route path="preferences" element={<Preferences />} />
    </Routes>
  </BrowserRouter>
);
