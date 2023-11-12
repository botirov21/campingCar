import styled from "styled-components";

export const FooterDiv=styled.div`
height: 350px;
background-color: var(--blue, #006DAB);
.FooterWrapper{
display:flex;
justify-content: center;
gap:250px;
padding-top:50px;
}
h1{
color: #FFF;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{
color: #FFF;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-top:20px;
}
p{
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 25px;
}
.fotterLogo{
display:flex;
gap:10px;
margin-top:20px;
}
`