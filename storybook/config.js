import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from 'storybook-addon-a11y';
import { setOptions } from '@storybook/addon-options';

import 'instantsearch.css/themes/reset.css';
import 'instantsearch.css/themes/algolia.css';

setOptions({
  name: 'react-instantsearch',
  url: 'https://community.algolia.com/react-instantsearch/',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sidebarAnimations: false,
});

// adding decorators globally except for the JSX usage (added on a case per case basis)
// as not relevant for some stories with custom components
// or the ones that display unreadable output (MultiIndex, Highlight etc.)
addDecorator(withKnobs);
addDecorator(checkA11y);

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
