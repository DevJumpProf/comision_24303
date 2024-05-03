import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { DetallePeliculas } from "./pages/DetallePeliculas";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">PELICULAS</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pelicula/:peliculaId" element={<DetallePeliculas />} />
      </Routes>
    </BrowserRouter>
  );
};
