import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../Services/movie.service";

export const getMovies = createAsyncThunk(
    "moviesSlice/getMovies",
    async({page})=> {
        try {
            return await MoviesService.getByPage(page)
        }catch (e){

        }
    }
)

export const moviesSlice = createSlice(
    {
        name:"moviesSlice",
        initialState : {
            movies : [],
            total_pages: null,
        },reducers : {

        },extraReducers : {
            [getMovies.fulfilled]: (state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages
            },
        }
    }
)

const moviesReducer = moviesSlice.reducer

export default moviesReducer