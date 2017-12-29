import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { object, number } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import { RangeInput } from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits, WithoutResults } from './util';

setAddon(JSXAddon);

storiesOf('RangeInput', module)
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput attributeName="price" />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with precision of 0',
    () => (
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput attributeName="price" precision={0} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with default value',
    () => (
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput
          attributeName="price"
          defaultRefinement={{ min: 50, max: 200 }}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with min boundaries',
    () => (
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput attributeName="price" min={30} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with max boundaries',
    () => (
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput attributeName="price" max={500} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with min / max boundaries',
    () => (
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput attributeName="price" min={30} max={500} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with boundaries and default value',
    () => (
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput
          attributeName="price"
          min={30}
          max={500}
          defaultRefinement={{ min: 50, max: 200 }}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'hidden wihtout results',
    () => (
      <WrapWithHits searchBox={false} linkedStoryGroup="RangeInput">
        <RangeInput
          attributeName="price"
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
    'visible wihtout results',
    () => (
      <WrapWithHits searchBox={false} linkedStoryGroup="RangeInput">
        <RangeInput attributeName="price" renderHeader={() => 'Header'} />

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
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput
          attributeName="price"
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
      <WrapWithHits linkedStoryGroup="RangeInput">
        <RangeInput
          attributeName="price"
          min={number('min', 0)}
          max={number('max', 500)}
          precision={number('precision', 0)}
          defaultRefinement={object('default value', { min: 100, max: 400 })}
          translations={object('translations', {
            submit: ' go',
            separator: 'to',
          })}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
