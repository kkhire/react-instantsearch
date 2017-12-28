import React from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';
import List from './List';
import Link from './Link';

const HierarchicalMenu = ({
  items,
  canRefine,
  cx,
  refine,
  createURL,
  translate,
  showMore,
  limitMin,
  limitMax,
}) => (
  <List
    items={items}
    canRefine={canRefine}
    showMore={showMore}
    limitMin={limitMin}
    limitMax={limitMax}
    cx={cx}
    translate={translate}
    renderItem={item => (
      <Link
        className={cx('link')}
        onClick={() => refine(item.value)}
        href={createURL(item.value)}
      >
        <span className={cx('label')}>{item.label}</span>{' '}
        <span className={cx('count')}>{item.count}</span>
      </Link>
    )}
  />
);

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    value: PropTypes.string,
    items: (...args) => itemsPropType(...args),
  })
);

HierarchicalMenu.propTypes = {
  items: itemsPropType.isRequired,
  canRefine: PropTypes.bool.isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
  createURL: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  showMore: PropTypes.bool,
  limitMin: PropTypes.number,
  limitMax: PropTypes.number,
};

export default translatable({
  showMore: extended => (extended ? 'Show less' : 'Show more'),
})(HierarchicalMenu);
