import React, { useState } from 'react';
import '../index.css'; // Import your CSS file for styling

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
          <label placeholder='Email'>Email:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <span className="error-message">{formErrors.username}</span>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error-message">{formErrors.password}</span>
        </div>
        <div className="form-group">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
