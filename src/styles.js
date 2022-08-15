import styled from 'styled-components';
import {motion} from "framer-motion"

export const About = styled(motion.div)`
min-height:90vh;
display: flex;
justify-content:space-between;
color:white;
padding:5rem 10rem;
align-items:center;
    @media (max-width:1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`

export const Description = styled.div`
flex:1 ;
padding-right:5rem ;
z-index:2;
h2{
    font-weight:lighter ;
}
    @media(max-width:1300px){
        padding: 0;
        button{
            margin: 2rem 0 5rem 0;
        }
    }
`

export const Image = styled.div`
z-index:2;
 flex:1;
 overflow:hidden ;
 img{
     width:100%;
     height:80vh ;
     object-fit:cover ;
 }
 `

export const Hide = styled.div`
 overflow:hidden;`
