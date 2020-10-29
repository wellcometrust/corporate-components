import React from 'react';
import cx from 'classnames';

import Grid, { GridCell } from 'Grid';
import RichText from 'RichText';
import Section from 'Section';
import Button from 'Button';

type DisclaimerProps = {
  title?: string;
  body?: string;
  className?: string;
  buttons: [];
};

const titleDefault = 'Disclaimer title';
const bodyDefault = 'Body goes here';
const classDefault = 'cc-info-box';

export const Disclaimer = ({
  title = titleDefault,
  body = bodyDefault,
  className = classDefault,
  buttons = []
}: DisclaimerProps) => {
  return (
    <Section className={className}>
      <Grid>
        <GridCell column={1} columnCount={1}>
          <h3>{title}</h3>
          <RichText>{body}</RichText>
          <div className="cookie-message__buttons">
            {buttons &&
              buttons.map((button: any) => {
                const defaultText: { [key: string]: any } = {
                  agree: 'Agree',
                  cancel: 'Cancel',
                  link: 'Back'
                };

                const buttonType = button.attributes.button_type;
                const linkStyle = button.attributes.link_style;
                const { link } = button.attributes;

                return (
                  <Button
                    type="button"
                    className="disclaimer__button"
                    variant={linkStyle}
                    href={link?.uri}
                  >
                    {link?.title || defaultText[buttonType]}
                  </Button>
                );
              })}
          </div>
        </GridCell>
      </Grid>
    </Section>
  );
};

export default Disclaimer;
