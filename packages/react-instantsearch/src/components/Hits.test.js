import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hits from './Hits';

Enzyme.configure({ adapter: new Adapter() });

describe('Hits', () => {
  const defaultProps = {
    cx: (...args) => args.join(' '),
    hits: [{ objectID: 0 }, { objectID: 1 }, { objectID: 2 }],
  };

  it('render the default hit', () => {
    const props = {
      ...defaultProps,
    };

    const wrapper = shallow(<Hits {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('render a custom hit', () => {
    const props = {
      ...defaultProps,
      renderHit: hit => <div id={hit.objectID} />,
    };

    const wrapper = shallow(<Hits {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
