import React from 'react'
import img from '../assets/mapImage.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Fotter from '../footer/fotter';
import { ContactWrapper } from './contactStyle';

const Contact = () => {
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
        <>
            <ContactWrapper>
                <div className='ContactData'>
                    <div className='Contactleft'>
                        <img src={img} alt="" />
                        <div  className='contactNumberDiv'>
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
        </>
    )
}

export default Contact
