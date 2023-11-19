import styled from "styled-components";
export const DetailsWrapper=styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 1175px;
.TopImages{
display:grid;
grid-template-areas: 'a a a a a a';
justify-content:center;
gap:10px;
margin-top:40px;
}
.LocationName{
width: 1226px;
border-bottom: solid 1px lightgray;
display: flex;
flex-direction: column;
gap:12px;
}
.ButtonDiv{
display: flex;
align-items:center;
gap:30px;
padding-bottom: 10px;
}
.btnStyle{
border-radius: 5px;
border: 1px solid var(--sariq, #FF7A00);
color: var(--sariq, #FF7A00);
width: 120px;
height: 25px;
flex-shrink: 0;
background: none;
}
.locationP{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
align-items: center;
}
.locationDiv{
display:flex;
gap:127px;
width: 1226px;
padding-top:18px;
}
.pDiv{
display: flex;
flex-direction: column;
gap: 18px;
}
.descriptionDiv{
width: 1226px;
padding-top:22px;
display: flex;
flex-direction: column;
gap: 10px;
}
h3{
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.map2 {
width: 1226px;
height: 552px;
flex-shrink: 0;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
border-style: solid;
border-width: medium;
border-color: #D8D8D8;
}
.App{
padding-top: 50px;
}
`