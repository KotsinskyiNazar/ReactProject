import React from 'react';
import {Movies} from "../../Components";
import "./MoviePage.css"

const MoviesPage = () => {

    return (
        <div className={"movieList"}>
            <Movies/>
        </div>
    );
};

export {MoviesPage};