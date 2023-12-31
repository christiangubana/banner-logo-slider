import React from "react";
import "./HeroBanner.css";
import { LogoSliders } from "./LogoSliders";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-content text-center text-md-left">
              <h6 className="text-start">Monolith</h6>
              <h1 className="text-start">Test less. Learn more.</h1>
              <p className="text-start">
                Spend less time running expensive, repetitive tests and more
                time learning from your engineering data to predict the exact
                tests to run.
              </p>
              <div className="d-flex justify-content-start">
                <button className="first-button me-3">Request a demo</button>
                <button className="second-button">Speak to our team</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <LogoSliders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
