import React from 'react';

import {useSelector, useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {getMovies} from "../../../Store/movies.slice";


import {Pagination} from "../../PaginationComp/Pagination/Pagination";
import {Movie} from "../Movie/Movie";
import "../Movie/MovieCard.css"
const Movies = () => {
    const {movies, total_pages} = useSelector(state => state["moviesReducer"]);

    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatch(getMovies({page}))
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [searchParams])
    return (
        <>
            {console.log(movies)}
            <Pagination total_pages={total_pages}/>
            <div className={"moveListCARD"}>
                {movies.map(movie => <Movie movie={movie}/>)}
            </div>
            <Pagination total_pages={total_pages}/>
        </>
    );
};

export {Movies};