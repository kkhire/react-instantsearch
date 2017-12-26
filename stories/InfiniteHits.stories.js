import React from 'react';
import PropTypes from 'prop-types';
import { setAddon, storiesOf } from '@storybook/react';
import {
  InfiniteHits,
  Highlight,
  Snippet,
} from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits } from './util';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('InfiniteHits', module);

stories
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="Hits" pagination={false}>
        <InfiniteHits />
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
      <WrapWithHits linkedStoryGroup="Hits" pagination={false}>
        <InfiniteHits
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
    'with custom Component',
    () => (
      <WrapWithHits linkedStoryGroup="Hits" pagination={false}>
        <InfiniteHits hitComponent={Product} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with custom render function',
    () => (
      <WrapWithHits linkedStoryGroup="Hits" pagination={false}>
        <InfiniteHits renderHit={hit => <Product hit={hit} />} />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );

function Product({ hit }) {
  return (
    <div>
      <Highlight attributeName="name" hit={hit} />
      <p>
        <Highlight attributeName="type" hit={hit} />
      </p>
      <p>
        <Snippet attributeName="description" hit={hit} />
      </p>
    </div>
  );
}

Product.propTypes = {
  hit: PropTypes.object.isRequired,
};
