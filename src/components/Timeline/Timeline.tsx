import React from 'react';
import cx from 'classnames';

import RichText from 'RichText';

type TimelineMilestoneProps = {
  body?: string;
  date: string;
  linkHref?: string;
  linkText?: string;
  title: string;
};

type TimelineProps = {
  className?: string;
  milestones: TimelineMilestoneProps[];
  title?: string;
};

export const Timeline = ({ className, milestones, title }: TimelineProps) => {
  const classNames = cx('cc-timeline', {
    [className]: className
  });

  return (
    <div className={classNames}>
      {title && <h3 className="cc-timeline__title">{title}</h3>}
      <ol className="cc-timeline__list">
        {milestones.map((item, index) => (
          <li
            // index used to ensure no two <dt><dd> combos have identical keys
            // eslint-disable-next-line react/no-array-index-key
            key={`${index}-${item.date}-${item.title}`}
            className="cc-timeline__item"
          >
            <div className="cc-timeline__item-date">{item.date}</div>
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
  );
};

export default Timeline;
