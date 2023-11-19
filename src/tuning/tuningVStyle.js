import styled from "styled-components"
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
text-decoration:none;
`
export const  TuningVWrapper=styled.div`
margin-top:30px;
height:1800px;
`
export const VTuningInfo=styled.div`
display: flex;
justify-content: space-between;
.OrderCarDiv{
display: flex;  
justify-content: center;
gap:115px;
}
.OrderCarDivLeft{
display: flex;
flex-direction: column;
/* border-bottom: 1px solid  rgba(55, 55, 55, 0.50); */
}
.VOrderCarDivRight{
display: flex;
padding-top:760px;
}

.InputDiv{
display: flex;
align-items : center;
gap: 40px;
padding-left:13%;
}
input{
width: 91px;
height: 36px;
flex-shrink: 0;
/* border: 1px solid  rgba(55, 55, 55, 0.50); */
border-radius:15px; 
}
.FormP{
margin-bottom:2px;
}   
.carName{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.carCompany{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:5px;
}
.carCost{
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:18px;
}
.VOrderCart{
width: 955px;
height: 180px;
justify-content: center;
align-items: center;
border-radius: 20px;
background: #FFF;
display:flex;
flex-direction: column;
gap: 50px;
border-radius:10px;
}
.Vcart{
padding:10px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
border-radius:10px;
display: flex;
gap:20px;
align-items: center;
}
.VCartImg{
flex: 1;
}
.VmenuBtn{
flex: 1;
display:flex;
flex-direction: column;
justify-content: end;
height:120px;
}
.VCartInfoDiv{
display:flex;
align-items: center;
justify-content:space-between;
}
.VCartInfo{
display: flex;
flex-direction:column;
gap:5px;
justify-content: start;
}

.orderBtn{
border-radius: 10px;
width: 291px;
height: 35px;
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:21px;
padding:10px
}
.options{
width:250px;
background: none;
box-shadow: none;
border-radius: none;
border-bottom: 1px solid  rgba(55, 55, 55, 0.50);
}
.optionsDiv{
margin-top: 50px;
padding-left:10%;
}
.checkboxDiv{
display:flex;
align-items: center;
padding:10px;
}
.cancelBtn{
margin-top: 50px;
padding-left:20%;   
}
.compareDiv{
display: grid;
grid-template-areas: " a a a";
align-items: center;
gap:10px;
padding-left:10%;
}
.compare{
color: var(--blue, #006DAB);
font-family: Open Sans;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left:10%;
margin-top: 50px;
}
.imgStyle{
border-radius: 10px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat, #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
width: 75px;
height: 62px;
flex-shrink: 0;
}
`