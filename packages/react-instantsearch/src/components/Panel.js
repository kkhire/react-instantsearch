import React from 'react';
import PropTypes from 'prop-types';
import classNames from './classNames';

const Panel = ({ children, canRefine, cx, renderHeader, renderFooter }) => (
  <div className={cx('', !canRefine && '-noRefinement').trim()}>
    {renderHeader && (
      <div className={`${cx('header')} ais-header`.trim()}>
        {renderHeader()}
      </div>
    )}

    <div className={`${cx('body')} ais-body`.trim()}>{children}</div>

    {renderFooter && (
      <div className={`${cx('footer')} ais-footer`.trim()}>
        {renderFooter()}
      </div>
    )}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  cx: PropTypes.func,
  canRefine: PropTypes.bool,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

Panel.defaultProps = {
  cx: classNames('Panel'),
  canRefine: true,
};

export default Panel;
