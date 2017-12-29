import { orderBy } from 'lodash';
import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Menu } from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits, WithoutResults } from './util';

setAddon(JSXAddon);

storiesOf('Menu', module)
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="Menu">
        <Menu attributeName="category" />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with default selected item',
    () => (
      <WrapWithHits linkedStoryGroup="Menu">
        <Menu attributeName="category" defaultRefinement="Eating" />
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
      <WrapWithHits linkedStoryGroup="Menu">
        <Menu
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
      <WrapWithHits linkedStoryGroup="Menu">
        <Menu
          attributeName="category"
          withSearchBox
          transformItems={items =>
            orderBy(
              items,
              ['isRefined', 'count', 'label'],
              ['desc', 'desc', 'asc']
            )
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
    'with the sort strategy changed',
    () => (
      <WrapWithHits linkedStoryGroup="Menu">
        <Menu
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
    'hidden without refinement',
    () => (
      <WrapWithHits searchBox={false} linkedStoryGroup="Menu">
        <Menu
          attributeName="category"
          renderHeader={() => 'Header'}
          autoHideContainer
        />

        <WithoutResults />
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
      <WrapWithHits searchBox={false} linkedStoryGroup="Menu">
        <Menu attributeName="category" renderHeader={() => 'Header'} />

        <WithoutResults />
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
      <WrapWithHits linkedStoryGroup="Menu">
        <Menu
          attributeName="category"
          renderHeader={() => 'Header'}
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
    'playground',
    () => (
      <WrapWithHits linkedStoryGroup="Menu">
        <Menu
          attributeName="category"
          defaultRefinement={text('defaultSelectedItem', 'Bathroom')}
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
