# Corporate Components

## Table of contents

- [Usage](#usage)
  - [Install package from NPM](#install-package-from-npm)
  - [Link to package for local development](#link-to-package-for-local-development)
  - [Import desired component into your project](#import-desired-component-into-your-project)
  - [Import styles](#import-styles)
- [Development](#development)
  - [Run Storybook](#run-storybook)

## Usage

### Install package from NPM

TODO: setup package location
```bash
npm i <package-name>
```

### Link to package for local development

In your corporate-components project root run

```bash
npm link
```

To use in your project run

```bash
npm link corporate-components
```

Please note that the project must first be built in order to use the compiled distributable files.

[Read more about npm link](https://docs.npmjs.com/cli/link)


### Import desired component into your project

```js
import { AComp } from 'corporate-components';
```

### Import styles
 
```js
import 'corporate-components/dist/styles.css';
```

## Development

### Run Storybook

[Storybook](https://storybook.js.org/) is a UI development environment we are using to power our component library. Using Storybook allows us to work on components in isolation.

```bash
npm run storybook
```
