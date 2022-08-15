import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import {motion} from "framer-motion";

import {useLocation} from "react-router-dom";

const Nav =()=>{
    const {pathname} = useLocation();
    return(
        
            <StyledNav>
                <h1><Link id="logo" to="/maggy_photos">Maggy Photos</Link></h1>
                <ul>
                    <li>
                        <Link to="/maggy_photos"> About Us</Link>
                        <Line transition={{duration:0.75}} initial={{width: "0%"}}
                        animate={{width: pathname === '/maggy_photos' ?"100%" : "0%"}}
                        />
                    </li>
                    <li>
                        <Link to="/work"> Our Work</Link>
                        <Line transition={{duration:0.75}} initial={{width: "0%"}}
                        animate={{width: pathname === '/work' ?"100%" : "0%"}}
                        />
                    </li>

                    <li>
                        <Link to="/contact"> Contact  Us</Link>
                        <Line transition={{duration:0.75}} initial={{width: "0%"}}
                        animate={{width: pathname === '/contact' ?"100%" : "0%"}}
                        />
                    </li>
                 </ul>
            </StyledNav>
    
    )


};

const StyledNav = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content: space-between;
align-items:center ;
padding:1rem 10rem ;
background:#282828 ;
position: fixed;
top: 0;
z-index: 10;
width: 100vw;
a{
    color:white ;
    text-decoration:none ;
}
ul{
    display: flex ;
    list-style: none;
}
#logo{
    font-size:1.5rem ;
    font-family:"Lobster", cursive ;
    font-weight:lighter ;
}
li{
    padding-left: 10rem;
    position:relative ;
}
@media(max-width:1300px) {
    flex-direction: column;
    padding:2rem 1rem;
    position: relative;
    #logo{
        display: inline-block;
      margin:2rem;
    }
    ul{
        justify-content: space-around;
        width: 100%;
        padding: 2rem;
        li{
            padding: 0;
        }
    }

}
`
const Line =styled(motion.div)`
    height:2px;
    background:#23d997;
    width:0%;
    margin-top:1px;
`


export default Nav;