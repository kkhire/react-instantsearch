import React from 'react';
import { orderBy } from 'lodash';
import { setAddon, storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { displayName, filterProps, WrapWithHits, WithoutResults } from './util';
import { MenuSelect } from '../packages/react-instantsearch/dom';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('MenuSelect', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits hasPlayground={true} linkedStoryGroup="MenuSelect">
        <MenuSelect attributeName="category" />
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
      <WrapWithHits searchBox={false} linkedStoryGroup="MenuSelect">
        <MenuSelect attributeName="category" />
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
      <WrapWithHits hasPlayground={true} linkedStoryGroup="MenuSelect">
        <MenuSelect
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
    'with default selected item',
    () => (
      <WrapWithHits hasPlayground={true} linkedStoryGroup="MenuSelect">
        <MenuSelect attributeName="category" defaultRefinement="Eating" />
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
      <WrapWithHits hasPlayground={true} linkedStoryGroup="MenuSelect">
        <MenuSelect
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
      <WrapWithHits linkedStoryGroup="MenuSelect">
        <MenuSelect
          attributeName="category"
          defaultRefinement={text('defaultSelectedItem', 'Bathroom')}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with localized count',
    () => (
      <WrapWithHits linkedStoryGroup="MenuSelect">
        <MenuSelect
          attributeName="category"
          defaultRefinement={text('defaultSelectedItem', 'Bathroom')}
          transformItems={items =>
            items.map(({ count, ...item }) => ({
              ...item,
              count: (count + 1000).toLocaleString(),
            }))
          }
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
