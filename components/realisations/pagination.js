import classes from "./pagination.module.css";

function Pagination({ items, pageSize, currentPage, onPageChange }) {
  const pagesCount = Math.ceil(items / pageSize); // 12/3=4

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }
    pages.push(currentPage);
    if (currentPage < pagesCount) {
      pages.push(currentPage + 1);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={classes.paginationContainer}>
      <button
        onClick={handlePrevClick}
        className={`${classes["paginationBtn"]} ${
          currentPage === 1 ? classes.disabled : ""
        }`}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Visible Page Buttons */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${classes["paginationBtn"]} ${
            currentPage === page ? classes.active : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNextClick}
        className={`${classes["paginationBtn"]} ${
          currentPage === pagesCount ? classes.disabled : ""
        }`}
        disabled={currentPage === pagesCount}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
