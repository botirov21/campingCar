import React from 'react'
import { CarDetailsWrapper, ContactWrapper, DetailedInfo, FaqWrapper, QaWrapper, ReviewsWrapper } from './motorsDetailsStyle'
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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MenuItem, TextField } from '@mui/material';
import Reviewsimg from '../assets/reviewsImage.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Fotter from '../footer/fotter';
import KakaoMap from '../kakaoMap/map';

const names = [
  'Best',
  'Medium',
  'Low',
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const MotorsDetails = () => {

  const { id } = useParams();
  const carDetail = card.carList;
  const openCarDetail = carDetail.find((item) => item.id === parseInt(id));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [personName, setPersonName] = React.useState([]);

  const handleName = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dovp6dg', 'template_06fughk', form.current, 'fBmv9ocdgg6Mhdbeg')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <CarDetailsWrapper>
      <div className='DetailsTitle' >
        <div style={{ color: 'white' }} className='carTitile' >{openCarDetail.car.name}</div>
        <Stack style={{ marginTop: '30px' }} spacing={2} direction="row">
          <Button  sx={{ zIndex: 'modal' }} style={{ borderRadius: '5px' }} variant="contained">ADD TO CART</Button>
          <Button style={{ borderRadius: '5px', color: 'white', border: 'solid 1px white' }} variant="outlined">COMPARE</Button>
        </Stack>
      </div>
      <DetailedInfo>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', paddingRight: '60px' }}>
          <div style={{position: 'relative'}}>
            <Bounce left>
              <img style={{ width: '626px', height: '381px' }} src={img} alt="" />
            </Bounce>
          </div>
          <div className='InfoCard'>
            <div style={{ paddingLeft: '30px',}}>
              <div className='CardTitle' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='carName' >{openCarDetail.car.name}</div>
                <div className='carCost'>{openCarDetail.car.cost}</div>
              </div>
              <div className='aidDiv'><p>aid</p></div>
              <div className='companyDiv'>
                <div><p>Company</p></div>
                <div style={{paddingTop: 22}}>{openCarDetail.car.company}</div>
              </div>
              <div className='peopleDiv'>
                <div><p>People</p></div>
                <div style={{paddingTop: 22}}>{openCarDetail.car.people}</div>
              </div>
              <div className='licenseDiv'>
                <div><p>License type</p></div>
                <div style={{paddingTop: 22}}>{openCarDetail.car.license}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop: 60}}  className='comfortWrapper'>
          <div style={{ justifyContent: 'end' }} className='comfortLeft'>
            <div style={{ padding: '50px', marginTop: '70px', marginRight: '150px' }} className='pTitleDiv'>
              <h3 className='pTitle'>Comfort</h3>
              <p >L0orem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.x</p>
            </div>
          </div>
          <div style={{ justifyContent: 'start' }} className='comfortRight'>
            <Bounce right>
              <img src={img2} alt="" />
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
              <h3 className='pTitle'>Comfort</h3>
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
              <img src={img5} alt="" />
            </Bounce>
          </div>
          <div style={{ justifyContent: 'start' }} className='comfortRight'>
            <div style={{ marginTop: '90px', marginLeft: '50px' }} className='pTitleDiv'>
              <h3 className='pTitle'>Comfort</h3>
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
      <div className='swipeTop' >
        <Box sx={{ width: '100%',  marginTop: 10 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className='swipeTab' style={{ marginLeft: 120 }} label="Item Reviews" {...a11yProps(0)} />
              <Tab className='swipeTab' label="Q&A" {...a11yProps(1)} />
              <Tab className='swipeTab' label="FAQ" {...a11yProps(2)} />
              <Tab className='swipeTab' label="Contact" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <ReviewsWrapper>
              <div className='reviewsFilter'>
                <div style={{ display: 'flex', gap: '20px' }} className='premium' >Premium Review <p className='premiumP'>35</p></div>
                <div>
                  <TextField
                    size="small"
                    label="Select"
                    sx={{ width: 200 }}
                    select
                    value={personName}
                    onChange={handleName}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              {carDetail.slice(0, 6).map((value, key) => (
                <div key={key}>
                  <div >
                    <div className='reviewsCart'>
                      <div> <img src={Reviewsimg} alt="" /></div>
                      <div className='ReviewsData'>
                        <div className='carName' >{value.car.name}</div>
                        <div className='carBrand' >{value.car.company}</div>
                        <div><p className='DataText'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p></div>
                      </div>
                      <div className='ReviewsDataRight'>
                        <div style={{ display: 'flex' }}> <p>ID:</p>{value.id}</div>
                        <div style={{ display: 'flex' }}> <p>Data:</p>{value.car.date}</div>
                        <div style={{ display: 'flex' }}> <p>Views: 135</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ReviewsWrapper>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <QaWrapper>
              <div className='qaData'>
                <div className='qaleft'>
                  <div>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>

                </div>
                <div className='qaRight'>
                  <form className='Form' ref={form} onSubmit={sendEmail}>
                    <label>Send a question</label>
                    <input className='InputDiv' type="text" name="user_name" placeholder='Your Name' />
                    <input className='InputDiv' type="email" name="user_email" placeholder='Your Email' />
                    <textarea className='questionDiv' name="message" placeholder='Your Question' />
                    <input className='sendBtn ' type="submit" value="send" />
                  </form>
                </div>
              </div>
            </QaWrapper>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <FaqWrapper>
              <div className='qaData'>
                <div className='qaleft'>
                  <div>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <div >
                            <h3>Frequently asked questions </h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>
                          <div >
                            <h3>Frequently asked questions </h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <div >
                            <h3>Frequently asked questions </h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>
                          <div >
                            <h3>Frequently asked questions </h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className='options'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <div >
                            <h3>Frequently asked questions </h3>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>

                </div>
                <div className='qaRight'>
                  <form className='Form' ref={form} onSubmit={sendEmail}>
                    <label>Have you got a questions</label>
                    <input className='InputDiv' type="text" name="user_name" placeholder='Your Name' />
                    <input className='InputDiv' type="email" name="user_email" placeholder='Your Email' />
                    <textarea className='questionDiv' name="message" placeholder='Your Question' />
                    <input className='SendBtn' type="submit" value="send" />
                  </form>
                </div>
              </div>
            </FaqWrapper>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <ContactWrapper>
              <div className='ContactData'>
                <div className='Contactleft'>
                  <div style={{ width: 707, height: 278 }}>
                    <KakaoMap />
                  </div>
                  <div className='contactNumberDiv'>
                    <div className='contactNumber'>
                      <p>Phone number:</p>
                      <h3>+7 237 181 181</h3>
                      <h3> +7 210 181 191</h3>
                    </div>
                    <div className='contactNumber'>
                      <p>E-mail:</p>
                      <h3>logo.uz</h3>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className='ContactRight'>
                  <form className='Form' ref={form} onSubmit={sendEmail}>
                    <label>Have you got a question</label>
                    <input className='InputDiv' type="text" name="user_name" placeholder='Your Name' />
                    <input className='InputDiv' type="email" name="user_email" placeholder='Your Email' />
                    <textarea className='questionDiv' name="message" placeholder='Your Question' />
                    <input className='SendBtn' type="submit" value="send" />
                  </form>
                </div>
              </div>
            </ContactWrapper>
            <Fotter />
          </CustomTabPanel>
        </Box>
      </div>
    </CarDetailsWrapper>
  )
}

export default MotorsDetails
