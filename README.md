# Corporate Components

## Table of contents

- [Usage](#usage)
  1. [Clone this repo](#clone-this-repo)
  2. [Setup NPM Link](#setup-npm-link-for-local-development)
  3. [Setup consumer project](#setup-a-consumer-project)
  4. [Import desired component into your project](#import-desired-component-into-your-project)
  5. [Import styles](#import-styles)
- [Issues](#issues)
  - [React Hooks errors?](#react-hooks-errors)
  - [Permissions](#permissions-with-npm-link)
- [Development](#development)
  - [Develop](#develop)
  - [Build](#build)
  - [Run Storybook](#run-storybook)

## Usage

### 1. Clone this repo

(TODO: setup npm package location)

`git clone git@github.com:wellcometrust/corporate-components.git`

### 2. Setup NPM Link (for local development)

You need to setup a symlink inside the corporate-components project, in order to use it inside another local project. From the `corporate-components` root, run:

```bash
npm link
```

**`npm link` commands will need to be rerun after any npm install operation.**

[Read more about npm link](https://docs.npmjs.com/cli/link)

### 3. Setup a consumer project

If you need to set up a new project, we recommend using [create-react-app](https://github.com/facebook/create-react-app) to get started quickly.

Once you have a project you want to import `corporate-components` into, `cd` in to your new project's root and run:

```bash
npm link corporate-components
```

Please note that `corporate-components` must first be built in order to use the compiled distributable files.

### 4. Import desired component(s) into your project

```js
import { AComp } from 'corporate-components';
```

### 5. Import styles

```js
import 'corporate-components/dist/styles.css';
```

## Issues

### React Hooks errors?

This issue is caused by the very nature of the symlinks which npm uses to create the links. Effectively React is flagging up a possible duplicate instance of React.

To get round this you will need to link to the app instance of React by running the following command from the library root (assuming the library and app are in the same folder).

```bash
npm link ../corporate-react/node_modules/react
```

- [Read more about invalid React Hook call warning](https://reactjs.org/warnings/invalid-hook-call-warning.html)
- [Read more about Hooks + multiple instances of React on github](https://github.com/facebook/react/issues/13991)

### Permissions (with npm link)

```bash
sudo npm link
```

## Development

### Develop

Watch and compile files on change.

```bash
npm run dev
```

### Build

Builds files for distribution.

```bash
npm run build
```

### Run Storybook

[Storybook](https://storybook.js.org/) is a UI development environment we are using to power our component library. Using Storybook allows us to work on components in isolation.

```bash
npm run storybook
```
