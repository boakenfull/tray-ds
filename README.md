## Tray DS

Design System for internal teams rendered in Storybook.

### Hosted Examples
* [Storybook](http://icy-carpenter.surge.sh/)

### Running Locally

To run the project locally

```sh
yarn install
yarn start-storybook
```

### Testing

To run unit tests

```sh
yarn test
```

### Styling

Styles are handled at a component level using [Styled Components](https://styled-components.com/). Global variables should be defined in the `styles/` directory to keep consistency.

### Components

1) Button
2) Card
3) Tag
4) Text
5) Icon
6) Colour Palette

### Storybook Addons

A series of storybook addons have been installed to help the developer/designer/product owner to understand how the components work.

* Knobs - specific props of the components are made available for people to see how the component behaves when these are changed
* Accessibility - this reads the component to ensure, the structure and colours are compliant
* Actions - shows feedback when the user interacts with a component
* Viewport - simulate different device widths

### Structure

* `src/tray-ds` in this example, here is where the design system components are stored. In a live example, these components would be in their own project, published to NPM, ready for other web apps to consume the (version controlled) components.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
