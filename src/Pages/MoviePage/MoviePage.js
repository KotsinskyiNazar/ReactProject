import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";


import {getMovieDesc, resetStore} from "../../Store/movie.slice";

import "./movieDescr.css"
const MoviePage = () => {

    const {movieDesc} = useSelector(state => state["movieReducer"])

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(() => {
        dispatch(getMovieDesc({id}))
        return () => {
            dispatch(resetStore())
        }
    }, [id])

    {console.log(movieDesc)}

    return (
        <div className={"movieDescription"}>
            <img src={`https://image.tmdb.org/t/p/original${movieDesc.backdrop_path}`} alt=''/>
            <div>
                <div><h2>{movieDesc.title}</h2></div>
                <div><h4>{movieDesc.tagline}</h4></div>
                <p>{movieDesc.overview}</p>
                <p>release date : {movieDesc.release_date}</p>

                <p>budget : {movieDesc.budget}</p>

            </div>
        </div>
    );
};

export {MoviePage};