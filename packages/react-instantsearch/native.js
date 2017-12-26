import { View } from 'react-native';
import algoliasearch from 'algoliasearch/reactnative';
import createInstantSearch from './src/core/createInstantSearch';
import createIndex from './src/core/createIndex';

export const InstantSearch = createInstantSearch(algoliasearch, {
  Root: View,
});

export const Index = createIndex({
  Root: View,
});

export { default as Configure } from './src/widgets/Configure.js';
