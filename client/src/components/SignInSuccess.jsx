import React from 'react'
import { Link } from 'react-router-dom';
import "../signInSucces.css";
function SignInSuccess() {
  return (
    
        <div className="container">
          <div className="message">
            You are successfully signed in. To proceed, please log in.
          </div>
         <Link to="/login"> <button className="button">Login</button></Link>
        </div>
      );
}

export default SignInSuccess