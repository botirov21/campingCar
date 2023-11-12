import React from 'react'
import { AppBarDiv, CarDetailsWrapper, DetailedInfo } from './motorsDetailsStyle'
import { Link, useParams } from 'react-router-dom';
import { card } from '../mock/carsData';
import img from '../assets/detailCarImage.png';
import img2 from "../assets/comfortImage.png"
import img3 from "../assets/comfortImage2.png"
import img4 from "../assets/comfortImage3.png"
import img5 from "../assets/comfortImage4.png"
import img6 from "../assets/comfortImage5.png"
import Bounce from 'react-reveal/Bounce';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const MotorsDetails = () => {
  const { id } = useParams();
  const carDetail = card.carList;

  const openCarDetail = carDetail.find((item) => item.id === parseInt(id));
  return (
    <CarDetailsWrapper>
      <div className='DetailsTitle' >
        <div style={{ color: 'white' }} className='carName' >{openCarDetail.car.name}</div>
        <Stack style={{ marginTop: '30px' }} spacing={2} direction="row">
          <Button style={{ borderRadius: '5px' }} variant="contained">ADD TO CART</Button>
          <Button style={{ borderRadius: '5px', color: 'white', border: 'solid 1px white' }} variant="outlined">COMPARE</Button>
        </Stack>
      </div>
      <DetailedInfo>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', paddingRight: '60px' }}>
          <div style={{ paddingLeft: '0px' }}>
            <Bounce left>
              <img style={{ width: '626px', height: '381px' }} src={img} alt="" />
            </Bounce>
          </div>
          <div className='InfoCard'>
            <div style={{ paddingLeft: '30px', }}>
              <div className='CardTitle' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='carName' >{openCarDetail.car.name}</div>
                <div className='carCost'>{openCarDetail.car.cost}</div>
              </div>
              <div className='aidDiv'><p>aid</p></div>
              <div className='companyDiv'>
                <div><p>Company</p></div>
                <div>{openCarDetail.car.company}</div>
              </div>
              <div className='peopleDiv'>
                <div><p>People</p></div>
                <div>{openCarDetail.car.people}</div>
              </div>
              <div className='licenseDiv'>
                <div><p>License type</p></div>
                <div>{openCarDetail.car.license}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='comfortWrapper'>
          <div style={{ justifyContent: 'end' }} className='comfortLeft'>
            <div style={{ padding: '50px', marginTop: '70px', marginRight: '150px' }} className='pTitleDiv'>
              <h3 className='pTitle'>Comfort</h3>
              <p >L0orem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
            </div>
          </div>
          <div style={{ justifyContent: 'start' }} className='comfortRight'>
            <Bounce right>
              <img  src={img2} alt="" />
            </Bounce>
          </div>
        </div>
        <div className='comfortWrapper'>
          <div style={{ justifyContent: 'end' }} className='comfortLeft'>
            <Bounce left>
              <img src={img3} alt="" />
            </Bounce>
          </div>
          <div style={{ justifyContent: 'start' }} className='comfortRight'>
            <div style={{ paddingTop: '70px', marginLeft: '50px' }} className='pTitleDiv'>
              <h3 className='pTitle'>Comfortt</h3>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
            </div>
          </div>
        </div>
        <div className='comfortWrapper'>
          <div style={{ justifyContent: 'end' }} className='comfortLeft'>
            <div style={{ padding: '50px', marginTop: '40px', marginRight: '150px' }} className='pTitleDiv'>
              <h3 className='pTitle'>Comfort</h3>
              <p >L0orem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
            </div>
          </div>
          <div style={{ justifyContent: 'start' }} className='comfortRight'>
            <Bounce right>
              <img src={img4} alt="" />
            </Bounce>
          </div>
        </div>
        <div className='comfortWrapper'>
          <div style={{ justifyContent: 'end' }} className='comfortLeft'>
            <Bounce left>
              <img src={img5 } alt="" />
            </Bounce>
          </div>
          <div style={{ justifyContent: 'start' }} className='comfortRight'>
            <div style={{ marginTop: '90px', marginLeft: '50px' }} className='pTitleDiv'>
              <h3 className='pTitle'>Comfortt</h3>
              <p >Lorsem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
            </div>
          </div>
        </div>
        <div className='comfortWrapper'>
          <div style={{ justifyContent: 'end' }} className='comfortLeft'>
            <div style={{ padding: '50px', marginTop: '40px', marginRight: '150px' }} className='pTitleDiv'>
              <h3 className='pTitle'>Ventilated , Lit up</h3>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
              <Stack style={{ marginTop: '55px' }} spacing={2} direction="row">
                <Button style={{ borderRadius: '5px' }} variant="contained">ADD TO CART</Button>
                <Button style={{ borderRadius: '5px' }} variant="outlined">COMPARE</Button>
              </Stack>
            </div>
          </div>
          <div style={{ justifyContent: 'start' }} className='comfortRight'>
            <div>
              <Bounce right>
                <img src={img6} alt="" />
              </Bounce>
            </div>
          </div>
        </div>
      </DetailedInfo>
      <AppBarDiv>
        <div className='AppBarInfo'>
          <Link   to={`/item-reviews/${openCarDetail.id}`}>
            <div  className='barItem' >Item reviews</div>
          </Link>
          <Link to={`/qaSection/${openCarDetail.id}`}>
          <div  className='barItem'>Q&A</div>
          </Link>
          <Link  to={`/faqSection/${openCarDetail.id}`}>
          <div  className='barItem'>FAQ</div>
          </Link>
          <Link to={`/contact/${openCarDetail.id}`}>
            <div  className='barItem'>Contact</div>
          </Link>
        </div>
      </AppBarDiv>
    </CarDetailsWrapper>
  )
}

export default MotorsDetails
