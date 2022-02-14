import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../../Store/genre.slice";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state["genreReducer"])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getGenres())
    }, [])

    return (
        <div>
            {console.log(genres)}
            {genres.map(genre => <Genre key={genre.id}genre={genre}/>)}
        </div>
    );
};

export {Genres};