import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { Stats } from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits } from './util';

import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('Stats', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="Stats">
        <div>
          <Stats />
        </div>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with header and footer',
    () => (
      <WrapWithHits linkedStoryGroup="Stats">
        <div>
          <Stats renderHeader={() => 'Header'} renderFooter={() => 'Footer'} />
        </div>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
