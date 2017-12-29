import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import {
  CurrentRefinements,
  RefinementList,
  Toggle,
} from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits, LineBreak } from './util';

setAddon(JSXAddon);

storiesOf('CurrentRefinements', module)
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <CurrentRefinements />

        <LineBreak />

        <RefinementList
          attributeName="category"
          defaultRefinement={['Dining', 'Other']}
        />
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

        <LineBreak />

        <Toggle
          attributeName="materials"
          label="Made with solid pine"
          value={'Solid pine'}
        />

        <LineBreak />

        <RefinementList
          attributeName="category"
          defaultRefinement={['Dining']}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'hidden without refinement',
    () => (
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <CurrentRefinements autoHideContainer renderHeader={() => 'Header'} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'visible without refinement',
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
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
