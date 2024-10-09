import Image from "next/image";
import classes from "./list-projets.module.css";
import { Fragment, useState } from "react";
import Pagination from "./pagination";
import { paginate } from "../../utils/pagination-util";
import Link from "next/link";

function ProjetcsList({ projects }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const paginatedProjects = paginate(projects, currentPage, pageSize);

  // onPageChange is a function to set the current page we are in, for example, moving from page one to two
  function onPageChange(page) {
    setCurrentPage(page);
  }

  return (
    <Fragment>
      <ul className={classes.grid}>
        {paginatedProjects.map((projectItem) => (
          <li key={projectItem}>
            <Link href={`/projets/${projectItem}`}>
              <Image
                src={`/projets/${projectItem}`}
                alt={"alt"}
                width={350}
                height={350}
                className={classes.image}
              />
            </Link>
          </li>
        ))}
      </ul>

      <Pagination
        items={projects.length} // 12
        currentPage={currentPage} // currentPage is stored in a state with a default value of 1 since the page will start from page one.
        pageSize={pageSize} // The pageSize is set to 3 since we want to have pagination from 1-3.
        onPageChange={onPageChange}
      />
    </Fragment>
  );
}

export default ProjetcsList;
