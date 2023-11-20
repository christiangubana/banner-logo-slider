import React from "react";
import "./HeroBanner.css";
import { LogoSliders } from "./LogoSliders";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div
          class="span12 widget-span widget-type-custom_widget dnd-module"
          data-widget-type="custom_widget"
          data-x="0"
          data-w="12"
        >
          <div
            id="hs_cos_wrapper_module_165634242646012"
            class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
            data-hs-cos-general-type="widget"
            data-hs-cos-type="module"
          >
            <span
              id="hs_cos_wrapper_module_165634242646012_"
              class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
              data-hs-cos-general-type="widget"
              data-hs-cos-type="rich_text"
            >
              <h6>Monolith</h6>
              <h1
                style={{ fontSize: "48px", fontWeight: "bold" }}
                data-pm-slice="1 1 []"
              >
                <span style={{ color: " #ffffff" }}>
                  Use AI software to test less and learn more.
                </span>
              </h1>
              <p style={{ fontSize: "18px" }}>
                <span style={{ color: " #ffffff" }}>
                  Spend less time running expensive, repetitive tests and more
                  time learning from your engineering data to predict the exact
                  tests to run.
                </span>
              </p>
            </span>
          </div>
        </div>
        <button>Get Started</button>
      </div>
      <LogoSliders />
    </div>
  );
};

export default HeroBanner;
