import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Netflix Logo" />
      
      <div className="login-form">
        <h1>{signState}</h1>
        
        <form>
          {signState === "Sign Up" && (
            <input type="text" placeholder="Your Name" />
          )}
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit">{signState}</button>
          
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

