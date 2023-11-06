import styled from "styled-components";
import img from "../assets/motorBackground.png"
import img2 from "../assets/comfortImage.png"


export const CarDetailsWrapper=styled.div`
background-image: url(${img});
height:380px;
background-size: cover;
h1{
    color:white;
}
.DetailsTitle{
height:380px;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
}
`
export const DetailedInfo=styled.div`
margin-top:4px;
.InfoCard{
width: 600px;
height: 360px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding-top:30px;
}
.carCost{
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
padding-right:40px;

}
.carName{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 26px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
}
.CardTitle{
display: flex;
justify-content:space-between;
}
.aidDiv{
border-bottom: solid rgba(55, 55, 55, 0.30) 1px;
margin-right: 40px ;
padding-bottom: 5px;
}
p{
color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.companyDiv{
display:flex;
justify-content: space-between;
width: 65%;
margin-top:15px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.peopleDiv{
display:flex;
justify-content: space-between;
width: 65%;
margin-top:10px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.licenseDiv{
display:flex;
justify-content: space-between;
width: 65%;
margin-top:10px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.comfortWrapper{
margin-top: 50px;
display: flex;
align-items: center;
justify-content:space-between;
padding-left: 100px;
height:477px;
}
.ComfortDiv{
width: 533px;
height: 169px;
flex-shrink: 0;
    }
p{
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
padding-top: 20px;
}
.Comfort{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 45px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.comfortWrapper2{
display: flex;
align-items: center;
justify-content:space-between;
height:477px;
padding-right: 100px;
}
.ComfortDiv2{
width: 533px;
height: 169px;
flex-shrink: 0;
}
p{
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
padding-top: 20px;
}
.Comfort2{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.comfortWrapper3{
display: flex;
align-items: center;
justify-content:space-between;
padding-left: 100px;
height:477px;
}

`