import React from 'react';
import PropTypes from 'prop-types';
import connectToggle from '../connectors/connectToggle';
import classNames from '../components/classNames';
import BaseWidget from '../components/BaseWidget';
import ToggleComponent from '../components/Toggle';

const cx = classNames('Toggle');

/**
 * The Toggle provides an on/off filtering feature based on an attribute value. Note that if you provide an “off” option, it will be refined at initialization.
 * @name Toggle
 * @kind widget
 * @requirements To use this widget, you'll need an attribute to toggle on.
 *
 * You can't toggle on null or not-null values. If you want to address this particular use-case you'll need to compute an
 * extra boolean attribute saying if the value exists or not. See this [thread](https://discourse.algolia.com/t/how-to-create-a-toggle-for-the-absence-of-a-string-attribute/2460) for more details.
 *
 * @propType {string} attributeName - Name of the attribute on which to apply the `value` refinement. Required when `value` is present.
 * @propType {string} label - Label for the toggle.
 * @propType {any} value - Value of the refinement to apply on `attributeName` when checked.
 * @propType {boolean} [defaultRefinement=false] - Default state of the widget. Should the toggle be checked by default?
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-Toggle - the root div of the widget
 * @themeKey ais-Toggle-header - the header of the widget (optional)
 * @themeKey ais-Toggle-body - the body of the widget
 * @themeKey ais-Toggle-list - the list of toggles
 * @themeKey ais-Toggle-item - the toggle list item
 * @themeKey ais-Toggle-label - the label of each toggle item
 * @themeKey ais-Toggle-checkbox - the checkbox input of each toggle item
 * @themeKey ais-Toggle-labelText - the label text of each toggle item
 * @themeKey ais-Toggle-count - the count of items for each item
 * @themeKey ais-Toggle-footer - the footer of the widget (optional)
 * @example
 * import React from 'react';
 *
 * import { Toggle, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <Toggle
 *         attributeName="materials"
 *         label="Made with solid pine"
 *         value={'Solid pine'}
 *       />
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
    <ToggleComponent {...props} cx={cx} />
  </BaseWidget>
);

Widget.propTypes = {
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default connectToggle(Widget);
