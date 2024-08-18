import React from "react";

import { Header, Footer, Top } from "@/components/client";
import { SortForm, CatalogBody } from "@/partials/Client/Catalog";

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
