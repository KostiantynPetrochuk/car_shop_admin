import React from "react";

import { Header, Footer } from "@/components/client";
import { Top, SortForm, CatalogBody } from "@/partials/Catalog";

import "./page.css";

const Catalog = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <Top />
        <SortForm />
        <CatalogBody />
      </main>
      <Footer />
    </body>
  );
};

export default Catalog;
