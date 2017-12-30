import React from 'react';
import PropTypes from 'prop-types';

const Hits = ({ cx, hits, renderHit }) => (
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
  renderHit: PropTypes.func.isRequired,
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
