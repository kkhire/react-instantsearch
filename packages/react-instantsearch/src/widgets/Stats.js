import React from 'react';
import PropTypes from 'prop-types';
import BaseWidget from './BaseWidget';
import connectStats from '../connectors/connectStats.js';
import StatsComponent from '../components/Stats.js';
import classNames from '../components/classNames';

const cx = classNames('Stats');

/**
 * The Stats component displays the total number of matching hits and the time it took to get them (time spent in the Algolia server).
 * @name Stats
 * @kind widget
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-Stats - the root div of the widget
 * @themeKey ais-Stats-header - the header of the widget (optional)
 * @themeKey ais-Stats-body - the body of the widget
 * @themeKey ais-Stats-text - the text of the widget - the count of items for each item
 * @themeKey ais-Stats-footer - the footer of the widget (optional)
 * @translationkey stats - The string displayed by the stats widget. You get function(n, ms) and you need to return a string. n is a number of hits retrieved, ms is a processed time.
 * @example
 * import React from 'react';
 *
 * import { Stats, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <Stats />
 *     </InstantSearch>
 *   );
 * }
 */

const Widget = ({ renderHeader, renderFooter, ...props }) => (
  <BaseWidget
    cx={cx}
    canRefine
    renderHeader={renderHeader}
    renderFooter={renderFooter}
  >
    <StatsComponent {...props} cx={cx} />
  </BaseWidget>
);

Widget.propTypes = {
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default connectStats(Widget);
