import { Car } from "@/types";

import styles from "./Overview.module.css";

const Overview = ({ car }: { car: Car }) => {
  return (
    <section className="overview">
      <div className="container">
        <div className={styles.inner}>
          <h3 className={styles.title}>Car Overview</h3>
          <div className={styles.details}>
            <div className="overview-col">
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_body.svg"
                    alt=""
                  />
                  <span>Body</span>
                </div>
                <span className={styles.value}>{car.BodyType}</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_mileage.svg"
                    alt=""
                  />
                  <span>Mileage</span>
                </div>
                <span className={styles.value}>
                  {car.Mileage.toLocaleString()} km
                </span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_fuel.svg"
                    alt=""
                  />
                  <span>Fuel Type</span>
                </div>
                <span className={styles.value}>{car.FuelType}</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_year.svg"
                    alt=""
                  />
                  <span>Year</span>
                </div>
                <span className={styles.value}>{car.Year}</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_transmission.svg"
                    alt=""
                  />
                  <span>Transmission</span>
                </div>
                <span className={styles.value}>{car.Transmission}</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_drive_type.svg"
                    alt=""
                  />
                  <span>Drive Type</span>
                </div>
                <span className={styles.value}>{car.DriveType}</span>
              </div>
            </div>
            <div className="overview-col">
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_condition.svg"
                    alt=""
                  />
                  <span>Condition</span>
                </div>
                <span className={styles.value}>{car.Condition}</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_engine.svg"
                    alt=""
                  />
                  <span>Engine Size</span>
                </div>
                <span className={styles.value}>{car.EngineSize}</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_door.svg"
                    alt=""
                  />
                  <span>Door</span>
                </div>
                <span className={styles.value}>{car.DoorCount} Doors</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img className={styles.logo} src="/img/euro.svg" alt="" />
                  <span>Price</span>
                </div>
                <span className={styles.value}>
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(car?.Price)}
                </span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_color.svg"
                    alt=""
                  />
                  <span>Color</span>
                </div>
                <span className={styles.value}>{car.Color}</span>
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  <img
                    className={styles.logo}
                    src="/img/overview_vin.svg"
                    alt=""
                  />
                  <span>VIN</span>
                </div>
                <span className={styles.value}>{car.VIN}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
