import React from "react";
import home1 from "../img/home1.png";
//Styling
import styled from 'styled-components';
import {About, Description, Image, Hide} from "../styles";

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

export default AboutSection;