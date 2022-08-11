import React from "react";
import home1 from "../img/home1.png";
import {About, Description, Image, Hide} from "../styles";
import { titleAnim, container, fade, photoAnim } from "../animation";


//framer-motion
import {motion} from 'framer-motion';
const AboutSection =() =>{

    return(
    <About>
        <Description>
            <motion.div variants={container}
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
                <motion.p variants={fade}> Reach out to me for any designs or developer jobs and ideas. 
                I am a professional with amazing skills.</motion.p>
                <motion.button variants={fade}> Contact Us</motion.button>
                </Description>
                <Image>
                    <motion.img  variants={photoAnim} src={home1} alt="guy with a camera"/>
                </Image>
            </About>
)
}

export default AboutSection;