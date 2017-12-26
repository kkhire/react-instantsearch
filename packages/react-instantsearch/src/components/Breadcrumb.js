import PropTypes from 'prop-types';
import React, { Component } from 'react';
import translatable from '../core/translatable';
import Link from './Link';

class Breadcrumb extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    canRefine: PropTypes.bool.isRequired,
    cx: PropTypes.func.isRequired,
    createURL: PropTypes.func.isRequired,
    refine: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    rootURL: PropTypes.string,
    renderSeparator: PropTypes.func,
  };

  static defaultProps = {
    renderSeparator: () => '>',
  };

  render() {
    const {
      items,
      canRefine,
      cx,
      createURL,
      refine,
      translate,
      rootURL,
      renderSeparator,
    } = this.props;

    const rootPath = canRefine ? (
      <li className={cx('item')}>
        <Link
          className={cx('link')}
          onClick={() => (!rootURL ? refine() : null)}
          href={rootURL ? rootURL : createURL()}
        >
          {translate('rootLabel')}
        </Link>
      </li>
    ) : null;

    const breadcrumb = items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      return (
        <li className={cx('item', isLast && 'item--selected')} key={idx}>
          <span className={cx('separator')}>{renderSeparator()}</span>
          {!isLast ? (
            <Link
              className={cx('link')}
              onClick={() => refine(item.value)}
              href={createURL(item.value)}
            >
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </li>
      );
    });

    return (
      <ul className={cx('list')}>
        {rootPath}
        {breadcrumb}
      </ul>
    );
  }
}

export default translatable({
  rootLabel: 'Home',
})(Breadcrumb);
