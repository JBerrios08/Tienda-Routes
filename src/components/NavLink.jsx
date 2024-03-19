import React from "react";
import {NavLink as NL} from "react-router-dom";


const NvLink = ({ to, children, ...props }) => {
    return (
        <NL {...props}
            className={
                ({ isActive }) => {
                    return isActive ? 'is-active' : undefined
                }}
            to={to}> {children}
        </NL>
    )
}

export default NvLink;