import React from 'react'
import { UsedCarCard } from "..//mock/usedCarData";
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
import Vimg from '../assets/VmenuImg.png'
import '../index.css'
import { Link } from 'react-router-dom';
import { UsedCarVWrapper, UsedCarvInfo } from './usedCarVStyle';
const UsedCarV = () => {
    const carData = UsedCarCard.carList;
  return (
    <UsedCarVWrapper> 
        <UsedCarvInfo>
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
            <div className='VOrderCarDivRight'>
              <div className='VOrderCart'>
                {carData.slice(0, 8).map((value, key) => {
                  return (
                    <Link to={`/MotorsCar-details/${value.id}`}>
                      <div  className='Vcart' key={key}>
                        {/* <img src={img} alt="" /> */}
                        <div> <img src={Vimg} alt="" /></div>
                        <div className='VCartImg'>
                        </div>
                        <div className='VmenuBtn' >
                          <div className='VCartInfoDiv'>
                            <div className='VCartInfo' >
                              <div className='carName' >{value.car.name}</div>
                              <div className='carCompany'>{value.car.company}</div>
                            </div>
                          <div className='carCost'>{value.car.cost}</div>
                          </div>
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
        </UsedCarvInfo>
    </UsedCarVWrapper>
  )
}

export default UsedCarV
