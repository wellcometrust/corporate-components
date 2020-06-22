import React from 'react';

import Grid, { GridCell } from 'Grid';
import NewsletterForm from 'NewsletterForm';
import Section from 'Section';

type NewsletterSignupProps = {
  intro?: string;
  style?: string;
  title?: string;
  type?: string;
};

const introDefault =
  'Get the latest news about Wellcome and the work we fund in a monthly email.';
const titleDefault = 'Sign up to our research newsletter';
const styleDefault = 'light-blue';
const typeDefault = 'corporate';

export const NewsletterSignup = ({
  intro = introDefault,
  style = styleDefault,
  title = titleDefault,
  type = typeDefault
}: NewsletterSignupProps) => (
  <Section className="newsletter-signup">
    <Grid>
      <GridCell column={1} columnCount={1}>
        <h3 className="newsletter-signup__title">{title}</h3>
        <NewsletterForm className="newsletter__form" type={type}>
          <p className="newsletter-signup__intro">{intro}</p>
        </NewsletterForm>
      </GridCell>
    </Grid>
  </Section>
);

export default NewsletterSignup;
