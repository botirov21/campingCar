import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Check if there are no empty fields
    if (formData.username.trim() !== '' && formData.password.trim() !== '') {
      // Perform login logic here
      console.log('Logging in...', formData);
    } else {
      console.log('Please fill in all required fields');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
