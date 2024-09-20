import React from "react";
import { Car } from "@/types";

import "./Features.css";

const Features = ({ car }: { car: Car }) => {
  const features = car.Features;
  const interior = features.filter(
    (feature) => feature.Category === "interior"
  );
  const safety = features.filter((feature) => feature.Category === "safety");
  const exterior = features.filter(
    (feature) => feature.Category === "exterior"
  );
  const comfort = features.filter((feature) => feature.Category === "comfort");

  return (
    <section className="features">
      <div className="container">
        <div className="features-inner">
          <h3 className="features-title">Features</h3>
          <div className="features-content">
            <div className="features-col">
              <span className="features-col-title">Interior</span>
              {interior.map((feature) => (
                <div className="features-col-item" key={feature.ID}>
                  <span className="features-col-item-checkbox"></span>
                  <span className="features-col-item-label">
                    {feature.FeatureName}
                  </span>
                </div>
              ))}
            </div>
            <div className="features-col">
              <span className="features-col-title">Safety</span>
              {safety.map((feature) => (
                <div className="features-col-item" key={feature.ID}>
                  <span className="features-col-item-checkbox"></span>
                  <span className="features-col-item-label">
                    {feature.FeatureName}
                  </span>
                </div>
              ))}
            </div>
            <div className="features-col">
              <span className="features-col-title">Exterior</span>
              {exterior.map((feature) => (
                <div className="features-col-item" key={feature.ID}>
                  <span className="features-col-item-checkbox"></span>
                  <span className="features-col-item-label">
                    {feature.FeatureName}
                  </span>
                </div>
              ))}
            </div>
            <div className="features-col">
              <span className="features-col-title">Comfort & Convenience</span>
              {comfort.map((feature) => (
                <div className="features-col-item" key={feature.ID}>
                  <span className="features-col-item-checkbox"></span>
                  <span className="features-col-item-label">
                    {feature.FeatureName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
