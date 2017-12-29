import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import {
  Breadcrumb,
  HierarchicalMenu,
} from '../packages/react-instantsearch/dom';
import { displayName, filterProps, WrapWithHits, WithoutResults } from './util';

setAddon(JSXAddon);

const LineBreak = () => <hr style={{ marginTop: 30, marginBottom: 30 }} />;

storiesOf('Breadcrumb', module)
  .addWithJSX(
    'default',
    () => (
      <WrapWithHits linkedStoryGroup="Breadcrumb">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
        />

        <LineBreak />

        <HierarchicalMenu
          attributes={['category', 'sub_category', 'sub_sub_category']}
          defaultRefinement="Cooking > Kitchen textiles"
          limitMax={3}
          showMore={true}
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'hidden without refinement',
    () => (
      <WrapWithHits searchBox={false} linkedStoryGroup="Breadcrumb">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
          renderHeader={() => 'Breadcrumb'}
          autoHideContainer
        />

        <WithoutResults />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'visible without refinement ',
    () => (
      <WrapWithHits linkedStoryGroup="Breadcrumb">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
          renderHeader={() => 'Breadcrumb'}
        />

        <WithoutResults />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'with header and footer',
    () => (
      <WrapWithHits linkedStoryGroup="Breadcrumb">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
          renderHeader={() => 'Header'}
          renderFooter={() => 'Footer'}
        />

        <LineBreak />

        <HierarchicalMenu
          attributes={['category', 'sub_category', 'sub_sub_category']}
          defaultRefinement="Cooking > Bakeware"
        />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .add('with custom component', () => (
    <WrapWithHits linkedStoryGroup="Breadcrumb">
      <Breadcrumb
        attributes={['category', 'sub_category', 'sub_sub_category']}
        renderSeparator={() => <span> ⚡ </span>}
      />

      <LineBreak />

      <HierarchicalMenu
        attributes={['category', 'sub_category', 'sub_sub_category']}
        defaultRefinement="Winter holidays > Toys & play"
      />
    </WrapWithHits>
  ))
  .add('playground', () => (
    <WrapWithHits linkedStoryGroup="Breadcrumb">
      <Breadcrumb
        attributes={['category', 'sub_category', 'sub_sub_category']}
        translations={object('translations', {
          rootLabel: 'Home',
        })}
      />

      <LineBreak />

      <HierarchicalMenu
        attributes={['category', 'sub_category', 'sub_sub_category']}
        defaultRefinement="Cooking > Bakeware"
      />
    </WrapWithHits>
  ));
