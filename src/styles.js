import styled from 'styled-components';

export const About = styled.div`
min-height:90vh;
display: flex;
justify-content:space-between;
color:white;
padding:5rem;
align-items:center;`

export const Description = styled.div`
flex:1 ;
padding-right:5rem ;
z-index:2;
h2{
    font-weight:lighter ;
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
