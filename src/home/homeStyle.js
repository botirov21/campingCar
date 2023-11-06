import styled from "styled-components";
import img3 from '../assets/vidio1.png'
import img4 from '../assets/vidio2.png'
import img5 from '../assets/vidio3.png'
import img6 from '../assets/vidio4.png'
export const HomeDiv=styled.div`
.carusel-img{
height: 525px;
flex-shrink: 0;
}
.cardImage{    
width: 290px;
height: 167px;
flex-shrink: 0;
display: flex;
text-align:center;
}
.card{
display: flex;
text-align: center;
}
.cardImageDiv{
width:400px;
display: flex;
justify-content:center;
}
.multi-caruselTitle{
display: flex;
justify-content:center;
}
.cardP{
display: flex;
justify-content: center;
gap: 5px;
margin-top:20px;
}
`
export const VidioDiv=styled.div`
height:600px;
.vidioTitle{
display: flex;
justify-content: center;
margin-top:50px;
}
h1{
border-bottom: solid #FF7A00 2px;
}
.vidioGrid{
display:grid;
grid-template-areas: 'a a a a';
justify-content: center;
gap:20px;
margin-top:50px;

}
.imgSize{
width: 232px;
height: 232px;
flex-shrink: 0;
}
.popButton{
border: none;
background: none;
}

`

export const VidioLink=styled.div`
width: 271px;
height:271px;
flex-shrink: 0;
display:flex;
justify-content:center;
align-items: center;
background-image: url(${img3});
background-size: cover;
.playImg{
width: 41px;
height: 42px;
}
.imgSize{
border: 1px red solid;
background-color: lightgray
}
.PlayButton{
width: 58px;
height: 58px;
border-radius:25px;
border: none;
background: rgba(255,255,255,0.5)
}
`
export const VidioLink2=styled.div`
width: 271px;
height:271px;
flex-shrink: 0;
display:flex;
justify-content:center;
align-items: center;
background-image: url(${img4});
background-size: cover;
.playImg{
width: 41px;
height: 42px;
}
.imgSize{
border: 1px red solid;
background-color: lightgray
}
.PlayButton{
width: 58px;
height: 58px;
border-radius:25px;
border: none;
background: rgba(255,255,255,0.5)
}
`
export const VidioLink3=styled.div`
width: 271px;
height:271px;
flex-shrink: 0;
display:flex;
justify-content:center;
align-items: center;
background-image: url(${img5});
background-size: cover;
.playImg{
width: 41px;
height: 42px;
}
.imgSize{
border: 1px red solid;
background-color: lightgray
}
.PlayButton{
width: 58px;
height: 58px;
border-radius:25px;
border: none;
background: rgba(255,255,255,0.5)
}
`
export const VidioLink4=styled.div`
width: 271px;
height:271px;
flex-shrink: 0;
display:flex;
justify-content:center;
align-items: center;
background-image: url(${img6});
background-size: cover;
.playImg{
width: 41px;
height: 42px;
}
.imgSize{
border: 1px red solid;
background-color: lightgray
}
.PlayButton{
width: 58px;
height: 58px;
border-radius:25px;
border: none;
background: rgba(255,255,255,0.5)
}
`
export const BlogDiv=styled.div`
height:670px;
margin-top:200px;
.vidioTitle{    
display: flex;
justify-content: center;
margin-top: 80px;
}
.popButton{
border: none;
background: none;
}
h2{
border-bottom: solid #FF7A00 2px;
}
.blogWrapper{
display: flex;
justify-content: center; 
gap:20px;
}
.blogVido{
display:grid;
grid-template-areas: 'a a a ';
justify-content: center;
gap:20px;
margin-top:50px; 
}
.blogP{
width: 380px;
height: 107px;
flex-shrink: 0;
}
h5{
margin-top:35px;
color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
h1{
color: #000;
font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top:50px;
}
p{
margin-top:10px;
}

`
export const BlogVidioLink=styled.div`
width: 241px;
height:241px;
flex-shrink: 0;
display:flex;
justify-content:center;
align-items: center;
background-image: url(${img3});
background-size: cover;
.playImg{
width: 41px;
height: 42px;
}
.imgSize{
border: 1px red solid;
background-color: lightgray
}
.PlayButton{
width: 58px;
height: 58px;
border-radius:25px;
border: none;
background: rgba(255,255,255,0.5)
}
`
export const BlogVidioLink2=styled.div`
width: 241px;
height:241px;
flex-shrink: 0;
display:flex;
justify-content:center;
align-items: center;
background-image: url(${img5});
background-size: cover;
.playImg{
width: 41px;
height: 42px;
}
.imgSize{
border: 1px red solid;
background-color: lightgray
}
.PlayButton{
width: 58px;
height: 58px;
border-radius:25px;
border: none;
background: rgba(255,255,255,0.5)
}
`
export const BlogVidioLink3=styled.div`
width: 241px;
height:241px;
flex-shrink: 0;
display:flex;
justify-content:center;
align-items: center;
background-image: url(${img6});
background-size: cover;
.playImg{
width: 41px;
height: 42px;
}
.imgSize{
border: 1px red solid;
background-color: lightgray
}
.PlayButton{
width: 58px;
height: 58px;
border-radius:25px;
border: none;
background: rgba(255,255,255,0.5)
}
`