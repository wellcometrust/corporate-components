import React from 'react';
import ReactPaginate from 'react-paginate';

import Icon from 'Icon';

export const PaginationButtonPrevious = () => (
  <>
    <Icon name="chevron" className="pagination__prev-icon" />
    <span className="pagination__link-text">Prev</span>
  </>
);

export const PaginationButtonNext = () => (
  <>
    <span className="pagination__link-text">Next</span>
    <Icon name="chevron" className="pagination__next-icon" />
  </>
);

export const PaginationButtonBreak = () => (
  <>
    <span className="u-visually-hidden">go to the next page group&nbsp;</span>…
  </>
);

type PaginationProps = {
  forcePage?: number;
  hrefBuilder?: (page: number) => string;
  onPageChange?: ({ selected }: { selected: number }) => void;
  pageCount: number;
};

export const Pagination = ({
  forcePage,
  hrefBuilder,
  onPageChange,
  pageCount
}: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={<PaginationButtonPrevious />}
      nextLabel={<PaginationButtonNext />}
      breakLabel={<PaginationButtonBreak />}
      forcePage={forcePage}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      hrefBuilder={hrefBuilder}
      pageCount={pageCount}
      pageRangeDisplayed={4}
      containerClassName="cc-pagination"
      nextClassName="cc-pagination__next"
      nextLinkClassName="cc-pagination__next-link"
      previousClassName="cc-pagination__prev"
      previousLinkClassName="cc-pagination__prev-link"
      pageClassName="cc-pagination__item"
      pageLinkClassName="cc-pagination__link"
      breakClassName="cc-pagination__break"
      breakLinkClassName="cc-pagination__break-link"
      disabledClassName="is-disabled"
      activeLinkClassName="is-active"
    />
  );
};

export default Pagination;
