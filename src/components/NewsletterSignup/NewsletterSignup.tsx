import React from 'react';

import Grid, { GridCell } from 'Grid';
import NewsletterForm from 'NewsletterForm';
import Section from 'Section';
import SectionTitle from 'SectionTitle';

export const NewsletterSignup = () => (
  <Section className="newsletter-signup">
    <Grid>
      <GridCell column={1} columnCount={1}>
        <h3 className="newsletter__title">
          Sign up to our research newsletter
        </h3>
        <NewsletterForm className="newsletter__form">
          <p className="newsletter__intro">
            Get the latest news about Wellcome and the work we fund in a monthly
            email.
          </p>
        </NewsletterForm>
      </GridCell>
    </Grid>
  </Section>
);

export default NewsletterSignup;
