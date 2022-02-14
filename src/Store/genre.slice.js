import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesService} from "../Services/movie.service";


export const getGenres = createAsyncThunk(
    "genreSlice/getGenres",
    async () => {
        try {
            const genres =  await MoviesService.getGenres()
            return {genres: [...genres.genres]}
        } catch (e) {

        }
    }
)


export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: [],
    }, reducers: {}, extraReducers: {
        [getGenres.fulfilled]: (state, action) => {
            state.genres = action.payload.genres
        }
    }
})


const genreReducer = genreSlice.reducer

export default genreReducer