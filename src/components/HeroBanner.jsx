// HeroBanner.js
import React from "react";
import "./HeroBanner.css";
import { LogoSliders } from "./LogoSliders";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="col-md-6">
          <div className="hero-content text-center text-md-left">
            <h6 className="text-start">Monolith</h6>
            <h1 className="text-start">
              Use AI software to test less and learn more.
            </h1>
            <p className="text-start">
              Spend less time running expensive, repetitive tests and more time
              learning from your engineering data to predict the exact tests to
              run.
            </p>
          </div>
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <button className="first-button">Request a demo</button>
              <button className="second-button">Speak to our team</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <LogoSliders />
      </div>
    </div>
  );
};

export default HeroBanner;
