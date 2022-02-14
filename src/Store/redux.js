import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies.slice";
import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice";
export const store = configureStore({
    reducer: {
        moviesReducer,
        movieReducer,
        genreReducer
    }
})