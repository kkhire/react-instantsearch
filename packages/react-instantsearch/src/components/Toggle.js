import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ currentRefinement, label, cx, refine }) => (
  <label className={cx('label')}>
    <input
      className={cx('checkbox')}
      type="checkbox"
      checked={currentRefinement}
      onChange={event => refine(event.currentTarget.checked)}
    />
    <span className={cx('labelText')}>{label}</span>
  </label>
);

Toggle.propTypes = {
  currentRefinement: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
};

export default Toggle;
