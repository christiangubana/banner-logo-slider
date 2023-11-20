// src/components/LogoSliders.js
import React, { useState, useEffect } from "react";
import "./LogoSliders.css";

import JotaLogo from "../assets/images/icons/JOTA_logo.png";
import MichelinTireLogo from "../assets/images/icons/michelin-tire-logo.png";
import MercedesBenzLogo from "../assets/images/icons/mercedes-benz_logo.webp";
import KautexTextronLogo from "../assets/images/icons/Kautex_Textron_Logo_Bw-1.png";
import HoneywellLogo from "../assets/images/icons/honeywell-1-logo-black-and-white.png";
import HondeaLogo from "../assets/images/icons/honda_logo.svg";
import BmwLogo from "../assets/images/icons/BMW_logo_(gray)_4_w_66.webp";
import BaeSystemsLogo from "../assets/images/icons/bae-systems_logo.svg";
import AptarLogo from "../assets/images/icons/Aptar Logo.svg";
import SiemensLogo from "../assets/images/icons/Siemens_logo.svg";

const logos = [
  BmwLogo,
  BaeSystemsLogo,
  MercedesBenzLogo,
  HondeaLogo,
  SiemensLogo,
  HoneywellLogo,
  KautexTextronLogo,
  MichelinTireLogo,
  AptarLogo,
  JotaLogo,
];

export const LogoSliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % logos.length);
    }, 3000); // Adjust the interval (in milliseconds)

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="icon-slider-container">
      <div className="icon-slider">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};
