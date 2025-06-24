import React, { useState } from "react";
import "../styles/LandingPage.css";
import { Box } from 'lucide-react'
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  return (
    <center>
      <div class="landing_forms"> 
        <Box style={{color:"#1ab551", width: '3rem', height:'3rem'}} />
        <h2>Aaron's Landing Page</h2>
        <p>
          Your simple and powerful patform for getting things <br />
          done
        </p>
        <button onClick={navigateToLogin}>Head to Login!</button>
      </div>
    </center>
  );
}

export default LandingPage;
