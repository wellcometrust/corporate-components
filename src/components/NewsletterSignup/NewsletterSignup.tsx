import React from 'react';

import Grid, { GridCell } from 'Grid';
import NewsletterForm from 'NewsletterForm';
import Section from 'Section';

type NewsletterSignupProps = {
  inpageId?: string;
  intro?: string;
  style?: string;
  title?: string;
  type?: string;
};

const introDefault = 'Get the latest news about Wellcome monthly email.';
const titleDefault = 'Sign up to our newsletter';
const styleDefault = 'light-blue';
const typeDefault = 'corporate';

export const NewsletterSignup = ({
  inpageId,
  intro = introDefault,
  style = styleDefault,
  title = titleDefault,
  type = typeDefault
}: NewsletterSignupProps) => (
  <Section className="newsletter-signup">
    <Grid>
      <GridCell column={1} columnCount={1}>
        <h3 className="newsletter-signup__title" id={inpageId}>
          {title}
        </h3>
        <NewsletterForm className="newsletter__form" type={type}>
          <div
            className="newsletter-signup__intro"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
        </NewsletterForm>
      </GridCell>
    </Grid>
  </Section>
);

export default NewsletterSignup;
