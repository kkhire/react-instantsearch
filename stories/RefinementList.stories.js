import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { RefinementList, SearchBox } from '../packages/react-instantsearch/dom';
import { boolean, number, array } from '@storybook/addon-knobs';
import { displayName, filterProps, WrapWithHits } from './util';
import { orderBy } from 'lodash';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('RefinementList', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="RefinementList" hasPlayground={true}>
        <RefinementList attributeName="category" />
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
      <WrapWithHits linkedStoryGroup="RefinementList" hasPlayground={true}>
        <RefinementList
          attributeName="category"
          renderHeader={() => 'Refinement List'}
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
    'hidden with no items to refine',
    () => (
      <WrapWithHits
        searchBox={false}
        linkedStoryGroup="RefinementList"
        hasPlayground={true}
      >
        <RefinementList
          attributeName="category"
          renderHeader={() => 'Refinement List'}
          autoHideContainer
        />

        <div style={{ display: 'none' }}>
          <SearchBox defaultRefinement="ds" />
        </div>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'visible with no items to refine',
    () => (
      <WrapWithHits
        searchBox={false}
        linkedStoryGroup="RefinementList"
        hasPlayground={true}
      >
        <RefinementList
          attributeName="category"
          renderHeader={() => 'Refinement List'}
        />

        <div style={{ display: 'none' }}>
          <SearchBox defaultRefinement="ds" />
        </div>
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with selected item',
    () => (
      <WrapWithHits linkedStoryGroup="RefinementList" hasPlayground={true}>
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
    'with show more',
    () => (
      <WrapWithHits linkedStoryGroup="RefinementList" hasPlayground={true}>
        <RefinementList
          attributeName="category"
          limitMin={2}
          limitMax={5}
          showMore={true}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with search inside items',
    () => (
      <WrapWithHits linkedStoryGroup="RefinementList" hasPlayground={true}>
        <RefinementList attributeName="category" withSearchBox />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with the sort strategy changed',
    () => (
      <WrapWithHits linkedStoryGroup="RefinementList" hasPlayground={true}>
        <RefinementList
          attributeName="category"
          transformItems={items =>
            orderBy(items, ['label', 'count'], ['asc', 'desc'])
          }
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'playground',
    () => (
      <WrapWithHits linkedStoryGroup="RefinementList">
        <RefinementList
          attributeName="category"
          defaultRefinement={array('defaultSelectedItem', [
            'Decoration',
            'Lighting',
          ])}
          limitMin={number('limitMin', 10)}
          limitMax={number('limitMax', 20)}
          showMore={boolean('showMore', true)}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
