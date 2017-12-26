import React from 'react';
import PropTypes from 'prop-types';
import connectBreadcrumb from '../connectors/connectBreadcrumb';
import classNames from '../components/classNames';
import BaseWidget from '../components/BaseWidget';
import BreadcrumbComponent from '../components/Breadcrumb';

const cx = classNames('Breadcrumb');

/**
 * A breadcrumb is a secondary navigation scheme that allows the user to see where the current page
 * is in relation to the website or web application’s hierarchy.
 * In terms of usability, using a breadcrumb reduces the number of actions a visitor needs to take in
 * order to get to a higher-level page.
 *
 * If you want to select a specific refinement for your Breadcrumb component, you will need to use a Virtual Hierarchical Menu
 * (https://community.algolia.com/react-instantsearch/guide/Virtual_widgets.html) and set its
 * defaultRefinement that will be then used by the Breadcrumb.
 *
 * @name Breadcrumb
 * @kind widget
 * @requirements Breadcrumbs are used for websites with a large amount of content organised in a hierarchical manner.
 * The typical example is an e-commerce website which has a large variety of products grouped into logical categories
 * (with categories, subcategories which also have subcategories).To use this widget, your attributes must be formatted in a specific way.
 *
 * Keep in mind that breadcrumbs shouldn’t replace effective primary navigation menus:
 * it is only an alternative way to navigate around the website.
 *
 * If, for instance, you would like to have a breadcrumb of categories, objects in your index
 * should be formatted this way:
 *
 * ```json
 * {
 *   "categories.lvl0": "products",
 *   "categories.lvl1": "products > fruits",
 *   "categories.lvl2": "products > fruits > citrus"
 * }
 * ```
 *
 * It's also possible to provide more than one path for each level:
 *
 * ```json
 * {
 *   "categories.lvl0": ["products", "goods"],
 *   "categories.lvl1": ["products > fruits", "goods > to eat"]
 * }
 * ```
 *
 * All attributes passed to the `attributes` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 *
 * @propType {string} attributes - List of attributes to use to generate the hierarchy of the menu. See the example for the convention to follow
 * @propType {string} [rootURL=null] - The originating page (homepage)
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return
 * @propType {function} [renderSeparator] - Symbol used for separating hyperlinks. Default value: `() => '>'`
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-Breadcrumb - the root div of the widget
 * @themeKey ais-Breadcrumb-header - the header of the widget (optional)
 * @themeKey ais-Breadcrumb-body - the body of the widget
 * @themeKey ais-Breadcrumb-list - the list of all breadcrumb items
 * @themeKey ais-Breadcrumb-item - the breadcrumb navigation item
 * @themeKey ais-Breadcrumb-item--selected - the selected breadcrumb item
 * @themeKey ais-Breadcrumb-separator - the separator of each breadcrumb item
 * @themeKey ais-Breadcrumb-link - the clickable breadcrumb element
 * @themeKey ais-Breadcrumb-footer - the footer of the widget (optional)
 * @translationKey rootLabel - The root's label. Accepts a string
 * @example
 * import React from 'react';

 * import { Breadcrumb, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <Breadcrumb
 *         attributes={[
 *           'category',
 *           'sub_category',
 *           'sub_sub_category',
 *         ]}
 *         rootURL="www.algolia.com"
 *         separator=" / "
 *       />
 *     </InstantSearch>
 *   );
 * }
 */

const Widget = ({ canRefine, renderHeader, renderFooter, ...props }) => (
  <BaseWidget
    cx={cx}
    canRefine={canRefine}
    renderHeader={renderHeader}
    renderFooter={renderFooter}
  >
    <BreadcrumbComponent {...props} cx={cx} canRefine={canRefine} />
  </BaseWidget>
);

Widget.propTypes = {
  canRefine: PropTypes.bool.isRequired,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default connectBreadcrumb(Widget);
