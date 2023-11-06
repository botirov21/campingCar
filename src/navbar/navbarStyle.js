import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
text-decoration: none;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const NavbarDiv=styled.div`
height: 60px;
display: flex;
align-items: center;
justify-content: center;

h1{
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.navbarElements{
width: 900px;
display: flex;
justify-content: center;
gap: 70px;
}
.navbarElement{
display:flex;
align-items:center;
gap: 5px;
}
.navbarRightEl{
display:flex;
gap: 40px;
}
.languangeBtn{
display: flex;
align-items: center;
gap: 5px;
background: none;
border: none;
}
`