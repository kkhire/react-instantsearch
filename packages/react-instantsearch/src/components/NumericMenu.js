import React from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';
import List from './List';

const NumericMenu = ({ items, canRefine, cx, refine, translate }) => (
  <List
    items={items.map(item => ({ ...item, key: item.value }))}
    showMore={false}
    canRefine={canRefine}
    cx={cx}
    renderItem={item => (
      <label className={cx('label')}>
        <input
          className={cx('radio')}
          type="radio"
          checked={item.isRefined}
          disabled={item.noRefinement}
          onChange={() => refine(item.value)}
        />
        <span className={cx('labelText')}>
          {item.value !== '' ? item.label : translate('all')}
        </span>
      </label>
    )}
  />
);

NumericMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
      isRefined: PropTypes.bool.isRequired,
      noRefinement: PropTypes.bool.isRequired,
    })
  ).isRequired,
  canRefine: PropTypes.bool.isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

export default translatable({
  all: 'All',
})(NumericMenu);
