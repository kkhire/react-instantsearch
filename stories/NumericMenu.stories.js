import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { NumericMenu, Configure } from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits } from './util';

setAddon(JSXAddon);

storiesOf('NumericMenu', module)
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="NumericMenu">
        <NumericMenu
          attributeName="price"
          items={[
            { end: 10, label: '<$10' },
            { start: 10, end: 100, label: '$10-$100' },
            { start: 100, end: 500, label: '$100-$500' },
            { start: 500, label: '>$500' },
          ]}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with a default range selected',
    () => (
      <WrapWithHits linkedStoryGroup="NumericMenu">
        <NumericMenu
          attributeName="price"
          items={[
            { end: 10, label: '<$10' },
            { start: 10, end: 100, label: '$10-$100' },
            { start: 100, end: 500, label: '$100-$500' },
            { start: 500, label: '>$500' },
          ]}
          defaultRefinement=":10"
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with some non selectable ranges',
    () => (
      <WrapWithHits searchBox={false} linkedStoryGroup="NumericMenu">
        <NumericMenu
          attributeName="price"
          items={[
            { end: 10, label: '<$10' },
            { start: 10, end: 100, label: '$10-$100' },
            { start: 100, end: 500, label: '$100-$500' },
            { start: 90000, label: '>$90000' },
          ]}
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
      <WrapWithHits searchBox={false} linkedStoryGroup="NumericMenu">
        <Configure filters="price>200000" />

        <NumericMenu
          attributeName="price"
          items={[
            { end: 10, label: '<$10' },
            { start: 10, end: 100, label: '$10-$100' },
            { start: 100, end: 500, label: '$100-$500' },
            { start: 500, label: '>$500' },
          ]}
          renderHeader={() => 'Header'}
          autoHideContainer
        />
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
      <WrapWithHits searchBox={false} linkedStoryGroup="NumericMenu">
        <Configure filters="price>200000" />

        <NumericMenu
          attributeName="price"
          items={[
            { end: 10, label: '<$10' },
            { start: 10, end: 100, label: '$10-$100' },
            { start: 100, end: 500, label: '$100-$500' },
            { start: 500, label: '>$500' },
          ]}
          renderHeader={() => 'Header'}
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
      <WrapWithHits linkedStoryGroup="NumericMenu">
        <NumericMenu
          attributeName="price"
          items={[
            { end: 10, label: '<$10' },
            { start: 10, end: 100, label: '$10-$100' },
            { start: 100, end: 500, label: '$100-$500' },
            { start: 500, label: '>$500' },
          ]}
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
