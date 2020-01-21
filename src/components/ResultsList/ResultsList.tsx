// TODO: fix type checking
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import ResultItem, { ResultItemProps } from 'ResultItem/ResultItem';

type ResultsListItemProps = {
  result: ResultItemProps;
  index: number;
}[];

type ResultsListProps = {
  perPage?: number;
  data: ResultsListItemProps;
};

/**
 * Wrapping component displaying a list of results with pagination
 *
 * @param perPage (number) items to be displayed on each page/view
 * @param data (Array)     items to be displayed
 * @constructor
 */
export const ResultsList = ({ perPage = 20, data }: ResultsListProps) => {
  // TODO: integrate with SearchConnector

  const onPageChange = (e: { selected: number }) => {
    console.log(e.selected);
    // TODO: establish component state
    // setCurrentPage(e.selected);
  };

  return (
    <div className="results-list-container">
      <header>Results header (summary)</header>
      <div className="results-list">
        {data.map((result, index) => (
          <ResultItem key={`result-${index + 1}`} {...result} />
        ))}
      </div>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="pagination__break"
        pageCount={Math.ceil(data.length / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={onPageChange}
        containerClassName="pagination"
        activeClassName="is-active"
      />
    </div>
  );
};

export default ResultsList;
