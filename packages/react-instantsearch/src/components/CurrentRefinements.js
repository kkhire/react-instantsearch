import React from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';

export const CurrentRefinements = ({ items, cx, refine, translate }) => {
  const flatten = items.reduce(
    (acc, item) => (item.items ? acc.concat(item.items) : acc.concat(item)),
    []
  );

  return (
    <ul className={cx('list')}>
      {flatten.map(item => (
        <li key={item.label} className={cx('item')}>
          <button className={cx('button')} onClick={() => refine(item.value)}>
            <span className={cx('label')}>{item.label}</span>
            <span className={cx('delete')}>
              {translate('clearFilter', item)}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.func.isRequired,
    items: (...args) => itemsPropType(...args),
  })
);

CurrentRefinements.propTypes = {
  items: itemsPropType.isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

export default translatable({
  clearFilter: '✕',
})(CurrentRefinements);
