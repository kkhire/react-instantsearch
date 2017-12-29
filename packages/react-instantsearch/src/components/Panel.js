import React from 'react';
import PropTypes from 'prop-types';

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
  cx: () => '',
  canRefine: true,
};

export default Panel;
