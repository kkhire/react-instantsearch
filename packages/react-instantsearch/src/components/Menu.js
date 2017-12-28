import React, { Component } from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';
import Highlight from '../widgets/Highlight';
import List from './List';
import Link from './Link';

class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        isRefined: PropTypes.bool.isRequired,
      })
    ).isRequired,
    canRefine: PropTypes.bool.isRequired,
    cx: PropTypes.func.isRequired,
    isFromSearch: PropTypes.bool.isRequired,
    translate: PropTypes.func.isRequired,
    refine: PropTypes.func.isRequired,
    searchForItems: PropTypes.func.isRequired,
    createURL: PropTypes.func.isRequired,
    withSearchBox: PropTypes.bool,
    showMore: PropTypes.bool,
    limitMin: PropTypes.number,
    limitMax: PropTypes.number,
  };

  renderItem = (item, resetQuery) => {
    const { createURL, cx } = this.props;
    const label = this.props.isFromSearch ? (
      <Highlight attributeName="label" hit={item} />
    ) : (
      item.label
    );

    return (
      <Link
        className={cx('link')}
        onClick={() => this.selectItem(item, resetQuery)}
        href={createURL(item.value)}
      >
        <span className={cx('label')}>{label}</span>{' '}
        <span className={cx('count')}>{item.count}</span>
      </Link>
    );
  };

  selectItem = (item, resetQuery) => {
    resetQuery();
    this.props.refine(item.value);
  };

  render() {
    const {
      items,
      canRefine,
      showMore,
      limitMin,
      limitMax,
      isFromSearch,
      withSearchBox,
      translate,
      searchForItems,
      cx,
    } = this.props;

    return (
      <List
        items={items}
        canRefine={canRefine}
        isFromSearch={isFromSearch}
        cx={cx}
        translate={translate}
        searchForItems={searchForItems}
        renderItem={this.renderItem}
        selectItem={this.selectItem}
        withSearchBox={withSearchBox}
        showMore={showMore}
        limitMin={limitMin}
        limitMax={limitMax}
      />
    );
  }
}

export default translatable({
  showMore: extended => (extended ? 'Show less' : 'Show more'),
  noResults: 'No results',
  submit: null,
  reset: null,
  resetTitle: 'Clear the search query.',
  submitTitle: 'Submit your search query.',
  placeholder: 'Search here…',
})(Menu);
