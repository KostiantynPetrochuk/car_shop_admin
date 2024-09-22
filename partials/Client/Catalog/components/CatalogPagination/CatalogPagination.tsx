import React from "react";
import styles from "./CatalogPagination.module.css";

type CatalogPaginationProps = {
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const CatalogPagination = ({
  totalPages,
  page,
  setPage,
}: CatalogPaginationProps) => {
  const pages = [];

  const handleClick = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setPage(pageNum);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPageNumbers = () => {
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <span
            key={i}
            className={`${styles.item} ${i === page ? styles.current : ""}`}
            onClick={() => handleClick(i)}
          >
            {i}
          </span>
        );
      }
    } else {
      pages.push(
        <span
          key={1}
          className={`${styles.item} ${page === 1 ? styles.current : ""}`}
          onClick={() => handleClick(1)}
        >
          1
        </span>
      );

      if (page > 4) {
        pages.push(
          <span key="start-ellipsis" className={styles.disabled}>
            ...
          </span>
        );
      }

      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(page + 1, totalPages - 1);
        i++
      ) {
        pages.push(
          <span
            key={i}
            className={`${styles.item} ${i === page ? styles.current : ""}`}
            onClick={() => handleClick(i)}
          >
            {i}
          </span>
        );
      }

      if (page < totalPages - 3) {
        pages.push(
          <span key="end-ellipsis" className={styles.disabled}>
            ...
          </span>
        );
      }

      pages.push(
        <span
          key={totalPages}
          className={`${styles.item} ${
            page === totalPages ? styles.current : ""
          }`}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </span>
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <span
        className={`${styles.prev} ${page === 1 ? styles.disabled : ""}`}
        onClick={() => handleClick(page - 1)}
      ></span>
      {renderPageNumbers()}
      <span
        className={`${styles.next} ${
          page === totalPages ? styles.disabled : ""
        }`}
        onClick={() => handleClick(page + 1)}
      ></span>
    </div>
  );
};

export default CatalogPagination;
