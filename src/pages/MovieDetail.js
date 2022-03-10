import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { MovieState } from "../movieState";

const MovieDetail = ()=>{
const history = useNavigate();
const url = history.location.pathname;
const [movies, setMovies] = useState(MovieState);
const [movie, setMovie] = useState(null);
console.log(history);

//Use effect
useEffect(()=>{
    const currentMovie =movies.filter((stateMovie)=> 
        stateMovie.url === url)
        setMovie(currentMovie)
},[movies,url])

return(
    <div>
        <h1>Movie Detail</h1>
    </div>
)

}


export default MovieDetail;