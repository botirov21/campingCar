import styled from "styled-components";
import img from "../assets/motorBackground.png"

export const CarDetailsWrapper=styled.div`
background-image: url(${img});
height:400px;
background-size: cover;
margin-top:60px;
.carTitile{
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h1{
    color:white;
}
.DetailsTitle{
height:400px;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
}
.swipeTop{
height: 49px;
background: rgba(0, 109, 171, 0.20);
margin-top:80px;
}
.swipeTab{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.swipeTab:hover{
background: var(--blue, #006DAB);
color: white;
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
display: flex;
justify-content: center;
height:500px;
gap: 0px;
}
.comfortRight{
display: flex;
flex: 1;
}
.comfortLeft{
display: flex;
flex: 1;
}
.pTitleDiv{
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
.pTitle{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 45px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

export const ReviewsWrapper=styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding-bottom:50px;
padding-right:50px;

.reviewsCart{
display: flex;
align-items:center;
border-bottom: solid 1px rgba(55, 55, 55, 0.15);
}
.ReviewsData{
display: flex;
flex-direction: column;
flex:4;
padding-right:10px;
gap:5px;
}
.ReviewsDataRight{
flex: 1;
}
.DataText{
width: 1000px;
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.reviewsFilter{
display:flex;
gap:20px;
margin-top: 40px;
}
.premium{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
width:1000px;
}
.premiumP{
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
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
.carBrand{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:5px;
}
`
export const QaWrapper=styled.div`
display: flex;
justify-content: center;
margin-bottom:80px;
padding-right:50px;

.qaData{
display: flex;
align-items:center;
gap:69px;
margin-top:20px;
}
.qaleft{
display: flex;
flex: 1;
}
.qaRight{
display: flex;
flex: 1;
}
.options{
background: none;
box-shadow: none;
border-radius: none;
border-bottom: 1px solid  rgba(55, 55, 55, 0.50);
width: 707px;
}
.Form{
display:flex;
flex-direction: column;
border:black solid 1px;
width: 450px;
height: 362px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding:20px;      
margin-top:30px;
}
.InputDiv{
height: 50px;
margin-top:10px;
border-radius: 8px;
border: 1px solid #e8eced;
background: #e8eced;
padding:10px;
}
label{
color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
margin-left: 120px;

}
.questionDiv{
height: 120px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #e8eced;
background: #e8eced;
margin-top:10px;
padding:10px;
}
.sendBtn{
width: 390px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
margin-top:30px;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}

.SendBtn{
border-radius: 10px;
background: var(--blue, #006DAB);
width: 410px;
height: 50px;
flex-shrink: 0;
margin-top:20px;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 18px */
}
`
export const FaqWrapper=styled.div`
display: flex;
justify-content: center;
margin-bottom:80px;
padding-right:35px;

.qaData{
display: flex;
align-items:center;
gap:69px;
margin-top:20px;
}
.qaleft{
display: flex;
flex: 1;
}
.qaRight{
display: flex;
flex: 1;
}
.options{
border-radius: 5px;
margin-top:30px;
width: 707px;
}
.Form{
display:flex;
flex-direction: column;
border:black solid 1px;
width: 450px;
height: 362px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding:20px;      
margin-top:30px;
}
.InputDiv{
height: 50px;
margin-top:10px;
border-radius: 8px;
border: 1px solid #e8eced;
background: #e8eced;
padding:10px;
}
label{
color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
margin-left: 80px;

}
.questionDiv{
height: 120px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #e8eced;
background: #e8eced;
margin-top:10px;
padding:10px;
}
.sendBtn{
width: 390px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
margin-top:30px;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}

.SendBtn{
border-radius: 10px;
background: var(--blue, #006DAB);
width: 410px;
height: 50px;
flex-shrink: 0;
margin-top:20px;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 18px */
}
`
export const ContactWrapper=styled.div`

display: flex;
justify-content: center;
margin-bottom:80px;
padding-right:20px;
.ContactData{
display: flex;
align-items:center;
gap:70px;
margin-top:20px;
}
.Contactleft{
display: flex;
flex-direction:column;
flex: 1;

}
.ContactRight{
display: flex;
flex: 1;
}
.contactNumberDiv{
display:flex;
justify-content:space-between;
padding-top:20px;
gap:20px;
}
.contactNumber{
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
width: 340px;
height: 109px;
flex-shrink: 0;
padding:10px;
padding-left:40px;
}
.Form{
display:flex;
flex-direction: column;
border:black solid 1px;
width: 450px;
height: 362px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding:20px;      
margin-top:30px;
}
.InputDiv{
height: 50px;
margin-top:10px;
border-radius: 8px;
border: 1px solid #e8eced;
background: #e8eced;
padding:10px;
}
label{
color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
margin-left: 80px;

}
.questionDiv{
height: 120px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #e8eced;
background: #e8eced;
margin-top:10px;
padding:10px;
}
.sendBtn{
width: 390px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
margin-top:30px;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}

.SendBtn{
border-radius: 10px;
background: var(--blue, #006DAB);
width: 410px;
height: 50px;
flex-shrink: 0;
margin-top:20px;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 18px */
}
`