import React from "react";
import "./HeroBanner.css";
import { LogoSliders } from "./LogoSliders";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Use AI software to test less and learn more.</h1>
        <p>
          Spend less time running expensive, repetitive tests and more time
          learning from your engineering data to predict the exact tests to run.
        </p>
        <button>Get Started</button>
      </div>
      <LogoSliders />
    </div>
  );
};

export default HeroBanner;
