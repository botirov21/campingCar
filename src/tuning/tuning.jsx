import React from 'react'
// import img from '../assets/carImage.png'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
// import { card } from "..//mock/carsData";
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import img2 from '../assets/compareImg1.png'
// import img3 from '../assets/compareImg2.png'
// import img4 from '../assets/compareImg3.png'
import '../index.css'
import Fotter from '../footer/fotter';
// import { Link } from 'react-router-dom';
import TuningController from './tuningController';
import { useState } from 'react';
import TuningSwitchControl from './tuningSwitchControl';
import { Container, TuningWrapper } from './tuningStyle';
const names = [
  'Kia',
  'BMW',
  'GM',
];
const nums = [
  '1',
  '2',
  '3',
];




const Motor = () => {
  const [active, setActive] = useState(true);
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [num, setNum] = React.useState('');

  const handleChangeNum = (event) => {
    setNum(event.target.value);
  };
  return (
    <div>

      <TuningWrapper>
        <div className='TuningTitleDiv'>
          <div className='TuningTitle'>
            <p className='titlep'>Home / Tuning</p>
            <h3 className='titleText'>Our ranges</h3>
            <h1 className='Tuning'>Tuning</h1>
          </div>
        </div>
      </TuningWrapper>
      <Container>
        <div >
          <div>
            <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }} >
              <div className='carSelect'>
                <div className='carSelectleft' >
                  <h3>Cost of car</h3>
                </div>
                <div className='carSelectRight' >
                  <div>
                    <h3 className='ItemDiv'>Item <span  style={{color: '#006DAB'}}>25.156</span> </h3>
                  </div>
                  <div className='carSlectRigtEnd'>
                    <div>
                      <p className='sortBy'>Sort by</p>
                    </div>
                    <div style={{ paddingBottom: '10px' }} >
                      <TextField
                        size="small"
                        label="Select"
                        sx={{ width: 227 }}
                        select
                        value={personName}
                        onChange={handleChange}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div>
                      <TextField
                        size="small"
                        label="Select"
                        sx={{ width: 90 }}
                        select
                        value={num}
                        onChange={handleChangeNum}
                      >
                        {nums.map((num) => (
                          <MenuItem key={num} value={num}>
                            {num}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ borderBottom: '1px solid lightgray', padding: '10px', height: '60px'}}>
               <TuningController
                  onClick={(state) => {
                   setActive(state);
                  }}
                />
              </div>
            </div>
            <TuningSwitchControl active={active} />
            
          </div>
        </div>
      </Container>
      <Fotter />
    </div>

  )
}

export default Motor
