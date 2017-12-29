import React from 'react';
import connectCurrentRefinements from '../connectors/connectCurrentRefinements';
import classNames from '../components/classNames';
import AutoHideContainer from '../components/AutoHideContainer';
import Panel from '../components/Panel';
import ClearRefinementsComponent from '../components/ClearRefinements';

const cx = classNames('ClearRefinements');

/**
 * The ClearRefinements widget displays a button that lets the user clean every refinement applied
 * to the search.
 * @name ClearRefinements
 * @kind widget
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @propType {boolean} [clearsQuery=false] - Pass true to also clear the search query
 * @propType {boolean} [autoHideContainer=false] - Hide the container when no results match.
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-ClearRefinements - the root div of the widget
 * @themeKey ais-ClearRefinements-header - the header of the widget (optional)
 * @themeKey ais-ClearRefinements-body - the body of the widget
 * @themeKey ais-ClearRefinements-button - the clickable button
 * @themeKey ais-ClearRefinements-button--disabled - the disabled clickable button
 * @themeKey ais-ClearRefinements-footer - the footer of the widget (optional)
 * @translationKey reset - the clear all button value
 * @example
 * import React from 'react';
 *
 * import { ClearRefinements, RefinementList, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <ClearRefinements />
 *       <RefinementList
 *         attributeName="colors"
 *         defaultRefinement={['Black']}
 *       />
 *     </InstantSearch>
 *   );
 * }
 */

const ClearRefinements = connectCurrentRefinements(
  ({ canRefine, autoHideContainer, renderHeader, renderFooter, ...props }) => (
    <AutoHideContainer
      canRefine={canRefine}
      autoHideContainer={autoHideContainer}
    >
      <Panel
        cx={cx}
        canRefine={canRefine}
        renderHeader={renderHeader}
        renderFooter={renderFooter}
      >
        <ClearRefinementsComponent {...props} cx={cx} />
      </Panel>
    </AutoHideContainer>
  )
);

export default ClearRefinements;
