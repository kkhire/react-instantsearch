import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const Hits = ({ cx, hits, hitComponent, renderHit }) => (
  // Spread the hit on HitComponent instead of passing the full object. BC.
  // ex: <HitComponent {...hit} key={hit.objectID} />

  <ul className={cx('list')}>
    {hits.map(hit => (
      <li className={cx('item')} key={hit.objectID}>
        {renderHit ? renderHit(hit) : createElement(hitComponent, { hit })}
      </li>
    ))}
  </ul>
);

Hits.propTypes = {
  cx: PropTypes.func.isRequired,
  hits: PropTypes.array,
  hitComponent: PropTypes.func,
  renderHit: PropTypes.func,
};

Hits.defaultProps = {
  hitComponent: props => (
    <div
      style={{
        borderBottom: '1px solid #bbb',
        paddingBottom: '5px',
        marginBottom: '5px',
      }}
    >
      {JSON.stringify(props).slice(0, 100)}...
    </div>
  ),
};

export default Hits;
