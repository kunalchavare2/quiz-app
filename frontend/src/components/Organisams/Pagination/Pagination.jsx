import React from "react";
import { PaginationStyle } from "./Pagination.styled";
import Button from "./../../Atoms/Button/Button";
import { DOTS, usePagination } from "../../../customHooks/usePagination";

const Pagination = ({
  totalCount,
  currentPage,
  siblingCount = 1,
  changePage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = Math.ceil(totalCount / pageSize) === currentPage;
  const firstPage = currentPage === 1;

  const handlePrev = () => {
    changePage(currentPage - 1);
  };
  const handleNext = () => {
    changePage(currentPage + 1);
  };

  const handlePage = (num) => {
    changePage(num);
  };

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <PaginationStyle>
      <Button
        title="Prev"
        active={true}
        disabled={firstPage}
        onClick={handlePrev}
      />

      {paginationRange.map((num) => {
        if (num === DOTS) {
          return <Button title="..." disabled={true} />;
        }

        return (
          <Button
            title={num}
            color={currentPage === num ? "#0B69FF" : null}
            onClick={(e) => handlePage(Number(e.target.textContent))}
          />
        );
      })}

      <Button title="Next" onClick={handleNext} disabled={lastPage} />
    </PaginationStyle>
  );
};

export default Pagination;
