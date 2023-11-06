import React from 'react'
import { CarsInfo, RentPrice, TuningWrapper, } from './tuningStyle'
import TunedCarImage from '../assets/tunedCar.jpg'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { TuningCard } from "..//mock/tuningCarData";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img2 from '../assets/compareImg1.png'
import img3 from '../assets/compareImg2.png'
import img4 from '../assets/compareImg3.png'
import '../index.css'
import Fotter from '../footer/fotter';
import { Link } from 'react-router-dom';
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

const Tuning = () => {
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
  const TuningData = TuningCard.carList;
  return (
    <div style={{ border: "solid black 3px" }}>

      <TuningWrapper>
        <div className='TuningTitleDiv'>
          <div className='TuningTitle'>
            <p className='titlep'>Home / Tuning</p>
            <h3 className='titleText'>Our ranges</h3>
            <h1 className='Tuning'>Tuning Car</h1>
          </div>
        </div>
        <RentPrice>
          <div className='carSelect'>
            <div className='carSelectleft' >
              <h3>Cost of car</h3>
            </div>
            <div className='carSelectRight' >
              <div>
                <h3>Item  25.156</h3>
              </div>
              <div className='carSlectRigtEnd'>
                <div>
                  <p className='sortBy'>Sort by</p>
                </div>
                <div  >
                  <TextField
                    size="small"
                    label="Select"
                    sx={{ width: 250 }}
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
                    sx={{ width: 100 }}
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
                <div className='buttonDiv' >
                  <button className='selectButton'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
                      <path d="M7 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55229 2.44772 8 3 8H7C7.55229 8 8 7.55229 8 7V3C8 2.44772 7.55229 2 7 2Z" fill="#373737" />
                      <path d="M14.895 2H10.895C10.3427 2 9.89502 2.44772 9.89502 3V7C9.89502 7.55229 10.3427 8 10.895 8H14.895C15.4473 8 15.895 7.55229 15.895 7V3C15.895 2.44772 15.4473 2 14.895 2Z" fill="#373737" />
                      <path d="M7 9.8H3C2.44772 9.8 2 10.2477 2 10.8V14.8C2 15.3523 2.44772 15.8 3 15.8H7C7.55229 15.8 8 15.3523 8 14.8V10.8C8 10.2477 7.55229 9.8 7 9.8Z" fill="#373737" />
                      <path d="M14.895 9.8H10.895C10.3427 9.8 9.89502 10.2477 9.89502 10.8V14.8C9.89502 15.3523 10.3427 15.8 10.895 15.8H14.895C15.4473 15.8 15.895 15.3523 15.895 14.8V10.8C15.895 10.2477 15.4473 9.8 14.895 9.8Z" fill="#373737" />
                    </svg>
                  </button>
                  <button className='selectButton2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 22 22" fill="none">
                      <path d="M3.66667 12.8333H5.5C6.00417 12.8333 6.41667 12.4208 6.41667 11.9167V10.0833C6.41667 9.57917 6.00417 9.16667 5.5 9.16667H3.66667C3.1625 9.16667 2.75 9.57917 2.75 10.0833V11.9167C2.75 12.4208 3.1625 12.8333 3.66667 12.8333ZM3.66667 17.4167H5.5C6.00417 17.4167 6.41667 17.0042 6.41667 16.5V14.6667C6.41667 14.1625 6.00417 13.75 5.5 13.75H3.66667C3.1625 13.75 2.75 14.1625 2.75 14.6667V16.5C2.75 17.0042 3.1625 17.4167 3.66667 17.4167ZM3.66667 8.25H5.5C6.00417 8.25 6.41667 7.8375 6.41667 7.33333V5.5C6.41667 4.99583 6.00417 4.58333 5.5 4.58333H3.66667C3.1625 4.58333 2.75 4.99583 2.75 5.5V7.33333C2.75 7.8375 3.1625 8.25 3.66667 8.25ZM8.25 12.8333H18.3333C18.8375 12.8333 19.25 12.4208 19.25 11.9167V10.0833C19.25 9.57917 18.8375 9.16667 18.3333 9.16667H8.25C7.74583 9.16667 7.33333 9.57917 7.33333 10.0833V11.9167C7.33333 12.4208 7.74583 12.8333 8.25 12.8333ZM8.25 17.4167H18.3333C18.8375 17.4167 19.25 17.0042 19.25 16.5V14.6667C19.25 14.1625 18.8375 13.75 18.3333 13.75H8.25C7.74583 13.75 7.33333 14.1625 7.33333 14.6667V16.5C7.33333 17.0042 7.74583 17.4167 8.25 17.4167ZM7.33333 5.5V7.33333C7.33333 7.8375 7.74583 8.25 8.25 8.25H18.3333C18.8375 8.25 19.25 7.8375 19.25 7.33333V5.5C19.25 4.99583 18.8375 4.58333 18.3333 4.58333H8.25C7.74583 4.58333 7.33333 4.99583 7.33333 5.5Z" fill="#373737" fill-opacity="0.4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RentPrice>
        <CarsInfo>
          {/* <div style={{display: "flex", justifyContent: "center"}} > */}
          <div className='OrderCarDiv'>
            <div className='OrderCarDivLeft'>
              <div className='InputDiv'>
                <div className='Inputp'>
                  <p className='FormP'>from</p>
                  <input type="text" />
                </div>
                <div>
                  <p className='FormP'>to</p>
                  <input type="text" />
                </div>
              </div>
              <div className='optionsDiv'>
                <div>
                  <Accordion className='options'>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        Brand
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className='checkboxDiv'>
                          <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>Aidal</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>Knal</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>escape</p></div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className='optionsDiv'>
                <div>
                  <Accordion className='options'>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        Company
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>Aidal</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>escape</p></div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className='optionsDiv'>
                <div>
                  <Accordion className='options'>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        License type
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>1 year</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>2 year</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>1.5year</p></div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className='optionsDiv'>
                <div>
                  <Accordion className='options'>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        Number of travelers
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>2</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>3-4</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>5+</p></div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className='optionsDiv'>
                <div>
                  <Accordion className='options'>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        Location
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>Seoul</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>Korea</p></div>
                        </div>
                        <div className='checkboxDiv'>
                          <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                          <div><p>Pusan</p></div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className='cancelBtn'>
                <Stack direction="row" spacing={2}>
                  <Button style={{ background: "#FF7A00", borderRadius: "20px" }} variant="contained" color="success">
                    Cancel
                  </Button>
                  <Button style={{ background: "#006DAB", borderRadius: "20px" }} variant="contained" color="success">
                    Search
                  </Button>
                </Stack>
              </div>
              <div className='compare'>Compare</div>
              <div className='compareDiv'>
                <div > <img style={{ width: "75px", height: "90" }} src={img2} alt="" /></div>
                <div className='imgStyle' > <img style={{ width: "75px", height: "90" }} src={img3} alt="" /></div>
                <div className='imgStyle' > <img style={{ width: "75px", height: "90" }} src={img4} alt="" /></div>
              </div>
            </div>
            <div className='OrderCarDivRight'>
              <div className='OrderCart'>
                {TuningData.map((value, key) => {
                  return (
                    <Link to={`/MotorsCar-details/${value.id}`}>
                      <div className='cart' key={key}>
                        <img style={{ width: '200px', height: '130px' }} src={TunedCarImage} alt="" />
                        <div className='carName' >{value.car.name}</div>
                        <div className='carCompany'>{value.car.company}</div>
                        <div className='carCost'>{value.car.cost}</div>
                        <div >
                          <Stack direction="row" spacing={2}>
                            <Button className='orderBtn' variant="outlined">Order</Button>
                            <Button className='orderBtn' variant="outlined">Compare</Button>
                          </Stack>
                        </div>
                      </div>
                    </Link>
                  )
                }
                )}
              </div>
            </div>
          </div>
        </CarsInfo>
        <Fotter />
      </TuningWrapper>
    </div>

  )
}

export default Tuning
