import styled from "styled-components";
import img from "../assets/motorBackground.png"
export const UsedCarWrapper=styled.div`
background-image: url(${img});
height:380px;
background-size: cover;
.UsedCarTitle{
display: flex;
flex-direction: column;
align-items: center;
}
.UsedCarTitleDiv{
height:380px;
display: flex;
justify-content:center;
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
.titleText{
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.UsedCar{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const RentPrice=styled.div`
margin-top: 20px;
.carSelect{
display: flex;
justify-content: center;
gap:30px;
}
.carSelectRight{
display: flex;
align-items : center;
gap: 380px;
margin-left: 10px;

}

.carSelectleft{
display: flex;
align-items : center; 
padding-right:  0px;
width: 300px;
border-bottom: 1px solid  rgba(55, 55, 55, 0.50);

}
.selectButton{
width: 50px;
height: 40px;
align-items:center;
background: none;
border: solid 1px  rgba(55, 55, 55, 0.50);
border-top-left-radius:5px;
border-bottom-left-radius:5px;
}
.selectButton2{
width: 50px;
height: 40px;
align-items:center;
background: none;
border: solid 1px  rgba(55, 55, 55, 0.50);
border-top-right-radius:5px;
border-bottom-right-radius:5px;
}
.buttonDiv{
display: flex;
align-items : center;   
}
.carSlectRigtEnd{
display: flex;
align-items : center; 
justify-content:center;
gap: 20px;
}
.sortBy{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}
`
export const CarsInfo=styled.div`
margin-top:20px;
padding-bottom:300px;
.OrderCarDiv{
display: flex;  
justify-content: center;
gap:100px;
}
.OrderCarDivLeft{
display: flex;
flex-direction: column;
/* border-bottom: 1px solid  rgba(55, 55, 55, 0.50); */
}
.OrderCarDivRight{
display: flex;
display: grid;
grid-template-areas: "a a a a";
margin-top:20px;
padding-right:820px
}

.InputDiv{
display: flex;
align-items : center;
gap: 40px;
padding-left:10%;
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
margin-top:0px;
}

.cart{
padding:10px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
border-radius:10px;
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
.OrderCart{
width: 230px;
height: 307px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
display:grid;
grid-template-areas: " a a a a";
gap: 50px;
border-radius:10px;
}
.orderBtn{
border-radius: 10px;
width: 95px;
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

