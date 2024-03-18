import React from "react";
import "./App.css";
import { Routes, Route, Link, useParams, Outlet, NavLink as NL } from "react-router-dom";
import { Button, Header, BtnLink, DetailsCont, CenteredCont, CenteredDiv } from "./estilos-componentes/styles-comp";
import { ThemeProvider } from "styled-components";
import { ButtonVM, invertTheme, theme } from "./estilos-componentes/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="features">
        <h2>Bienvenido</h2>
        <p>Somos una tienda online de celulares.</p>
        <ThemeProvider theme={invertTheme}>
          <Link to="/search-page"><ButtonVM> Ver Más</ButtonVM></Link>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
};

const dataCelu = {
  Samsung: {
    modelo: "A54",
    precio: "$500.00",
    desc: "Resistente al agua"
  },
  LG: {
    modelo: "ThinQ v60",
    precio: "$550.00",
    desc: "Pantalla de varias pulgadas"
  },
  Xiaomi: {
    modelo: "Poco c40",
    precio: "$400.00",
    desc: "Calidad Precio"
  },
  iPhone: {
    modelo: "XR",
    precio: "$9,999.00",
    desc: "Cámara bonita!"
  },
};

const SearchPage = () => {
  const celulares = [
    "Samsung",
    "LG",
    "Xiaomi",
    "iPhone"
  ];

  return (
    <div className="features">
      <h2>Página de Búsqueda</h2>
      <ul>
        {celulares.map((celular) => (
          <li key={celular}>
            <Link to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Celulares = () => {
  const { nameCelular } = useParams();

  return (
    // <CenteredDiv>
      <div className="features">
        <h2>Info de Celulares</h2>
        <h2>{nameCelular}</h2>
        <Link to="details"><Button>Ver detalles</Button></Link>
        <Outlet />
      </div>
    // </CenteredDiv>
  );
};

const CelularDetails = () => {
  const { nameCelular } = useParams();
  const detalles = dataCelu[nameCelular];

  return (
    <DetailsCont>
      <h3>Detalles del móvil {nameCelular}</h3>
      <h4>Modelo: {detalles.modelo}</h4>
      <h4>Precio: {detalles.precio}</h4>
      <h4>Descripción: {detalles.desc}</h4>
    </DetailsCont>
  );
};

const NavLink = ({ to, children, ...props }) => {
  return (
    <NL {...props}
      className={
        ( {isActive} ) => {
          return isActive ? 'is-active' : undefined
        }}
        to={to}> {children}
    </NL>
  )
}

function App() {
  return (
    <div>
      <Header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Página de búsqueda</NavLink>
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
