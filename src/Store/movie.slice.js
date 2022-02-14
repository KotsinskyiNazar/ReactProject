import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../Services/movie.service";

export const getMovieDesc = createAsyncThunk(
    'movieSlice/getMovieDesc',
    async ({id} ) => {
        try {
            const description = await MoviesService.getDetails(id)
            return {description}
        } catch (e) {

        }
    }
)
export const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState: {
            movieDesc:[],
        },
        reducers: {
            resetStore: (state) => {
                state.movieDesc = []
            }
        },
        extraReducers: {
            [getMovieDesc.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movieDesc = action.payload.description
            },
        }
    }
)

const movieReducer = movieSlice.reducer

export default movieReducer
export const {resetStore} = movieSlice.actions