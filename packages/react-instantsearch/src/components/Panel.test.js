import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from './Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('Panel', () => {
  const defaultProps = {
    cx: (...args) => args.filter(x => Boolean(x)).join(' '),
  };

  it('expect to render', () => {
    const wrapper = shallow(
      <Panel>
        <div>Hello content</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render with custom cx', () => {
    const props = {
      ...defaultProps,
    };

    const wrapper = shallow(
      <Panel {...props}>
        <div>Hello content</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render without refinement', () => {
    const props = {
      ...defaultProps,
      canRefine: false,
    };

    const wrapper = shallow(
      <Panel {...props}>
        <div>Hello content</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render with header', () => {
    const props = {
      ...defaultProps,
      renderHeader: () => 'Header',
    };

    const wrapper = shallow(
      <Panel {...props}>
        <div>Hello content</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render with footer', () => {
    const props = {
      ...defaultProps,
      renderFooter: () => 'Footer',
    };

    const wrapper = shallow(
      <Panel {...props}>
        <div>Hello content</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
