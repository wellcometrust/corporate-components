import React from 'react';
import ReactPaginate from 'react-paginate';
import cx from 'classnames';

import Icon from 'Icon';

export const PaginationButtonPrevious = () => (
  <>
    <Icon name="chevron" className="cc-pagination__prev-icon" />
    <span className="cc-pagination__link-text">Prev</span>
  </>
);

export const PaginationButtonNext = () => (
  <>
    <span className="cc-pagination__link-text">Next</span>
    <Icon name="chevron" className="cc-pagination__next-icon" />
  </>
);

export const PaginationButtonBreak = () => (
  <>
    <span className="u-visually-hidden">go to the next page group&nbsp;</span>…
  </>
);

type PaginationProps = {
  className?: string;
  forcePage?: number;
  hrefBuilder?: (page: number) => string;
  onPageChange?: ({ selected }: { selected: number }) => void;
  pageCount: number;
};

export const Pagination = ({
  className,
  forcePage,
  hrefBuilder,
  onPageChange,
  pageCount
}: PaginationProps) => {
  const classNames = cx('cc-pagination', {
    [`${className}`]: className
  });

  return (
    <nav aria-label="Pagination" className={classNames}>
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
        containerClassName="cc-pagination__list"
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
    </nav>
  );
};

export default Pagination;
