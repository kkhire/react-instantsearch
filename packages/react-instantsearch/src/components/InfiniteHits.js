import React from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';

const InfiniteHits = ({ cx, renderHit, hits, hasMore, refine, translate }) => (
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
      onClick={() => refine()}
      disabled={!hasMore}
    >
      {translate('loadMore')}
    </button>
  </div>
);

InfiniteHits.propTypes = {
  cx: PropTypes.func.isRequired,
  hits: PropTypes.array,
  renderHit: PropTypes.func,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
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
