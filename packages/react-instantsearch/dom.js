import algoliasearch from 'algoliasearch/lite';
import createInstantSearch from './src/core/createInstantSearch';
import createIndex from './src/core/createIndex';

export const InstantSearch = createInstantSearch(algoliasearch, {
  Root: 'div',
  props: { className: 'ais-InstantSearch__root' },
});

export const Index = createIndex({
  Root: 'div',
  props: { className: 'ais-MultiIndex__root' },
});

export { default as Configure } from './src/widgets/Configure';
export {
  default as CurrentRefinements,
} from './src/widgets/CurrentRefinements';
export { default as HierarchicalMenu } from './src/widgets/HierarchicalMenu';
export { default as Highlight } from './src/widgets/Highlight';
export { default as Snippet } from './src/widgets/Snippet';
export { default as Hits } from './src/widgets/Hits';
export { default as HitsPerPage } from './src/widgets/HitsPerPage';
export { default as InfiniteHits } from './src/widgets/InfiniteHits';
export { default as Menu } from './src/widgets/Menu';
export { default as MenuSelect } from './src/widgets/MenuSelect';
export { default as NumericMenu } from './src/widgets/NumericMenu';
export { default as Pagination } from './src/widgets/Pagination';
export { default as PoweredBy } from './src/widgets/PoweredBy';
export { default as RangeInput } from './src/widgets/RangeInput';
export { default as RangeSlider } from './src/widgets/RangeSlider';
export { default as RatingMenu } from './src/widgets/RatingMenu';
export { default as RefinementList } from './src/widgets/RefinementList';
export { default as ClearRefinements } from './src/widgets/ClearRefinements';
export { default as ScrollTo } from './src/widgets/ScrollTo';
export { default as SearchBox } from './src/widgets/SearchBox';
export { default as SortBy } from './src/widgets/SortBy';
export { default as Stats } from './src/widgets/Stats';
export { default as Toggle } from './src/widgets/Toggle';
export { default as Panel } from './src/widgets/Panel';
export { default as Breadcrumb } from './src/widgets/Breadcrumb';
