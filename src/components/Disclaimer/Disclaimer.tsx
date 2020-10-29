import React from 'react';

import Grid, { GridCell } from 'Grid';
import RichText from 'RichText';
import Section from 'Section';
import SectionTitle from 'SectionTitle';
import Button from 'Button';

type DisclaimerProps = {
  title?: string;
  body?: string;
  className?: string;
  handleDisclaimer?: () => void;
  isDisclaimerActive: boolean;
  buttons: [];
};

const titleDefault = 'Disclaimer ';
const bodyDefault = '';
const classDefault = 'cc-info-box';

export const Disclaimer = ({
  title = titleDefault,
  body = bodyDefault,
  className = classDefault,
  handleDisclaimer,
  isDisclaimerActive,
  buttons = []
}: DisclaimerProps) => {
  return isDisclaimerActive ? (
    <Section className={className}>
      <Grid>
        <GridCell column={1} columnCount={1}>
          <SectionTitle title={title} />
          <RichText>{body}</RichText>
          <div className="disclaimer__buttons">
            {buttons &&
              buttons.map((button: any) => {
                const defaultText: { [key: string]: any } = {
                  agree: 'Agree',
                  cancel: 'Cancel',
                  link: 'Back'
                };

                return (
                  <Button
                    key={button.id}
                    type={button.attributes.button_type}
                    className="disclaimer__button"
                    variant={button.attributes.link_style}
                    href={button.attributes.link?.url}
                    onClick={
                      button.attributes.button_type === 'agree'
                        ? handleDisclaimer
                        : null
                    }
                  >
                    {button.attributes.link?.title ||
                      defaultText[button.attributes.button_type]}
                  </Button>
                );
              })}
          </div>
        </GridCell>
      </Grid>
    </Section>
  ) : null;
};

export default Disclaimer;
