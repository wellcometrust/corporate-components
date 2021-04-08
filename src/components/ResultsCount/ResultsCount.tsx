import React, { ChangeEvent } from 'react';
import cx from 'classnames';
import Label from '../Label';

type ResultsCountProps = {
  className?: string;
  currentCount: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: {
    label: string;
    value: string;
  }[];
  resultsCount: number;
  selectedValue?: string;
  sortedBy?: string;
};

export const ResultsCount = ({
  className,
  currentCount,
  id,
  onChange,
  options,
  resultsCount,
  selectedValue,
  sortedBy
}: ResultsCountProps) => {
  const classNames = cx('cc-results-count', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <p className="cc-results-count__result" aria-live="polite" role="alert">
        Showing{' '}
        <strong>
          {currentCount} results of {resultsCount}
        </strong>
      </p>
      {options ? (
        <div className="cc-results-count__sort">
          <Label
            className="cc-results-count__label"
            htmlFor={id}
            text="Sort by:"
          />
          <select
            className="cc-select cc-results-count__select"
            id={id}
            onChange={onChange}
            value={selectedValue}
          >
            {options?.map(option => (
              <option key={`option-${option.label}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : (
        sortedBy && (
          <p className="cc-results-count__sort">Sorted by {sortedBy}</p>
        )
      )}
    </div>
  );
};

export default ResultsCount;
