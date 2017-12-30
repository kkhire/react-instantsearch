import PropTypes from 'prop-types';
/* eslint-env jest, jasmine */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import InfiniteHits from './InfiniteHits';

describe('Hits', () => {
  it('accepts a renderHit prop', () => {
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];
    const Hit = 'Hit';
    const tree = renderer.create(
      <InfiniteHits
        cx={(...x) => x.join(' ')}
        renderHit={hit => <Hit hit={hit} />}
        hits={hits}
        hasMore={false}
        refine={() => undefined}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const Hit = ({ hit }) => <div>{JSON.stringify(hit)}</div>;
  Hit.propTypes = { hit: PropTypes.object };

  it('calls refine when the load more button is clicked', () => {
    const mockedRefine = jest.fn();
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];
    const wrapped = mount(
      <InfiniteHits
        cx={(...x) => x.join(' ')}
        refine={mockedRefine}
        hits={hits}
        hasMore={true}
      />
    );
    expect(mockedRefine.mock.calls).toHaveLength(0);
    wrapped.find('.loadMore').simulate('click');
    expect(mockedRefine.mock.calls).toHaveLength(1);
  });

  it('Button is disabled when it is the last page', () => {
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];
    const wrapped = mount(
      <InfiniteHits
        cx={(...x) => x.join(' ')}
        refine={() => undefined}
        hits={hits}
        hasMore={false}
      />
    );
    expect(wrapped.find('.loadMore').props().disabled).toBe(true);
  });
});
