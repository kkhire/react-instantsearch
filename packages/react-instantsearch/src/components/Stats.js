import React from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';

const Stats = ({ nbHits, processingTimeMS, cx, translate }) => (
  <span className={cx('text')}>
    {translate('stats', nbHits, processingTimeMS)}
  </span>
);

Stats.propTypes = {
  nbHits: PropTypes.number.isRequired,
  processingTimeMS: PropTypes.number.isRequired,
  cx: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

export default translatable({
  stats: (n, ms) =>
    `${n.toLocaleString()} results found in ${ms.toLocaleString()}ms`,
})(Stats);
