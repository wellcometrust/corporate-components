import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Text from './Text';
import Readme from './Text.md';

const TextExample = () => {
  const textClassName = text('className', '');
  // const textContent = text('Content', 'My section');

  return (
    <Text className={textClassName}>
      {`<h3>Heading 3</h3>
        <p>This new funding should be directed to a global response for:</p>
        <ul>
          <li>
          developing new vaccines, <a href="https://who.org">external link no target blank</a>treatments and diagnostics quickly and at
          scale, so they can be available to people that need them
        </li>
        <li>
          fully funding the <a href="https://who.org" target="_blank">external link with target blank</a> to coordinate and
          prioritise support efforts to the most vulnerable countries
        </li>
        <li>
          ensuring <a href="https://who.org" class="non" target="_blank">external link to be ignored</a> sufficient supplies of protective equipment for health
          workers.
          <ul>
            <li>
              (Nest bulleted list) <a href="https://who.org" target="_blank">external link with target blank</a> developing new vaccines, treatments and
              diagnostics quickly and at scale, so they can be available to
              people that need them
            </li>
            <li>
              fully funding the World Health Organization (WHO) to coordinate
              and prioritise support efforts to the most vulnerable countries
            </li>
            <li>
              ensuring sufficient supplies of protective equipment for health
              workers.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        There are no treatments or vaccines for coronavirus disease (COVID-19).
        We need to develop them now as an investment in the future health of the
        world. There is no time to waste, as research during an epidemic is the
        best time to determine the effectiveness of a vaccine or treatment.
        Mobilising these financial resources is an urgent priority for G20
        countries, philanthropy and the private sector.
      </p>

      <h4>Heading 4</h4>
      <p>This new funding should be directed to a global response for:</p>
      <ol>
        <li>
          developing new vaccines, treatments and diagnostics quickly and at
          scale, so they can be available to people that need them
        </li>
        <li>
          fully funding the World Health Organization (WHO) to coordinate and
          prioritise support efforts to the most vulnerable countries
        </li>
        <li>
          ensuring sufficient supplies of protective equipment for health
          workers.
          <ol>
            <li>
              (Nested ordered list) developing new vaccines, treatments and
              diagnostics quickly and at scale, so they can be available to
              people that need them
            </li>
            <li>
              fully funding the World Health Organization (WHO) to coordinate
              and prioritise support efforts to the most vulnerable countries
            </li>
            <li>
              ensuring sufficient supplies of protective equipment for health
              workers.
            </li>
          </ol>
        </li>
      </ol>
      <p>
        There are no treatments or vaccines for coronavirus disease (COVID-19).
        We need to develop them now as an investment in the future health of the
        world. There is no time to waste, as research during an epidemic is the
        best time to determine the effectiveness of a vaccine or treatment.
        Mobilising these financial resources is an urgent priority for G20
        countries, philanthropy and the private sector.
      </p>

      <h5>Heading 5</h5>
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
        <li>
          ensuring sufficient supplies of protective equipment for health
          workers.
          <ol>
            <li>
              (Nested ordered list) developing new vaccines, treatments and
              diagnostics quickly and at scale, so they can be available to
              people that need them
            </li>
            <li>
              fully funding the World Health Organization (WHO) to coordinate
              and prioritise support efforts to the most vulnerable countries
            </li>
            <li>
              ensuring sufficient supplies of protective equipment for health
              workers.
            </li>
          </ol>
        </li>
      </ul>
      <p>
        There are no treatments or vaccines for coronavirus disease (COVID-19).
        We need to develop them now as an investment in the future health of the
        world. There is no time to waste, as research during an epidemic is the
        best time to determine the effectiveness of a vaccine or treatment.
        Mobilising these financial resources is an urgent priority for G20
        countries, philanthropy and the private sector.
      </p>

      <h6>Heading 6</h6>
      <p>This new funding should be directed to a global response for:</p>
      <ol>
        <li>
          developing new vaccines, treatments and diagnostics quickly and at
          scale, so they can be available to people that need them
        </li>
        <li>
          fully funding the World Health Organization (WHO) to coordinate and
          prioritise support efforts to the most vulnerable countries
        </li>
        <li>
          ensuring sufficient supplies of protective equipment for health
          workers.
          <ul>
            <li>
              (Nest bulleted list) developing new vaccines, treatments and
              diagnostics quickly and at scale, so they can be available to
              people that need them
            </li>
            <li>
              fully funding the World Health Organization (WHO) to coordinate
              and prioritise support efforts to the most vulnerable countries
            </li>
            <li>
              ensuring sufficient supplies of protective equipment for health
              workers.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        There are no treatments or vaccines for coronavirus disease (COVID-19).
        We need to develop them now as an investment in the future health of the
        world. There is no time to waste, as research during an epidemic is the
        best time to determine the effectiveness of a vaccine or treatment.
        Mobilising these financial resources is an urgent priority for G20
        countries, philanthropy and the private sector.
      </p>
      <h3>Heading 3 (with previous sibling)</h3>
      <p>
        There are no treatments or vaccines for coronavirus disease (COVID-19).
        We need to develop them now as an investment in the future health of the
        world. There is no time to waste, as research during an epidemic is the
        best time to determine the effectiveness of a vaccine or treatment.
        Mobilising these financial resources is an urgent priority for G20
        countries, philanthropy and the private sector.
      </p>`}
    </Text>
  );
};

const stories = storiesOf('Components/Text', module);

stories.add('Text', TextExample, {
  readme: { sidebar: Readme }
});
