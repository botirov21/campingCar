import styled from "styled-components";

export const QaWrapper=styled.div`
display: flex;
justify-content: center;
margin-bottom:80px;
.qaData{
display: flex;
align-items:center;
gap:70px;
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