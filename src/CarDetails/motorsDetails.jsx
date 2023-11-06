import React from 'react'
import { CarDetailsWrapper, DetailedInfo } from './motorsDetailsStyle'
import { useParams } from 'react-router-dom';
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
          <Button style={{ borderRadius: '5px', color: 'white', border: 'solid 1px white'}} variant="outlined">COMPARE</Button>
        </Stack>
      </div>
      <DetailedInfo>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', paddingRight:'60px' }}>
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
          <div className='ComfortDiv'>
            <h3 className='Comfort'>Comfort</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
          </div>
          <div>
            <Bounce right>
              <img style={{ width: '760px', height: '477px' }} src={img2} alt="" />
            </Bounce>
          </div>
        </div>
        <div className='comfortWrapper2'>
          <div>
            <Bounce left>
              <img style={{ width: '760px', height: '477px' }} src={img3} alt="" />
            </Bounce>
          </div>
          <div className='ComfortDiv2'>
            <h3 className='Comfort2'>Tidying away is child’s play!</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
          </div>
        </div>
        <div className='comfortWrapper3'>
          <div className='ComfortDiv'>
            <h3 className='Comfort'>Ventilated , Lit up</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
          </div>
          <div>
            <Bounce right>
              <img style={{ width: '760px', height: '477px' }} src={img4} alt="" />
            </Bounce>
          </div>
        </div>
        <div className='comfortWrapper2'>
          <div>
            <Bounce left>
              <img style={{ width: '760px', height: '477px' }} src={img5} alt="" />
            </Bounce>
          </div>
          <div className='ComfortDiv2'>
            <h3 className='Comfort2'>Easy access</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
          </div>
        </div>
        <div className='comfortWrapper3'>
          <div className='ComfortDiv'>
            <h3 className='Comfort'>Ventilated , Lit up</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
            <Stack style={{ marginTop: '55px' }} spacing={2} direction="row">
              <Button style={{ borderRadius: '5px' }} variant="contained">ADD TO CART</Button>
              <Button style={{ borderRadius: '5px' }} variant="outlined">COMPARE</Button>
            </Stack>
          </div>
          <div>
            <Bounce right>
              <img style={{ width: '760px', height: '477px' }} src={img6} alt="" />
            </Bounce>
          </div>
        </div>
      </DetailedInfo>
    </CarDetailsWrapper>
  )
}

export default MotorsDetails
