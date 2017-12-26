import PropTypes from 'prop-types';
/* eslint-env jest, jasmine */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import RefinementList from './RefinementList';

jest.mock('../widgets/Highlight', () => () => null);

describe('RefinementList', () => {
  it('default refinement list', () => {
    const tree = renderer
      .create(
        <RefinementList
          cx={(...x) => x.join(' ')}
          refine={() => null}
          createURL={() => '#'}
          searchForItems={() => null}
          items={[
            { label: 'white', value: ['white'], count: 10, isRefined: true },
            { label: 'black', value: ['black'], count: 20, isRefined: false },
            { label: 'blue', value: ['blue'], count: 30, isRefined: false },
          ]}
          limitMin={2}
          limitMax={4}
          showMore={true}
          isFromSearch={false}
          canRefine={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('refinement list with search inside items but no search results', () => {
    const tree = renderer
      .create(
        <RefinementList
          cx={(...x) => x.join(' ')}
          refine={() => null}
          searchForItems={() => null}
          withSearchBox
          createURL={() => '#'}
          items={[
            { label: 'white', value: ['white'], count: 10, isRefined: true },
            { label: 'black', value: ['black'], count: 20, isRefined: false },
            { label: 'blue', value: ['blue'], count: 30, isRefined: false },
          ]}
          isFromSearch={false}
          canRefine={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('refinement list with search inside items with search results', () => {
    const tree = renderer
      .create(
        <RefinementList
          cx={(...x) => x.join(' ')}
          refine={() => null}
          withSearchBox
          searchForItems={() => null}
          createURL={() => '#'}
          items={[
            {
              label: 'white',
              value: ['white'],
              count: 10,
              isRefined: true,
              _highlightResult: { label: 'white' },
            },
          ]}
          isFromSearch={true}
          canRefine={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies translations', () => {
    const tree = renderer
      .create(
        <RefinementList
          cx={(...x) => x.join(' ')}
          refine={() => null}
          searchForItems={() => null}
          withSearchBox
          createURL={() => '#'}
          items={[
            { label: 'white', value: ['white'], count: 10, isRefined: false },
            { label: 'black', value: ['black'], count: 20, isRefined: false },
            { label: 'blue', value: ['blue'], count: 30, isRefined: false },
          ]}
          isFromSearch={false}
          translations={{
            showMore: ' display more',
            noResults: ' no results',
            placeholder: 'placeholder',
          }}
          canRefine={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('refines its value on change', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <RefinementList
        cx={(...x) => x.join(' ')}
        refine={refine}
        searchForItems={() => null}
        createURL={() => '#'}
        items={[
          { label: 'white', value: ['white'], count: 10, isRefined: false },
          { label: 'black', value: ['black'], count: 20, isRefined: false },
          { label: 'blue', value: ['blue'], count: 30, isRefined: false },
        ]}
        isFromSearch={false}
        canRefine={true}
      />
    );

    const items = wrapper.find('.item');

    expect(items).toHaveLength(3);

    const firstItem = items.first().find('.checkbox');

    firstItem.simulate('change', { target: { checked: true } });

    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toEqual(['white']);

    wrapper.unmount();
  });

  it('should respect defined limits', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <RefinementList
        cx={(...x) => x.join(' ')}
        refine={refine}
        searchForItems={() => null}
        createURL={() => '#'}
        items={[
          { label: 'white', value: ['white'], count: 10, isRefined: false },
          { label: 'black', value: ['black'], count: 20, isRefined: false },
          { label: 'blue', value: ['blue'], count: 30, isRefined: false },
          { label: 'red', value: ['red'], count: 30, isRefined: false },
          { label: 'green', value: ['green'], count: 30, isRefined: false },
        ]}
        limitMin={2}
        limitMax={4}
        showMore={true}
        isFromSearch={false}
        canRefine={true}
      />
    );

    const items = wrapper.find('.item');

    expect(items).toHaveLength(2);

    wrapper.find('.showMore').simulate('click');

    expect(wrapper.find('.item')).toHaveLength(4);

    wrapper.unmount();
  });

  it('should disabled show more when no more item to display', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <RefinementList
        cx={(...x) => x.join(' ')}
        refine={refine}
        searchForItems={() => null}
        createURL={() => '#'}
        items={[
          { label: 'white', value: ['white'], count: 10, isRefined: false },
          { label: 'black', value: ['black'], count: 20, isRefined: false },
        ]}
        limitMin={2}
        limitMax={4}
        showMore={true}
        isFromSearch={false}
        canRefine={true}
      />
    );

    const items = wrapper.find('.item');

    expect(items).toHaveLength(2);

    expect(wrapper.find('.showMore--disabled')).toBeDefined();

    wrapper.unmount();
  });

  describe('search inside items', () => {
    const refine = jest.fn();
    const searchForItems = jest.fn();
    const refinementList = (
      <RefinementList
        cx={(...x) => x.join(' ')}
        refine={refine}
        withSearchBox
        searchForItems={searchForItems}
        createURL={() => '#'}
        items={[
          {
            label: 'white',
            value: ['white'],
            count: 10,
            isRefined: false,
            _highlightResult: { label: { value: 'white' } },
          },
          {
            label: 'black',
            value: ['black'],
            count: 20,
            isRefined: false,
            _highlightResult: { label: { value: 'black' } },
          },
        ]}
        isFromSearch={true}
        canRefine={true}
      />
    );

    it('a searchbox should be displayed if the feature is activated', () => {
      const wrapper = mount(refinementList);

      const searchBox = wrapper.find('.searchBox');

      expect(searchBox).toBeDefined();

      wrapper.unmount();
    });

    it('searching for a value should call searchForItems', () => {
      const wrapper = mount(refinementList);

      wrapper
        .find('.searchBox input')
        .simulate('change', { target: { value: 'query' } });

      expect(searchForItems.mock.calls).toHaveLength(1);
      expect(searchForItems.mock.calls[0][0]).toBe('query');

      wrapper.unmount();
    });

    it('should refine the selected value and display selected refinement back', () => {
      const wrapper = mount(refinementList);

      const firstItem = wrapper
        .find('.item')
        .first()
        .find('.checkbox');
      firstItem.simulate('change', { target: { checked: true } });

      expect(refine.mock.calls).toHaveLength(1);
      expect(refine.mock.calls[0][0]).toEqual(['white']);
      expect(wrapper.find('.searchBox input').props().value).toBe('');

      const selectedRefinements = wrapper.find('.item');
      expect(selectedRefinements).toHaveLength(2);

      wrapper.unmount();
    });

    it('hit enter on the search values results list should refine the first facet value', () => {
      refine.mockClear();
      const wrapper = mount(refinementList);

      wrapper.find('form').simulate('submit');

      expect(refine.mock.calls).toHaveLength(1);
      expect(refine.mock.calls[0][0]).toEqual(['white']);
      expect(wrapper.find('.searchBox input').props().value).toBe('');

      const selectedRefinements = wrapper.find('.item');
      expect(selectedRefinements).toHaveLength(2);

      wrapper.unmount();
    });
  });
});
