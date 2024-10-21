import React, { useState } from "react";
import Image from "next/image";
import classes from "./avis-clients.module.css";
import CommentIcon from "../icons/commentIcon";

function ListAvisClients({ avisClients }) {
  const [currentPage, setCurrentPage] = useState(0);
  const avisPerPage = 3; // Nombre d'avis par page
  const pageCount = Math.ceil(avisClients.length / avisPerPage);

  const displayedAvis = avisClients.slice(
    currentPage * avisPerPage,
    (currentPage + 1) * avisPerPage
  );

  return (
    <div className={classes.avisContainer}>
      <header className={classes.header}>
        <h2>AVIS CLIENTS</h2>
      </header>
      <div className={classes.avisClients}>
        {displayedAvis.map((avis, index) => (
          <div key={index} className={classes.avisBox}>
            <span className={classes.icon}>
              <CommentIcon />
            </span>
            <p>{avis.message}</p>
            <strong>{avis.location}</strong>
          </div>
        ))}
      </div>
      <div className={classes.pagination}>
        {[...Array(pageCount)].map((_, index) => (
          <span
            key={index}
            className={`${classes.paginationDot} ${
              index === currentPage ? classes.activeDot : ""
            }`}
            onClick={() => setCurrentPage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ListAvisClients;
