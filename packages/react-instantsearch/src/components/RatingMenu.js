import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import translatable from '../core/translatable';

class RatingMenu extends Component {
  static propTypes = {
    cx: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    refine: PropTypes.func.isRequired,
    createURL: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    currentRefinement: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    count: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        count: PropTypes.number,
      })
    ),
    canRefine: PropTypes.bool.isRequired,
  };

  onClick(min, max, e) {
    e.preventDefault();
    e.stopPropagation();
    if (
      min === this.props.currentRefinement.min &&
      max === this.props.currentRefinement.max
    ) {
      this.props.refine({ min: this.props.min, max: this.props.max });
    } else {
      this.props.refine({ min, max });
    }
  }

  buildItem({
    cx,
    max,
    lowerBound,
    count,
    translate,
    createURL,
    isLastSelectableItem,
  }) {
    const disabled = !count;
    const isCurrentMinLower = this.props.currentRefinement.min < lowerBound;
    const selected =
      (isLastSelectableItem && isCurrentMinLower) ||
      (!disabled &&
        lowerBound === this.props.currentRefinement.min &&
        max === this.props.currentRefinement.max);

    const icons = [];
    let rating = 0;
    for (let icon = 0; icon < max; icon++) {
      if (icon < lowerBound) {
        rating++;
      }
      icons.push([
        <svg
          key={icon}
          className={cx(
            'starIcon',
            icon >= lowerBound ? 'starIcon--empty' : 'starIcon--full'
          )}
          aria-hidden="true"
          width="24"
          height="24"
        >
          <use
            xlinkHref={`#${cx(
              icon >= lowerBound ? 'starEmptySymbol' : 'starSymbol'
            )}`}
          />
        </svg>,
        ' ',
      ]);
    }

    // The last item of the list (the default item), should not
    // be clickable if it is selected.
    const onClickHandler =
      !disabled && (!isLastSelectableItem || !selected)
        ? {
            href: createURL({ min: lowerBound, max }),
            onClick: this.onClick.bind(this, lowerBound, max),
          }
        : {};

    return (
      <li
        key={lowerBound}
        className={cx(
          'item',
          selected && 'item--selected',
          disabled && 'item--disabled'
        )}
      >
        <a
          aria-label={`${rating}${translate('ratingLabel')}`}
          className={cx('link')}
          {...onClickHandler}
        >
          {icons}
          <span className={cx('label')} aria-hidden="true">
            {translate('ratingLabel')}
          </span>{' '}
          <span className={cx('count')}>{count}</span>
        </a>
      </li>
    );
  }

  render() {
    const {
      cx,
      translate,
      refine,
      min,
      max,
      count,
      createURL,
      canRefine,
    } = this.props;
    const items = [];
    for (let i = max; i >= min; i--) {
      const hasCount = !isEmpty(count.filter(item => Number(item.value) === i));
      const lastSelectableItem = count.reduce(
        (acc, item) =>
          item.value < acc.value || (!acc.value && hasCount) ? item : acc,
        {}
      );
      const itemCount = count.reduce(
        (acc, item) => (item.value >= i && hasCount ? acc + item.count : acc),
        0
      );
      items.push(
        this.buildItem({
          cx,
          lowerBound: i,
          max,
          refine,
          count: itemCount,
          translate,
          createURL,
          isLastSelectableItem: i === Number(lastSelectableItem.value),
        })
      );
    }
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol id={cx('starSymbol')} viewBox="0 0 24 24">
            <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
          </symbol>
          <symbol id={cx('starEmptySymbol')} viewBox="0 0 24 24">
            <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z" />
          </symbol>
        </svg>
        <ul className={cx('list', !canRefine && 'list--noRefinement')}>
          {items}
        </ul>
      </div>
    );
  }
}

export default translatable({
  ratingLabel: ' & Up',
})(RatingMenu);
