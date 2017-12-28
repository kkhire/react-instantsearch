import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const HitsPerPage = ({ items, currentRefinement, cx, refine }) => (
  <Select
    onSelect={refine}
    selectedItem={currentRefinement}
    items={items}
    cx={cx}
  />
);

HitsPerPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
  currentRefinement: PropTypes.number.isRequired,
  cx: PropTypes.func.isRequired,
  refine: PropTypes.func.isRequired,
};

export default HitsPerPage;
