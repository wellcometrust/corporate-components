import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { isPast, parseISO } from 'date-fns';

import RichText from 'RichText';

type TimelineMilestoneProps = {
  body?: string;
  date: string;
  dateLabel: string;
  linkHref?: string;
  linkText?: string;
  statusLabel?: string;
  title: string;
};

type TimelineProps = {
  className?: string;
  description?: string;
  initialStatusLabel?: string;
  milestones: TimelineMilestoneProps[];
  title?: string;
};

export const Timeline = ({
  className,
  description,
  initialStatusLabel,
  milestones,
  title
}: TimelineProps) => {
  const classNames = cx('cc-timeline', {
    [className]: className
  });
  const [statusLabel, setStatusLabel] = useState(initialStatusLabel);

  /**
   * In order to display the most up-to-date information in the browser
   * we must filter our array of `milestones` to find the:
   *
   * - most recent milestone (milestone.date)
   * - which has a statusLabel (milestone.statusLabel)
   *
   * @returns {string}
   */
  const getCurrentStatusLabel = () => {
    const currentMilestone = milestones

      // check the date value is a valid Date
      .filter(
        milestone =>
          milestone.statusLabel &&
          typeof parseISO(milestone.date).getTime === 'function'
      )

      // convert date string to Date object (for Array.sort)
      .map(milestone => ({
        ...milestone,
        date: parseISO(milestone.date)
      }))

      // Filter for dates in the past
      .filter(milestone => isPast(milestone.date))

      // sort descending by date (most recent first), use getTime b/c Typescript
      .sort((a, b) => b.date.getTime() - a.date.getTime())

      // Find first match which is in the past
      .find(milestone => isPast(milestone.date));

    return currentMilestone?.statusLabel ?? null;
  };

  /**
   * We must run getCurrentStatusLabel() on the client (rather than
   * passing the relevant data at build time) because the value is
   * date/time-sensitive.
   *
   * This method should avoid discrepencies in the value when the
   * component is statically rendered.
   */
  useEffect(() => {
    setStatusLabel(() => {
      const newStatusLabel = getCurrentStatusLabel();
      return newStatusLabel || initialStatusLabel;
    });
  }, [milestones]);

  return (
    <div className={classNames}>
      {title && <h3 className="cc-timeline__title">{title}</h3>}
      {description && (
        <RichText className="cc-timeline__description">{description}</RichText>
      )}
      <div className="cc-timeline__main">
        {statusLabel && <p className="cc-timeline__status">{statusLabel}</p>}
        <ol className="cc-timeline__list">
          {milestones.map((item, index) => (
            <li
              // index used to ensure no two <dt><dd> combos have identical keys
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}-${item.date}-${item.title}`}
              className="cc-timeline__item"
            >
              <div className="cc-timeline__item-date">{item.dateLabel}</div>
              {item.linkHref && item.linkText && (
                <a className="cc-timeline__item-link" href={item.linkHref}>
                  {item.linkText}
                </a>
              )}
              <div className="cc-timeline__item-details">
                <h4 className="cc-timeline__item-title">{item.title}</h4>
                {item.body && (
                  <RichText className="cc-timeline__item-body">
                    {item.body}
                  </RichText>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
