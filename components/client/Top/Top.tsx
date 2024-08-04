import React from "react";

const Top = () => {
  return (
    <section className="top">
      <div className="container">
        <div className="top-inner">
          <div className="breadcrumbs">
            <a className="breadcrumbs-link" href="#">
              Home
            </a>
            <span>/</span>
            <span className="breadcrumbs-last">All Cars</span>
          </div>
          <h1 className="breadcrumbs-title">All Cars</h1>
        </div>
      </div>
    </section>
  );
};

export default Top;
