import React from "react";
import { Top, Header, Footer } from "@/components/client";
import { OrderCard, OrderForm } from "@/partials/Order";

import "./page.css";

const Order = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <Top />
        <section className="order">
          <div className="container">
            <section className="order-inner">
              <OrderCard />
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
