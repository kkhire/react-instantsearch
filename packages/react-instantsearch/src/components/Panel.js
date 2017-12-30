import React from 'react';
import PropTypes from 'prop-types';
import classNames from './classNames';

const Panel = ({ children, canRefine, cx, renderHeader, renderFooter }) => (
  <div className={cx('', !canRefine && '-noRefinement')}>
    {renderHeader && (
      <div className={`${cx('header')} ais-header`}>{renderHeader()}</div>
    )}

    <div className={`${cx('body')} ais-body`}>{children}</div>

    {renderFooter && (
      <div className={`${cx('footer')} ais-footer`}>{renderFooter()}</div>
    )}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  canRefine: PropTypes.bool,
  cx: PropTypes.func,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

Panel.defaultProps = {
  canRefine: true,
  cx: classNames('Panel'),
};

export default Panel;
