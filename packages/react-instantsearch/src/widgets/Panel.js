import Panel from '../components/Panel';

/**
 * The Panel widget wraps other widgets in a consistent panel design. It's shipped by default on all the widget, but we still expose it as a standalone widget to enable to possibility to wrap your custom widget with it.
 *
 * It also reacts, indicates and set CSS classes when widgets are no more
 * relevant for refining. E.g. when a RefinementList becomes empty because of
 * the current search results.
 * @name Panel
 * @kind widget
 * @propType {boolean} [canRefine=true] - Indicate if the widget can be refine
 * @propType {function} [renderHeader] - Adds a header to the Panel.
 * @propType {function} [renderFooter] - Adds a footer to the Panel.
 * @themeKey ais-Panel - the root div of the Panel
 * @themeKey ais-Panel--noRefinement - the root div of the Panel without refinement
 * @themeKey ais-Panel-header - the header of the Panel (optional)
 * @themeKey ais-Panel-body - the body of the Panel
 * @themeKey ais-Panel-footer - the footer of the Panel (optional)
 * @example
 * import React from 'react';
 * import { InstantSearch, Panel } from 'react-instantsearch/dom';
 * import { connectRefinementList } from 'react-instantsearch/connectors';
 *
 * const MyCustomRefinementList = connectRefinementList(({ renderHeader }) => (
 *   <Panel renderHeader={renderHeader}>
 *     My custom refinement list
 *   </Panel>
 * ));
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <MyCustomRefinementList
 *         attributeName="category"
 *         renderHeader={() => 'Category'}
 *       />
 *     </InstantSearch>
 *   );
 * }
 */
export default Panel;
