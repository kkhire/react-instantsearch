import React from 'react';
import connectMenu from '../connectors/connectMenu';
import classNames from '../components/classNames';
import AutoHideContainer from '../components/AutoHideContainer';
import Panel from '../components/Panel';
import MenuSelectComponent from '../components/MenuSelect';

const cx = classNames('MenuSelect');

/**
 * The MenuSelect component displays a select that lets the user choose a single value for a specific attribute.
 * @name MenuSelect
 * @kind widget
 * @requirements The attribute passed to the `attributeName` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 * @propType {string} attributeName - the name of the attribute in the record
 * @propType {string} [defaultRefinement] - the value of the item selected by default
 * @propType {boolean} [autoHideContainer=false] - Hide the container when there are no items in the menu.
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-MenuSelect - the root div of the widget
 * @themeKey ais-MenuSelect-header - the header of the widget (optional)
 * @themeKey ais-MenuSelect-body - the body of the widget
 * @themeKey ais-MenuSelect-select - the `<select>`
 * @themeKey ais-MenuSelect-option - the select `<option>`
 * @themeKey ais-MenuSelect-footer - the footer of the widget (optional)
 * @translationkey seeAllOption - The label of the option to select to remove the refinement
 * @example
 * import React from 'react';
 *
 * import { MenuSelect, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <MenuSelect attributeName="category" />
 *     </InstantSearch>
 *   );
 * }
 */

const MenuSelect = connectMenu(
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
        <MenuSelectComponent {...props} cx={cx} canRefine={canRefine} />
      </Panel>
    </AutoHideContainer>
  )
);

export default MenuSelect;
