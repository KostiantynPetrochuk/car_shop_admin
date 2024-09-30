"use client";
import React from "react";
import Link from "next/link";

type Path = {
  name: string;
  link: string | null;
};

type TopProps = {
  pathes: Path[];
};

const Top = ({ pathes }: TopProps) => {
  return (
    <section className="top">
      <div className="container">
        <div className="top-inner">
          <div className="breadcrumbs">
            {pathes.map((path, index) => {
              if (index === 0) {
                return (
                  <React.Fragment key={index}>
                    {path.link ? (
                      <Link className="breadcrumbs-link" href={path.link}>
                        {path.name}
                      </Link>
                    ) : (
                      <span className="breadcrumbs-last">{path.name}</span>
                    )}
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment key={index}>
                  {<span>&nbsp;/&nbsp;</span>}
                  {path.link ? (
                    <Link className="breadcrumbs-link" href={path.link}>
                      {path.name}
                    </Link>
                  ) : (
                    <span className="breadcrumbs-last">{path.name}</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <h1 className="breadcrumbs-title">All Cars</h1>
        </div>
      </div>
    </section>
  );
};

export default Top;
