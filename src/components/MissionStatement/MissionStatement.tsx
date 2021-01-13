import React from 'react';

import RichText from 'RichText';
import Button from 'Button';

type MissionStatementProps = {
  href?: string;
  linkText?: string;
  text: string;
  title: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const MissionStatement = ({
  href,
  linkText,
  text,
  title,
  titleAs = 'h2'
}: MissionStatementProps) => {
  const TitleElement = titleAs;

  return (
    <div className="cc-mission-statement">
      <TitleElement className="cc-mission-statement__title">
        {title}
      </TitleElement>
      <RichText className="cc-mission-statement__text">{text}</RichText>
      {href && linkText && (
        <Button
          className="cc-mission-statement__link"
          href={href}
          icon="arrowLong"
          iconPlacementSwitch
          variant="link"
        >
          {linkText}
        </Button>
      )}
    </div>
  );
};

export default MissionStatement;
