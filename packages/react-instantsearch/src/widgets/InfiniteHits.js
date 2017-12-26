import React from 'react';
import PropTypes from 'prop-types';
import connectInfiniteHits from '../connectors/connectInfiniteHits';
import classNames from '../components/classNames';
import BaseWidget from '../components/BaseWidget';
import InfiniteHitsComponent from '../components/InfiniteHits';

const cx = classNames('InfiniteHits');

/**
 * Displays an infinite list of hits along with a **load more** button.
 *
 * To configure the number of hits being shown, use the [HitsPerPage widget](widgets/HitsPerPage.html),
 * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or the [Configure widget](widgets/Configure.html).
 *
 * @name InfiniteHits
 * @kind widget
 * @propType {Component} [hitComponent] - Component used for rendering each hit from
 *   the results. If it is not provided the rendering defaults to displaying the
 *   hit in its JSON form. The component will be called with a `hit` prop.
 * @propType {function} [renderHit] - Function used for rendering each hit from
 *   the results. If it is not provided the rendering defaults to displaying the
 *   hit in its JSON form. The function will be called with a `hit` as argument.
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-InfiniteHits - the root div of the widget
 * @themeKey ais-InfiniteHits-header - the header of the widget (optional)
 * @themeKey ais-InfiniteHits-body - the body of the widget
 * @themeKey ais-InfiniteHits-list - the list of hits
 * @themeKey ais-InfiniteHits-item - the hit list item
 * @themeKey ais-InfiniteHits-loadMore - the button used to display more results
 * @themeKey ais-InfiniteHits-loadMore--disabled - the disabled button used to display more results
 * @themeKey ais-InfiniteHits-footer - the footer of the widget (optional)
 * @translationKey loadMore - the label of load more button
 * @example
 * import React from 'react';

 * import { InfiniteHits, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <InfiniteHits />
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
    <InfiniteHitsComponent {...props} cx={cx} />
  </BaseWidget>
);

Widget.propTypes = {
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default connectInfiniteHits(Widget);
