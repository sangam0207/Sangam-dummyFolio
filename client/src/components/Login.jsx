import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  axios.defaults.withCredentials = true;
  const navigate=useNavigate();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   // console.log('submit')
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      });
      console.log('Login successful:', response.data);
     // alert('signIn successful')
      setFormData({
        email: '',
        password: '',
      })
      navigate('/DashBoard')
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
       <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/register">Sign Up</Link></p>
    </div>
  );
};

export default Login;
