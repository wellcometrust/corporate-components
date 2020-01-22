import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

const FooterExample = () => <Footer />;

const stories = storiesOf('Components|Footer', module);

stories.add('Footer', FooterExample);
