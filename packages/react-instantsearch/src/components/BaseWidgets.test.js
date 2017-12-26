import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BaseWidget from './BaseWidget';

Enzyme.configure({ adapter: new Adapter() });

describe('BaseWidget', () => {
  const defaultProps = {
    cx: (...args) => args.filter(x => Boolean(x)).join(' '),
    canRefine: true,
  };

  it('expect to render', () => {
    const props = {
      ...defaultProps,
    };

    const wrapper = shallow(
      <BaseWidget {...props}>
        <div>Hello content</div>
      </BaseWidget>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render without refinement', () => {
    const props = {
      ...defaultProps,
      canRefine: false,
    };

    const wrapper = shallow(
      <BaseWidget {...props}>
        <div>Hello content</div>
      </BaseWidget>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render with header', () => {
    const props = {
      ...defaultProps,
      renderHeader: () => 'Header',
    };

    const wrapper = shallow(
      <BaseWidget {...props}>
        <div>Hello content</div>
      </BaseWidget>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render with footer', () => {
    const props = {
      ...defaultProps,
      renderFooter: () => 'Footer',
    };

    const wrapper = shallow(
      <BaseWidget {...props}>
        <div>Hello content</div>
      </BaseWidget>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
