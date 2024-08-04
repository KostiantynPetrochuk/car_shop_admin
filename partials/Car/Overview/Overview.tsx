import React from "react";

import "./Overview.css";

const Overview = () => {
  return (
    <section className="overview">
      <div className="container">
        <div className="overview-inner">
          <h3 className="overview-title">Car Overview</h3>
          <div className="overview-details">
            <div className="overview-col">
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_body.svg"
                    alt=""
                  />
                  <span className="overview-label">Body</span>
                </div>
                <span className="overview-row-value">Sedan</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_mileage.svg"
                    alt=""
                  />
                  <span className="overview-label">Mileage</span>
                </div>
                <span className="overview-row-value">250</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_fuel.svg"
                    alt=""
                  />
                  <span className="overview-label">Fuel Type</span>
                </div>
                <span className="overview-row-value">Petrol</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_year.svg"
                    alt=""
                  />
                  <span className="overview-label">Year</span>
                </div>
                <span className="overview-row-value">2021</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_transmission.svg"
                    alt=""
                  />
                  <span className="overview-label">Transmission</span>
                </div>
                <span className="overview-row-value">Manual</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_drive_type.svg"
                    alt=""
                  />
                  <span className="overview-label">Drive Type</span>
                </div>
                <span className="overview-row-value">Real-Wheel Drive</span>
              </div>
            </div>
            <div className="overview-col">
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_condition.svg"
                    alt=""
                  />
                  <span className="overview-label">Condition</span>
                </div>
                <span className="overview-row-value">Used</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_engine.svg"
                    alt=""
                  />
                  <span className="overview-label">Engine Size</span>
                </div>
                <span className="overview-row-value">4.0</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_door.svg"
                    alt=""
                  />
                  <span className="overview-label">Door</span>
                </div>
                <span className="overview-row-value">4 Doors</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_cylinder.svg"
                    alt=""
                  />
                  <span className="overview-label">Cylinder</span>
                </div>
                <span className="overview-row-value">12</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_color.svg"
                    alt=""
                  />
                  <span className="overview-label">Color</span>
                </div>
                <span className="overview-row-value">Black</span>
              </div>
              <div className="overview-row">
                <div className="overview-row-title">
                  <img
                    className="overview-logo"
                    src="/img/overview_vin.svg"
                    alt=""
                  />
                  <span className="overview-label">VIN</span>
                </div>
                <span className="overview-row-value">FCB123792</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
