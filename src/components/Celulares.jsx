import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CenterInfo } from "../estilos-componentes/styles-comp";
import { ThemeProvider } from "styled-components";
import { Button, theme } from "../estilos-componentes/theme";

const Celulares = ({ nameCelular }) => {

    return (
        <CenterInfo>
            <ThemeProvider theme={theme}>
                <div className="features">
                    <h2>Info de Celulares</h2>
                    <h2>{nameCelular}</h2>
                    <Link to="details"><Button>Ver detalles</Button>{" "}
                    </Link>
                    <Outlet />
                </div>
            </ThemeProvider>
        </CenterInfo>
    );
};

export default Celulares;