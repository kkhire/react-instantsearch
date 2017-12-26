import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';

import classNames from './classNames';

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.node.isRequired,
    items: (...args) => itemsPropType(...args),
  })
);

class List extends Component {
  static propTypes = {
    cx: PropTypes.func.isRequired,
    // Only required with showMore.
    translate: PropTypes.func,
    items: itemsPropType,
    renderItem: PropTypes.func.isRequired,
    selectItem: PropTypes.func,
    showMore: PropTypes.bool,
    limitMin: PropTypes.number,
    limitMax: PropTypes.number,
    limit: PropTypes.number,
    show: PropTypes.func,
    searchForItems: PropTypes.func,
    withSearchBox: PropTypes.bool,
    isFromSearch: PropTypes.bool,
    canRefine: PropTypes.bool,
  };

  static defaultProps = {
    isFromSearch: false,
  };

  constructor() {
    super();

    this.state = {
      extended: false,
      query: '',
    };
  }

  onShowMoreClick = () => {
    this.setState(state => ({
      extended: !state.extended,
    }));
  };

  getLimit = () => {
    const { limitMin, limitMax } = this.props;
    const { extended } = this.state;
    return extended ? limitMax : limitMin;
  };

  resetQuery = () => {
    this.setState({ query: '' });
  };

  renderItem = (item, resetQuery) => {
    const { cx, renderItem } = this.props;

    return (
      <li
        key={item.key || item.label}
        className={cx(
          'item',
          item.isRefined && 'item--selected',
          item.noRefinement && 'item--noRefinement',
          item.items && 'item--parent'
        )}
      >
        {renderItem(item, resetQuery)}
        {item.items && (
          <ul className={cx('list', 'list--child')}>
            {item.items
              .slice(0, this.getLimit())
              .map(child => this.renderItem(child, item))}
          </ul>
        )}
      </li>
    );
  };

  renderShowMore() {
    const { extended } = this.state;
    const { items, limitMin, translate, cx } = this.props;
    const disabled = limitMin >= items.length;

    return (
      <button
        disabled={disabled}
        className={cx('showMore', disabled && 'showMore--disabled')}
        onClick={this.onShowMoreClick}
      >
        {translate('showMore', extended)}
      </button>
    );
  }

  renderSearchBox() {
    const { query } = this.state;
    const {
      cx,
      searchForItems,
      isFromSearch,
      translate,
      items,
      selectItem,
    } = this.props;

    return (
      <div className={cx('searchBox')}>
        <SearchBox
          cx={classNames('SearchBox')}
          currentRefinement={query}
          refine={value => {
            this.setState({ query: value });
            searchForItems(value);
          }}
          focusShortcuts={[]}
          translate={translate}
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
            if (isFromSearch) {
              selectItem(items[0], this.resetQuery);
            }
          }}
        />
        {!items.length &&
          query !== '' && (
            <div className={cx('noResults')}>{translate('noResults')}</div>
          )}
      </div>
    );
  }

  render() {
    const { cx, items, withSearchBox, showMore, canRefine } = this.props;
    const searchBox = withSearchBox && this.renderSearchBox();

    if (!items.length) {
      return <div>{searchBox}</div>;
    }

    // Always limit the number of items we show on screen, since the actual
    // number of retrieved items might vary with the `maxValuesPerFacet` config
    // option.
    const limit = this.getLimit();
    return (
      <div>
        {searchBox}
        <ul className={cx('list', !canRefine && 'list--noRefinement')}>
          {items
            .slice(0, limit)
            .map(item => this.renderItem(item, this.resetQuery))}
        </ul>
        {showMore && this.renderShowMore()}
      </div>
    );
  }
}

export default List;
