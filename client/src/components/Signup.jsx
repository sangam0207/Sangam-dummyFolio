import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
const navigate=useNavigate();
  const { name, email, password } = formData;
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name: name,
        email: email,
        password: password
      });
      console.log('Signup successful:', response.data);
     // alert('signIn successful')
      setFormData({
        name: '',
        email: '',
        password: '',
      })
      navigate('/signSuccess');
     
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={HandleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
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
       
         <button type="submit">Sign Up</button>
        
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
