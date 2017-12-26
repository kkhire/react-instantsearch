import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import {
  CurrentRefinements,
  RefinementList,
  Toggle,
} from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits } from './util';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

const stories = storiesOf('CurrentRefinements', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <CurrentRefinements />
        <div style={{ display: 'none' }}>
          <RefinementList
            attributeName="category"
            defaultRefinement={['Dining', 'Other']}
          />
        </div>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'without results',
    () => (
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <CurrentRefinements renderHeader={() => 'Header'} />
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
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <CurrentRefinements
          renderHeader={() => 'Header'}
          renderFooter={() => 'Footer'}
        />

        <div style={{ display: 'none' }}>
          <RefinementList
            attributeName="category"
            defaultRefinement={['Dining']}
          />
        </div>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with toggle',
    () => (
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <CurrentRefinements />
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
  );
