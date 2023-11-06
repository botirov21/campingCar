import styled from "styled-components";
import img from "../assets/campingBackground.png"

export const CampingWrapper=styled.div`
background-image: url(${img});
height:380px;
background-size: cover;
.campingTitleDiv{
height:380px;
display: flex;
justify-content:center;
align-items: center;
}
.campingTitle{
display: flex;
flex-direction: column;
align-items: center;
}
.titlep{
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.camping{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const CampingLocation=styled.div`
display: grid;
grid-template-areas: 'a a a';
justify-content: center;
gap:20px;
grid-row-gap: 40px;
margin-top:80px;
padding-bottom: 80px;
`