import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import {
  CurrentRefinements,
  RefinementList,
  Toggle,
  Panel,
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
        <div>
          <CurrentRefinements />
          <div style={{ display: 'none' }}>
            <RefinementList
              attributeName="category"
              defaultRefinement={['Dining', 'Other']}
            />
          </div>
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
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <div>
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
        <div>
          <CurrentRefinements />
          <Toggle
            attributeName="materials"
            label="Made with solid pine"
            value={'Solid pine'}
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
    'with panel',
    () => (
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <Panel title="Current Refinements">
          <CurrentRefinements />
          <div style={{ display: 'none' }}>
            <RefinementList
              attributeName="category"
              defaultRefinement={['Dining']}
            />
          </div>
        </Panel>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with panel but no refinement',
    () => (
      <WrapWithHits linkedStoryGroup="CurrentRefinements">
        <Panel title="Current Refinements">
          <CurrentRefinements />
        </Panel>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
