import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import { MovieState } from "../movieState";

const MovieDetail = ()=>{
// const history = useLocation();
const url = useLocation();
const [movies, setMovies] = useState(MovieState);
const [movie, setMovie] = useState(null);
// console.log(history.pathname);

//Use effect
useEffect(()=>{
    const currentMovie =movies.filter((stateMovie)=> 
        stateMovie.url === url.pathname)
        setMovie(currentMovie[0])
},[movies,url])

return(
    <>
    {movie && (
    <Detail>
        <Headline>
            <h1>{movie.title}</h1>
            <img src={movie.mainImg}  alt=""/>
        </Headline>
        <Awards>
            {movie.awards.map((award) =>(
                <Award
                title={award.title}
                key= {award.title}
                description={award.description}/>
            ))}
        </Awards>
        <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
        </ImageDisplay>
    </Detail>
    )}</>
)

}
const Detail =styled.div`
    color:white;
`;

const Headline = styled.div`
    min-height:90vh;
    padding-top: 20vh;
    position:relative;
    h2{
        position: absolute;
        top: 10%;
        left:50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
    }
`;
const Awards = styled.div`
    min-height:80vh;
    display:flex;
    margin: 5rem 10rem;
    align-items:center;
    justify-content:space-around;
`

const AwardStyle = styled.div`
    padding:5rem;
    h3{
        font-size:2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;
const ImageDisplay= styled.div`
    min-height:50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit:cover;
    }
`
        
// Award component

const Award =(props) =>{

return(
    <AwardStyle>
        <h3>{props.title}</h3>
        <div className="line"></div>
        <p>{props.description}</p>
    </AwardStyle>
)


}
export default MovieDetail;