import React, { useState } from "react";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
// Remove this import to avoid circular dependency
// import LandingPage from './LandingPage';

function LoginPage() {
  const navigate = useNavigate();

  const navigateToLanding = () => {
    navigate('/landing');
  }
  
  return (
    <div className="login_card">
      <div className="login_forms">
        <form>
          <h2>Login Page</h2>
          <label>Email Address: </label>
          <input type="text"></input>
          <label>Password: </label>
          <input type="password"></input>
          <button type="button" onClick={navigateToLanding}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;