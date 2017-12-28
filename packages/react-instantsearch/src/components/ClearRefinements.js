import React from 'react';
import PropTypes from 'prop-types';
import translatable from '../core/translatable';

const ClearRefinements = ({ items, cx, refine, translate }) => {
  const isDisabled = items.length === 0;

  return (
    <button
      className={cx('button', isDisabled && 'button--disabled')}
      onClick={() => refine(items)}
      disabled={isDisabled}
    >
      {translate('reset')}
    </button>
  );
};

ClearRefinements.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

export default translatable({
  reset: 'Clear all filters',
})(ClearRefinements);
