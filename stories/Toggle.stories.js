import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { Toggle } from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits } from './util';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('Toggle', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="Toggle">
        <Toggle
          attributeName="materials"
          label="Made with solid pine"
          value={'Solid pine'}
        />
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
      <WrapWithHits linkedStoryGroup="Toggle">
        <Toggle
          attributeName="materials"
          label="Made with solid pine"
          value={'Solid pine'}
          renderHeader={() => 'Toggle'}
          renderFooter={() => 'Footer'}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'checked by default',
    () => (
      <WrapWithHits linkedStoryGroup="Toggle">
        <Toggle
          attributeName="materials"
          label="Made with solid pine"
          value={'Solid pine'}
          defaultRefinement={true}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
