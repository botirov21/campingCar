import React, { useState } from 'react';
import '../index.css'; // Import your CSS file for styling
import { Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import img from '../assets/naver.png'
import img2 from '../assets/google.png'
import img3 from '../assets/kakao.png'


const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: value.trim() === '' ? `${name} is required` : '',
        });
    };

    const handleLogin = () => {
        if (!formErrors.username && !formErrors.password) {
            console.log('Logging in...', formData);
        } else {
            console.log('Please fill in all required fields');
        }
    };

    return (
        <div className="login-container">
            <h2>Sign in</h2>
            <form>
                <div className="form-group">
                    <label placeholder='email' >Email:</label>
                    <input className='LoginInput'
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <span className="error-message">{formErrors.username}</span>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input className='LoginInput'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <span className="error-message">{formErrors.password}</span>
                </div>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Keep me logged in"
                />
                <div className="form-group">
                    <Link to='home'>
                        <button className='Loginbutton' type="button" onClick={handleLogin}>
                            Login
                        </button>
                    </Link>
                </div>
                <div className='ORdiv'>
                    <div className='Orline'></div>
                    <p>OR</p>
                    <div className='Orline'></div>
                </div>
                <div className='ImagesWraper'>
                    <div className='naverDiv'> <img src={img} alt="" /> </div>
                    <div className='googleDiv'> <img src={img2} alt="" /></div>
                    <div className='kakoDiv'> <img src={img3} alt="" /></div>
                </div>
                <button className='createButton'>CREATE ACCOUNT</button>
            </form>
        </div>
    );
};

export default LoginPage;
