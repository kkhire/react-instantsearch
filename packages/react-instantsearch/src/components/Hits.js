import React from 'react';
import PropTypes from 'prop-types';

const Hits = ({ cx, hits, renderHit }) => (
  // Spread the hit on HitComponent instead of passing the full object. BC.
  // ex: <HitComponent {...hit} key={hit.objectID} />

  <ul className={cx('list')}>
    {hits.map(hit => (
      <li className={cx('item')} key={hit.objectID}>
        {renderHit(hit)}
      </li>
    ))}
  </ul>
);

Hits.propTypes = {
  cx: PropTypes.func.isRequired,
  hits: PropTypes.array,
  renderHit: PropTypes.func,
};

Hits.defaultProps = {
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

export default Hits;
