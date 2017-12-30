import PropTypes from 'prop-types';
/* eslint-env jest, jasmine */

import React from 'react';
import renderer from 'react-test-renderer';

import Hits from './Hits';

describe('Hits', () => {
  it('accepts a renderHit prop', () => {
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];
    const Hit = ({ hit }) => <div id={hit.objectID} />;
    Hit.propTypes = {
      hit: PropTypes.object,
    };
    const tree = renderer.create(
      <Hits
        renderHit={hit => <Hit hit={hit} />}
        hits={hits}
        cx={(...x) => x.join(' ')}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
