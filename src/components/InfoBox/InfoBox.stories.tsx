import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Text from 'Text';
import InfoBox from './InfoBox';
import Readme from './InfoBox.md';

const InfoBoxExample = () => {
  const titleText = text('title', 'Info box title');

  return (
    <InfoBox title={titleText}>
      <Text>
        <p>This new funding should be directed to a global response for:</p>
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
        <p>
          There are no treatments or vaccines for coronavirus disease
          (COVID-19). We need to develop them now as an investment in the future
          health of the world. There is no time to waste, as research during an
          epidemic is the best time to determine the effectiveness of a vaccine
          or treatment. Mobilising these financial resources is an urgent
          priority for G20 countries, philanthropy and the private sector.
        </p>
      </Text>
    </InfoBox>
  );
};

const stories = storiesOf('Components|InfoBox', module);

stories.add('InfoBox', InfoBoxExample, {
  readme: { sidebar: Readme }
});
