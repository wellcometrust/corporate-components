# Corporate Components

## Table of contents

- [Usage](#usage)
  - [Install package from NPM](#install-package-from-npm)
  - [Link to component library package for local development](#link-to-component-library-package-for-local-development)
  - [Import desired component into your project](#import-desired-component-into-your-project)
  - [Import styles](#import-styles)
- [Development](#development)
  - [Run Storybook](#run-storybook)

## Usage

### Install package from NPM

(TODO: setup package location)
```bash
npm i <package-name>
```

### Link to component library package for local development

In your corporate-components project root run

```bash
npm link
```

To use in your project run

```bash
npm link corporate-components
```

Please note that the project must first be built in order to use the compiled distributable files.

**`npm link` commands will need to be rerun after any npm install operation.** 

[Read more about npm link](https://docs.npmjs.com/cli/link)


#### React Hooks errors?

This issue is caused by the very nature of the symlinks which npm uses to create the links. Effectively React is flagging up a possible duplicate instance of React.

To get round this you will need to link to the app instance of React by running the following command from the library root (assuming the library and app are in the same folder).

```bash
npm link ../corporate-react/node_modules/react
``` 

- [Read more about invalid React Hook call warning](https://reactjs.org/warnings/invalid-hook-call-warning.html)
- [Read more about Hooks + multiple instances of React on github](https://github.com/facebook/react/issues/13991)


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
