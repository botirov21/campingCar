

import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import '../index.css'
import Fotter from '../footer/fotter';
import { useState } from 'react';
import { CarvanWrapper, Container } from './usedCarStyle';
import UsedCarController from './usedCarController';
import UsedCarSwitchControl from './usedCarSwitchController';
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




const Carvan = () => {
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
      <CarvanWrapper>
        <div className='UsedCarTitleDiv'>
          <div className='UsedCarTitle'>
            <p className='titlep'>Home / Used Car</p>
            <h3 className='titleText'>Our ranges</h3>
            <h1 className='usedCar'>Used Car</h1>
          </div>
        </div>
      </CarvanWrapper>
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
              <div style={{ borderBottom: '1px solid lightgray', padding: '10px', height: '60px' }}>
                <UsedCarController
                  onClick={(state) => {
                    setActive(state);
                  }}
                />
              </div>
            </div>
            <UsedCarSwitchControl active={active} />
          </div>
        </div>
      </Container>
      <Fotter />
    </div>
  )
}

export default Carvan
