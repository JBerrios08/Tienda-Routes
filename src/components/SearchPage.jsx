import React from "react";
import { Link } from "react-router-dom";
import { BtnLink, CenterInfo } from "../estilos-componentes/styles-comp";

const SearchPage = () => {
    const celulares = [
        "Samsung",
        "LG",
        "Xiaomi",
        "iPhone"
    ];

    return (
        <CenterInfo>
            <h2>Página de Búsqueda</h2>
            <ul>
                {celulares.map((celular) => (
                    <li key={celular}>
                        <Link to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink>
                        </Link>
                    </li>
                ))}
            </ul>
        </CenterInfo>
    );
};

export default SearchPage;