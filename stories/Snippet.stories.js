import PropTypes from 'prop-types';
import React from 'react';
import { Snippet, Hits } from '../packages/react-instantsearch/dom';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { WrapWithHits } from './util';

const stories = storiesOf('Snippet', module);

const Default = ({ hit }) => (
  <article>
    <p>
      <Snippet attributeName="name" hit={hit} />
    </p>
    <p>
      <Snippet attributeName="description" hit={hit} />
    </p>
  </article>
);

Default.propTypes = {
  hit: PropTypes.object.isRequired,
};

const StrongHits = ({ hit }) => (
  <article>
    <p>
      <Snippet
        attributeName="name"
        tagName={text('tag name (title)', 'strong')}
        hit={hit}
      />
    </p>
    <p>
      <Snippet
        attributeName="description"
        tagName={text('tag name (description)', 'strong')}
        hit={hit}
      />
    </p>
  </article>
);

StrongHits.propTypes = {
  hit: PropTypes.object.isRequired,
};

stories
  .add('default', () => (
    <WrapWithHits linkedStoryGroup="Snippet">
      <Hits renderHit={hit => <Default hit={hit} />} />
    </WrapWithHits>
  ))
  .add('playground', () => (
    <WrapWithHits linkedStoryGroup="Snippet">
      <Hits renderHit={hit => <StrongHits hit={hit} />} />
    </WrapWithHits>
  ));
