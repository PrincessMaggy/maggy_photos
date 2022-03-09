import React from "react";
import home1 from "../img/home1.png"


const AboutSection =() =>{


    return(
    <div>
        <div className="description">
            <div className ="title">
                <div className ="hide">
                    <h2> I work to make </h2>
                </div>
                <div className ="hide">
                    <h2> your <span>dreams </span> come </h2>
                </div>
                <div className ="hide">
                    <h2> true. </h2>
                </div>
                </div>
                <p> Reach out to me for any designs or developer jobs and ideas. 
                I am a professional with amazing skills</p>
                <button> Contact Us</button>
                </div>
                <div className="img">
                    <img src={home1} alt="guy with a camera"/>
                </div>
            </div>
)
}


export default AboutSection;