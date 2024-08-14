import React from "react";

import { Header, Footer, Top } from "@/components/client";
import { Hero, Overview, Features, Related } from "@/partials/Client/Car";

import "./page.css";

const Car = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <Top />
        <Hero />
        <Overview />
        <Features />
        <Related />
      </main>
      <Footer />
    </body>
  );
};

export default Car;
