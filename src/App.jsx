import React from "react";
import "./App.css";
import { Routes, Route, NavLink as NL } from "react-router-dom";
import { Header, BtnLink, DetailsCont, CenteredCont, CenterInfo, CenteredDiv } from "./estilos-componentes/styles-comp";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";

function App() {
  return (
    <div>
      <Header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>
              <NL to="/">Home</NL>
            </li>
            <li>
              <NL to="/search-page">Página de búsqueda</NL>
            </li>
          </ul>
        </nav>
      </Header>

      <CenteredCont>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/celulares/:nameCelular" element={<Celulares />}>
            <Route path="details" element={<CelularDetails />} />
          </Route>
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </CenteredCont>
    </div>
  );
}

export default App;
