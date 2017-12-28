import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const SortBy = ({ items, currentRefinement, cx, refine }) => (
  <Select
    items={items}
    selectedItem={currentRefinement}
    cx={cx}
    onSelect={refine}
  />
);

SortBy.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentRefinement: PropTypes.string.isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
};

export default SortBy;
