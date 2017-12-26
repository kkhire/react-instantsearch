import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from './Highlighter';

export default function Highlight(props) {
  return <Highlighter highlightProperty="_highlightResult" {...props} />;
}

Highlight.propTypes = {
  hit: PropTypes.object.isRequired,
  attributeName: PropTypes.string.isRequired,
  highlight: PropTypes.func.isRequired,
  tagName: PropTypes.string,
  nonHighlightedTagName: PropTypes.string,
  renderSeparator: PropTypes.func,
};
