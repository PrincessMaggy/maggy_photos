import React from "react";
import home1 from "../img/home1.png";
//Styling
import styled from 'styled-components';


const AboutSection =() =>{


    return(
    <About>
        <Description>
            <div className ="title">
                <Hide>
                    <h2> I work to make </h2>
                </Hide>
                <Hide>
                    <h2> your <span>dreams </span> come </h2>
                </Hide>
                <Hide>
                    <h2> true. </h2>
                </Hide>
                </div>
                <p> Reach out to me for any designs or developer jobs and ideas. 
                I am a professional with amazing skills</p>
                <button> Contact Us</button>
                </Description>
                <Image>
                    <img src={home1} alt="guy with a camera"/>
                </Image>
            </About>
)
}
//styled components
const About = styled.div`
min-height:90vh;
display: flex;
justify-content:space-between;
color:white;
padding:5rem;
align-items:center;`

const Description = styled.div`
flex:1 ;
padding-right:5rem ;
h2{
    font-weight:lighter ;
}
 `

 const Image = styled.div`
 flex:1;
 overflow:hidden ;
 img{
     width:100%;
     height:80vh ;
     object-fit:cover ;
 }
 `

 const Hide = styled.div`
 overflow:hidden;`

export default AboutSection;