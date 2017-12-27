import React from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';

export const InfiniteHits = ({
  hits,
  hasMore,
  cx,
  refine,
  translate,
  renderHit,
}) => (
  <div>
    <ul className={cx('list')}>
      {hits.map(hit => (
        <li key={hit.objectID} className={cx('item')}>
          {renderHit(hit)}
        </li>
      ))}
    </ul>

    <button
      className={cx('loadMore', !hasMore && 'loadMore--disabled')}
      onClick={refine}
      disabled={!hasMore}
    >
      {translate('loadMore')}
    </button>
  </div>
);

InfiniteHits.propTypes = {
  hits: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  renderHit: PropTypes.func,
};

InfiniteHits.defaultProps = {
  renderHit: hit => (
    <div
      style={{
        borderBottom: '1px solid #bbb',
        paddingBottom: '5px',
        marginBottom: '5px',
        wordBreak: 'break-all',
      }}
    >
      {JSON.stringify(hit).slice(0, 100)}...
    </div>
  ),
};

export default translatable({
  loadMore: 'Load more',
})(InfiniteHits);
