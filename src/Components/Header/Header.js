import React from 'react';
import {NavLink} from "react-router-dom";

import "./header.css"
const Header = () => {
    return (
        <div className={"header"}>
            <NavLink to={'/movies'}>MOVIES</NavLink>
            <NavLink to={'/genres'}>GENRES</NavLink>
        </div>
    );
};

export {Header};