import React from 'react';
import PropTypes from 'prop-types';

const BaseWidget = ({
  cx,
  children,
  cantRefine,
  renderHeader,
  renderFooter,
}) => (
  <div className={cx('', cantRefine && `-noRefinement`)}>
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
  cantRefine: PropTypes.bool,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default BaseWidget;
