import styled from "@emotion/styled";

export const ReviewsWrapper=styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding-bottom:50px;
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