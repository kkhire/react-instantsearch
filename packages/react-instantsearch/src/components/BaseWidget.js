import React from 'react';
import PropTypes from 'prop-types';

const BaseWidget = ({
  cx,
  children,
  canRefine,
  renderHeader,
  renderFooter,
}) => (
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

BaseWidget.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  canRefine: PropTypes.bool.isRequired,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default BaseWidget;
