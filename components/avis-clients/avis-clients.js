import Image from "next/image";
import classes from "./avis-clients.module.css";
import CommentIcon from "../icons/commentIcon";

function ListAvisClients({ avisClients }) {
  return (
    <>
      <div className={classes.avisContainer}>
        <header className={classes.header}>
          <h2>AVIS CLIENTS</h2>
        </header>
        <div className={classes.avisClients}>
          {avisClients.map((avis, index) => (
            <div key={index} className={classes.avisBox}>
              <span className={classes.icon}>
                <CommentIcon />
              </span>
              <p>{avis.message}</p>
              <strong>{avis.location}</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListAvisClients;
