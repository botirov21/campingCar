import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QaWrapper } from './qaSectionStyle';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Fotter from '../footer/fotter';

const QaSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dovp6dg', 'template_dvri1zr', form.current, 'fBmv9ocdgg6Mhdbeg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <>
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
                        <input className='InputDiv' type="text" name="user_name" placeholder='Your Name'/>
                        <input className='InputDiv' type="email" name="user_email" placeholder='Your Email'/>
                        <textarea  className='questionDiv' name="message" placeholder='Your Question' />
                        <input className='SendBtn'  type="submit" value="send" />
                    </form>
                </div>
            </div>
        </QaWrapper>
        <Fotter />
        </>
    )
}

export default QaSection
