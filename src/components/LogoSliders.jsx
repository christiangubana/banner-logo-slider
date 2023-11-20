import React from "react";
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

export const LogoSliders = () => {
  return (
    <div className="logo-slider">
      {/* Logo slider content goes here */}
      <img src={JotaLogo} alt="Logo 1" />
      <img src={MichelinTireLogo} alt="Logo 2" />
      <img src={MercedesBenzLogo} alt="Logo 3" />
      <img src={KautexTextronLogo} alt="Logo 4" />
      <img src={HoneywellLogo} alt="Logo 5" />
      <img src={HondeaLogo} alt="Logo 6" />
      <img src={BmwLogo} alt="Logo 7" />
      <img src={BaeSystemsLogo} alt="Logo 8" />
      <img src={AptarLogo} alt="Logo 9" />
      <img src={SiemensLogo} alt="Logo 9" />
      {/* Add more logos as needed */}
    </div>
  );
};
