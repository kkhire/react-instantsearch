import React from 'react';
import PropTypes from 'prop-types';
import connectRange from '../connectors/connectRange';
import classNames from '../components/classNames';
import BaseWidget from '../components/BaseWidget';
import RatingMenuComponent from '../components/RatingMenu';

const cx = classNames('RatingMenu');

/**
 * RatingMenu lets the user refine search results by clicking on stars.
 *
 * The stars are based on the selected `attributeName`.
 * @requirements The attribute passed to the `attributeName` prop must be holding numerical values.
 * @name RatingMenu
 * @kind widget
 * @propType {string} attributeName - the name of the attribute in the record
 * @propType {number} [min] - Minimum value for the rating. When this isn't set, the minimum value will be automatically computed by Algolia using the data in the index.
 * @propType {number} [max] - Maximum value for the rating. When this isn't set, the maximum value will be automatically computed by Algolia using the data in the index.
 * @propType {{min: number, max: number}} [defaultRefinement] - Default state of the widget containing the lower bound (end) and the max for the rating.
 * @propType {function} [renderHeader] - Adds a header to the widget.
 * @propType {function} [renderFooter] - Adds a footer to the widget.
 * @themeKey ais-RatingMenu - the root div of the widget
 * @themeKey ais-RatingMenu-header - the header of the widget (optional)
 * @themeKey ais-RatingMenu-body - the body of the widget
 * @themeKey ais-RatingMenu-list - the list of ratings
 * @themeKey ais-RatingMenu-item - the rating list item
 * @themeKey ais-RatingMenu-item--selected - the selected rating list item
 * @themeKey ais-RatingMenu-item--disabled - the disabled rating list item
 * @themeKey ais-RatingMenu-link - the rating clickable item
 * @themeKey ais-RatingMenu-starIcon--full - the filled star icon
 * @themeKey ais-RatingMenu-starIcon--empty - the empty star icon
 * @themeKey ais-RatingMenu-starIcon - the star icon
 * @themeKey ais-RatingMenu-label - the label used after the stars
 * @themeKey ais-RatingMenu-count - the count of ratings for a specific item
 * @themeKey ais-RatingMenu-footer - the footer of the widget (optional)
 * @translationKey ratingLabel - Label value for the rating link
 * @example
 * import React from 'react';
 *
 * import { RatingMenu, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <RatingMenu attributeName="rating" />
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
    <RatingMenuComponent {...props} cx={cx} canRefine={canRefine} />
  </BaseWidget>
);

Widget.propTypes = {
  canRefine: PropTypes.bool.isRequired,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default connectRange(Widget);
