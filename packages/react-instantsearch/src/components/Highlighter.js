import PropTypes from 'prop-types';
import React from 'react';

function generateKey(i, value) {
  return `split-${i}-${value}`;
}

export const Highlight = ({
  cx,
  value,
  highlightedTagName,
  isHighlighted,
  nonHighlightedTagName,
}) => {
  const TagName = isHighlighted ? highlightedTagName : nonHighlightedTagName;
  const className = isHighlighted ? 'highlighted' : 'nonHighlighted';
  return <TagName className={cx(className)}>{value}</TagName>;
};

Highlight.propTypes = {
  cx: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  highlightedTagName: PropTypes.string.isRequired,
  nonHighlightedTagName: PropTypes.string.isRequired,
};

export default function Highlighter({
  cx,
  hit,
  attributeName,
  highlight,
  highlightProperty,
  tagName,
  nonHighlightedTagName,
  renderSeparator,
}) {
  const parsedHighlightedValue = highlight({
    hit,
    attributeName,
    highlightProperty,
  });

  return (
    <span className={cx('')}>
      {parsedHighlightedValue.map((item, i) => {
        if (Array.isArray(item)) {
          const isLast = i === parsedHighlightedValue.length - 1;
          return (
            <span key={generateKey(i, hit[attributeName][i])}>
              {item.map((element, index) => (
                <Highlight
                  cx={cx}
                  key={generateKey(index, element.value)}
                  value={element.value}
                  highlightedTagName={tagName}
                  nonHighlightedTagName={nonHighlightedTagName}
                  isHighlighted={element.isHighlighted}
                />
              ))}
              {!isLast && (
                <span className={cx('separator')}>{renderSeparator()}</span>
              )}
            </span>
          );
        }

        return (
          <Highlight
            cx={cx}
            key={generateKey(i, item.value)}
            value={item.value}
            highlightedTagName={tagName}
            nonHighlightedTagName={nonHighlightedTagName}
            isHighlighted={item.isHighlighted}
          />
        );
      })}
    </span>
  );
}

Highlighter.propTypes = {
  cx: PropTypes.func.isRequired,
  hit: PropTypes.object.isRequired,
  attributeName: PropTypes.string.isRequired,
  highlight: PropTypes.func.isRequired,
  highlightProperty: PropTypes.string.isRequired,
  tagName: PropTypes.string,
  nonHighlightedTagName: PropTypes.string,
  renderSeparator: PropTypes.func,
};

Highlighter.defaultProps = {
  tagName: 'em',
  nonHighlightedTagName: 'span',
  renderSeparator: () => ', ',
};
