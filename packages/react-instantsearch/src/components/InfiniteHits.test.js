import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Connect, { InfiniteHits } from './InfiniteHits';

Enzyme.configure({ adapter: new Adapter() });

describe('InfiniteHits - Raw', () => {
  const defaultProps = {
    hits: [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }],
    hasMore: false,
    cx: (...x) => x.join(' '),
    refine: () => {},
    translate: x => x,
  };

  it('renders a default hit', () => {
    const props = {
      ...defaultProps,
    };

    const wrapper = shallow(<InfiniteHits {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a custom hit', () => {
    const props = {
      ...defaultProps,
      renderHit: hit => <div id={hit.objectID} />,
    };

    const wrapper = shallow(<InfiniteHits {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('button is disabled when it is the last page', () => {
    const props = {
      ...defaultProps,
      hasMore: false,
    };

    const wrapper = shallow(<InfiniteHits {...props} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });

  it('calls refine onClick', () => {
    const props = {
      ...defaultProps,
      refine: jest.fn(),
    };

    shallow(<InfiniteHits {...props} />)
      .find('button')
      .simulate('click');

    expect(props.refine).toHaveBeenCalled();
  });
});

describe('InfiniteHits - Connect', () => {
  const defaultProps = {
    hits: [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }],
    hasMore: false,
    cx: (...x) => x.join(' '),
    refine: () => {},
  };

  it('renders with translate', () => {
    const props = {
      ...defaultProps,
    };

    const wrapper = shallow(<Connect {...props} />).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
