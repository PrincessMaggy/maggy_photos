import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    padding:0 ;
    margin:0 ;
    box-sizing:border-box ;
}
body{
    background: #1b1b1b;
    font-family:'Inter', sans-serif ;
}
button{
 font-size:1.1rem ;
 font-weight:bold ;
 padding:1rem 2rem;
 cursor:pointer ;
 font-family:'Inter', sans-serif ;
 border:3px solid #23d997;
 background:transparent;
 color:white ;
 transition: all 0.5s ease;
 &:hover{
     background-color:#23d997 ;
     color:white ;
 }
}
 h2{
     font-size:3rem;
     font-weight:lighter ;
 }
 h3{
    color:white;
 } 
 h4{
     font-weight:bold ;
 }
 span{
     font-weight:bold ;
     color: #23d997;
 }
 a{
     font-size:1.1rem ;
 }
 p{
     padding: 3rem 0rem;
     color: #ccc;
     font-size:1.4rem ;
     line-height:150% ;
 }

`


export default GlobalStyle;