import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Contact from 'Contact';
import Listing from 'Listing';
import ListingLink from 'Listing/ListingLink';
import Text from 'Text';
import InfoBox from './InfoBox';
import Readme from './InfoBox.md';

const InfoBoxExample = () => {
  const titleText = text('Title', 'Info box title');
  const variant = select('Variant', ['primary', 'secondary'], 'secondary');

  return (
    <InfoBox variant={variant}>
      <Text title={titleText} variant="text-snippet">
        {`<p>This new funding should be directed to a global response for:</p>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <ul>
          <li>
            developing new vaccines, treatments and diagnostics quickly and at
            scale, so they can be available to people that need them
          </li>
          <li>
            fully funding the World Health Organization (WHO) to coordinate and
            prioritise support efforts to the most vulnerable countries
          </li>
        </ul>
        <h5>Heading 5</h5>
        <p>
          There are no treatments or vaccines for coronavirus disease
          (COVID-19). We need to develop them now as an investment in the future
          health of the world. There is no time to waste, as research during an
          epidemic is the best time to determine the effectiveness of a vaccine
          or treatment. Mobilising these financial resources is an urgent
          priority for G20 countries, philanthropy and the private sector.
        </p>`}
      </Text>
      <Listing>
        <Contact name="John Smith" />
        <Contact name="Bertie Basset" />
      </Listing>
      <Listing>
        <ListingLink href="#1" title="Link 1 text" />
        <ListingLink href="#2" title="Link 2 text" />
        <ListingLink href="#3" title="Link 3 text" />
      </Listing>
    </InfoBox>
  );
};

const stories = storiesOf('Components|InfoBox', module);

stories.add('InfoBox', InfoBoxExample, {
  readme: { sidebar: Readme }
});
