import React from 'react';
import cx from 'classnames';

type ResultsCountProps = {
  className?: string;
  currentCount: string;
  resultsCount: number;
  sortedBy: string;
};

export const ResultsCount = ({
  className,
  currentCount,
  resultsCount,
  sortedBy
}: ResultsCountProps) => {
  const classNames = cx('cc-results-count', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <p>
        Showing{' '}
        <strong>
          {currentCount} results of {resultsCount}
        </strong>
      </p>
      <p className="cc-results-count__sort">Sorted by {sortedBy}</p>
    </div>
  );
};

export default ResultsCount;
