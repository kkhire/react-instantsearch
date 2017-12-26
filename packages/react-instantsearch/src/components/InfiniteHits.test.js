import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InfiniteHits from './InfiniteHits';

Enzyme.configure({ adapter: new Adapter() });

const Hit = ({ hit }) => <div id={hit.objectID} />;

Hit.propTypes = {
  hit: PropTypes.object,
};

describe('Hits', () => {
  it('accepts a hitComponent prop', () => {
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];

    const tree = renderer.create(
      <InfiniteHits
        cx={(...x) => x.join(' ')}
        hitComponent={Hit}
        hits={hits}
        hasMore={false}
        refine={() => undefined}
      />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('accepts a renderHit prop', () => {
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];

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

  it('calls refine when the load more button is clicked', () => {
    const mockedRefine = jest.fn();
    const hits = [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }];
    const wrapped = mount(
      <InfiniteHits
        cx={(...x) => x.join(' ')}
        refine={mockedRefine}
        hitComponent={Hit}
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
        hitComponent={Hit}
        hits={hits}
        hasMore={false}
      />
    );
    expect(wrapped.find('.loadMore').props().disabled).toBe(true);
  });
});
