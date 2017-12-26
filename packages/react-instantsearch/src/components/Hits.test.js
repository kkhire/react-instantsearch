import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Hits from './Hits';

const Hit = ({ hit }) => <div id={hit.objectID} />;

Hit.propTypes = {
  hit: PropTypes.object,
};

describe('Hits', () => {
  it('accepts a hitComponent prop', () => {
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];

    const tree = renderer.create(
      <Hits cx={(...x) => x.join(' ')} hits={hits} hitComponent={Hit} />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('accepts a renderHit prop', () => {
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];

    const tree = renderer.create(
      <Hits
        cx={(...x) => x.join(' ')}
        hits={hits}
        renderHit={hit => <Hit hit={hit} />}
      />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
