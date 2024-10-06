import React from "react";
import { Top, Header, Footer } from "@/components/client";
import { OrderCard, OrderForm } from "@/partials/Client/Order";

import "./page.css";

async function getCarsData(id: string) {
  const carRes = await fetch(`http://localhost:3001/cars/${id}`, {
    cache: "no-store",
  });
  if (!carRes.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const data = await carRes.json();

  const relatedRes = await fetch(
    `http://localhost:3001/cars/brand/${data?.car.BrandId}`,
    {
      cache: "no-store",
    }
  );
  if (!relatedRes.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const relatedData = await relatedRes.json();
  return { car: data.car, related: relatedData.cars };
}

const Order = async ({ params }: { params: { carId: string } }) => {
  const { car, related } = await getCarsData(params.carId);
  const pathes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "All Cars",
      link: "/catalog",
    },
    {
      name: car.BrandName,
      link: `/catalog?brand=${car.BrandName}`,
    },
    {
      name: car.ModelName,
      link: `/catalog?brand=${car.BrandName}&model=${car.ModelName}`,
    },
    {
      name: "New Order",
      link: null,
    },
  ];
  return (
    <body>
      <Header />
      <main className="main">
        <Top pathes={pathes} title={"New Order"} />
        <section className="order">
          <div className="container">
            <section className="order-inner">
              <OrderCard car={car} />
              <OrderForm />
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Order;
