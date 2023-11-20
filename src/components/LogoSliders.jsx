// src/components/LogoSliders.js
import React from "react";
import Slider from "react-slick";
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the animation speed
    slidesToShow: 5, // Adjust the number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="icon-slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
