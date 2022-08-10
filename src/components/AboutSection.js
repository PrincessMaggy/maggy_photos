import React from "react";
import home1 from "../img/home1.png";
import {About, Description, Image, Hide} from "../styles";

//framer-motion
import {motion} from 'framer-motion';
const AboutSection =() =>{

const titleAnim = {
    hidden: {opacity:0},
    show:{opacity:1, transition:{duration:2} },
};
const container ={
    hidden:{x: 100},
    show:{x: 0, transition:{duration:1, 
                            ease: "easeOut", 
                            staggerChildren:1,
                            when:"afterChildren"}}
}
    return(
    <About>
        <Description>
            <motion.div variants={container}
            initial= "hidden" animate="show"
            className ="title">
                <Hide>
                    <motion.h2 
                    variants={titleAnim}> 
                    I work to make </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 
                    variants={titleAnim}> your <span>dreams </span> come </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 
                    variants={titleAnim}> true. </motion.h2>
                </Hide>
                </motion.div>
                <p> Reach out to me for any designs or developer jobs and ideas. 
                I am a professional with amazing skills.</p>
                <button> Contact Us</button>
                </Description>
                <Image>
                    <img src={home1} alt="guy with a camera"/>
                </Image>
            </About>
)
}

export default AboutSection;