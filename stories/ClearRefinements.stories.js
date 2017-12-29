import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import {
  ClearRefinements,
  RefinementList,
} from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits } from './util';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

storiesOf('ClearRefinements', module)
  .addWithJSX(
    'with refinements to clear',
    () => (
      <WrapWithHits linkedStoryGroup="ClearRefinements">
        <ClearRefinements />

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
    'with refinements to clear with query',
    () => (
      <WrapWithHits linkedStoryGroup="ClearRefinements">
        <ClearRefinements clearsQuery />

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
      <WrapWithHits linkedStoryGroup="ClearRefinements">
        <ClearRefinements autoHideContainer renderHeader={() => 'Header'} />
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
      <WrapWithHits linkedStoryGroup="ClearRefinements">
        <ClearRefinements renderHeader={() => 'Header'} />
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
      <WrapWithHits linkedStoryGroup="ClearRefinements">
        <ClearRefinements
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
