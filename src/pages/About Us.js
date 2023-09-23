import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../img/AboutUs.png.jpg"; // Import your image

function AboutUs() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/Home");
  };

  return (
    <div>
      <main>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          auctor, libero eget blandit convallis, ligula odio venenatis
          odio, ut fringilla massa libero quis urna.
        </p>
        <img src={aboutImage} alt="About Us" />
        <button onClick={goToHomePage}>Go to Home</button>
      </main>
    </div>
  );
}

export default AboutUs;

