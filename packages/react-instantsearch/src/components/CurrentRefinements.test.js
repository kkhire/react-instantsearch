import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Connect, { CurrentRefinements } from './CurrentRefinements';

Enzyme.configure({ adapter: new Adapter() });

describe('CurrentRefinements - Raw', () => {
  const defaultProps = {
    items: [],
    cx: (...x) => x.join(' '),
    refine: () => {},
    translate: x => x,
  };

  it('renders a list of current refinements', () => {
    const props = {
      ...defaultProps,
      items: [
        {
          label: 'Genre',
          value: () => {},
        },
      ],
    };

    const wrapper = shallow(<CurrentRefinements {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list of nested current refinements', () => {
    const props = {
      ...defaultProps,
      items: [
        {
          label: 'Genre',
          value: () => {},
          items: [
            {
              label: 'Sci-fi',
              value: () => {},
            },
          ],
        },
      ],
    };

    const wrapper = shallow(<CurrentRefinements {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('call refine onClick', () => {
    const props = {
      ...defaultProps,
      items: [
        {
          label: 'Genre',
          value: () => {},
        },
      ],
      refine: jest.fn(),
    };

    shallow(<CurrentRefinements {...props} />)
      .find('button')
      .simulate('click');

    expect(props.refine).toHaveBeenCalledWith(expect.any(Function));
  });
});

describe('CurrentRefinements - Connect', () => {
  const defaultProps = {
    items: [],
    cx: (...x) => x.join(' '),
    refine: () => {},
  };

  it('renders with translate', () => {
    const props = {
      ...defaultProps,
      items: [
        {
          label: 'Genre',
          value: () => {},
        },
      ],
    };

    const wrapper = shallow(<Connect {...props} />).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
