import React from "react";
import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';
import GlobalStyles from '../src/tray-ds/styles/global';

addParameters({
  viewports: {
    /**
     * name to display in the dropdown
     * @type {String}
     */
    name: 'Responsive',

    /**
     * Inline styles to be applied to the story (iframe).
     * styles is an object whose key is the camelCased version of the style name, and whose
     * value is the style’s value, usually a string
     * @type {Object}
     */
    styles: {
      width: '100%',
      height: '100%',
    },

    /**
     * type of the device (e.g. desktop, mobile, or tablet)
     * @type {String}
     */
    type: 'desktop',
  },
  defaultViewport: 'someDefault',
});


addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(story => <><GlobalStyles />{story()}</>);