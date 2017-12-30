import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from './Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('Panel', () => {
  it('expect to render', () => {
    const wrapper = shallow(
      <Panel>
        <div>Hello content</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render without refinement', () => {
    const props = {
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
