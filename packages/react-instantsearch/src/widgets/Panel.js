import Panel from '../components/Panel.js';

/**
 * The Panel widget wraps other widgets in a consistent panel design. This component wrap by default
 * all the built in widgets. It act as a skeleton for each widget by providing to them header, body and footer.
 * Since it wraps all the built in widgets by default you should rarely use it directly, but we still
 * provide it as a standaone widget to enable the possibility to wrap you custom widget with it.
 *
 * @name Panel
 * @kind widget
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-Panel - the root div of the Panel
 * @themeKey ais-Panel--noRefinement - the root div of the Panel without refinement
 * @themeKey ais-Panel-header - the header of the Panel (optional)
 * @themeKey ais-Panel-body - the body of the Panel
 * @themeKey ais-Panel-footer - the footer of the Panel (optional)
 * @example
 * import React from 'react';
 *
 * import { Panel, InstantSearch } from 'react-instantsearch/dom';
 * import { connectRefinementList } from 'react-instantsearch/connectors';
 *
 * const CustomRefinementList = connectRefinementList(({ renderHeader }) => (
 *   <Panel renderHeader={renderHeader}>
 *     <div>My custom refinement list</div>
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
 *      <CustomRefinementList
 *        attributeName="category"
 *        renderHeader={() => 'Category'}
 *      />
 *     </InstantSearch>
 *   );
 * }
 */
export default Panel;
