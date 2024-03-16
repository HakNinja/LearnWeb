import React, { useEffect } from 'react';
import './Loader.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function Loader() {
  const navigate = useNavigate();
  useEffect(() => {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
      loader.style.top = "-100%";
      navigate("/home");
    }, 4200);
  }, []);

  return (
    <div id="loader">
      <h1>YOU LEARN TODAY,</h1>
      <h1>EARN TOMORROW</h1>
    </div>
  );
}

export default Loader;