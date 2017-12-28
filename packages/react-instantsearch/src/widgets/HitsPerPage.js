import React from 'react';
import PropTypes from 'prop-types';
import connectHitsPerPage from '../connectors/connectHitsPerPage';
import classNames from '../components/classNames';
import BaseWidget from '../components/BaseWidget';
import HitsPerPageSelectComponent from '../components/HitsPerPage';

const cx = classNames('HitsPerPage');

/**
 * The HitsPerPage widget displays a dropdown menu to let the user change the number
 * of displayed hits.
 *
 * If you only want to configure the number of hits per page without
 * displaying a widget, you should use the `<Configure hitsPerPage={20} />` widget. See [`<Configure /> documentation`](widgets/Configure.html)
 *
 * @name HitsPerPage
 * @kind widget
 * @propType {{value: number, label: string}[]} items - List of available options.
 * @propType {number} defaultRefinement - The number of items selected by default
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-HitsPerPage - the root div of the widget
 * @themeKey ais-HitsPerPage-header - the header of the widget (optional)
 * @themeKey ais-HitsPerPage-body - the body of the widget
 * @themeKey ais-HitsPerPage-select - the select
 * @themeKey ais-HitsPerPage-option - the select option
 * @themeKey ais-HitsPerPage-footer - the footer of the widget (optional)
 * @example
 * import React from 'react';

 * import { HitsPerPage, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <HitsPerPage
 *         defaultRefinement={20}
 *         items={[
 *           { value: 20, label: 'Show 20 hits' },
 *           { value: 50, label: 'Show 50 hits' },
 *          ]}
 *       />
 *     </InstantSearch>
 *   );
 * }
 */

const HitsPerPage = ({ renderHeader, renderFooter, ...props }) => (
  <BaseWidget
    cx={cx}
    canRefine
    renderHeader={renderHeader}
    renderFooter={renderFooter}
  >
    <HitsPerPageSelectComponent {...props} cx={cx} />
  </BaseWidget>
);

HitsPerPage.propTypes = {
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default connectHitsPerPage(HitsPerPage);
