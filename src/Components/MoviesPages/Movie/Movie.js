import React from 'react';

import {NavLink,Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import "./MovieCard.css"

const Movie = ({movie}) => {
    return (
        <div className={"movieCard"}>
        <Link to={`/movies/${movie.id}`}>
            <p>Name: {movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''/>
            <p>Release date :  {movie.release_date}</p>
            <p>Votes : {movie.vote_count}</p>
            <div>
                <StarRatings
                    rating={movie.vote_average/2}
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="yellow"
                />
            </div>
        </Link>
        </div>

    );
};

export {Movie};