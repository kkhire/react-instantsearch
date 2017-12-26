import algoliasearch from 'algoliasearch/lite';
import { createInstantSearch as createInstantSearchServer } from './src/core/createInstantSearchServer';

export const createInstantSearch = () =>
  createInstantSearchServer(algoliasearch);
