import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { RatingMenu, Configure } from '../packages/react-instantsearch/dom';
import { object, number } from '@storybook/addon-knobs';
import { displayName, filterProps, WrapWithHits, WithoutResults } from './util';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('RatingMenu', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="RatingMenu">
        <RatingMenu attributeName="rating" max={6} min={1} />
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
      <WrapWithHits searchBox={false} linkedStoryGroup="RatingMenu">
        <RatingMenu attributeName="rating" max={6} min={1} />
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
      <WrapWithHits linkedStoryGroup="RatingMenu">
        <RatingMenu
          attributeName="rating"
          max={6}
          min={1}
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
    'with some unavailable refinements',
    () => (
      <WrapWithHits linkedStoryGroup="RatingMenu">
        <Configure filters="rating>=4" />
        <RatingMenu attributeName="rating" max={6} min={1} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with filter on rating',
    () => (
      <WrapWithHits linkedStoryGroup="RatingMenu">
        <Configure filters="rating>2" />
        <RatingMenu attributeName="rating" max={6} min={1} />
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
      <WrapWithHits linkedStoryGroup="RatingMenu">
        <RatingMenu
          attributeName="rating"
          max={number('max', 6)}
          translations={object('translations', { ratingLabel: ' & Up' })}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
