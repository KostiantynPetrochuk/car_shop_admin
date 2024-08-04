import React from "react";

import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-inner">
          <h3 className="features-title">Features</h3>
          <div className="features-content">
            <div className="features-col">
              <span className="features-col-title">Interior</span>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Air Conditioner</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  Digital Odometer
                </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Heater</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Leather Seats</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  Panoramic Moonroof
                </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Tachometer</span>
              </div>
            </div>
            <div className="features-col">
              <span className="features-col-title">Safety</span>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  Anti-lock Braking
                </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Brake Assist</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  Child Safety Locks
                </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Driver Air Bag</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  Power Door Locks
                </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Tachometer</span>
              </div>
            </div>
            <div className="features-col">
              <span className="features-col-title">Exterior</span>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Fog Lights Font</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  Rain Sensing Wiper
                </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label"> Rear Spoiler </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  Windows - Electric
                </span>
              </div>
            </div>
            <div className="features-col">
              <span className="features-col-title">Comfort & Convenience</span>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Android Auto</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label"> Apple CarPlay </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">Bluetooth</span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label"> Homelink </span>
              </div>
              <div className="features-col-item">
                <span className="features-col-item-checkbox"></span>
                <span className="features-col-item-label">
                  {" "}
                  Power Steering{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
