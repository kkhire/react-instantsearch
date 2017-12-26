import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import {
  Breadcrumb,
  HierarchicalMenu,
} from '../packages/react-instantsearch/dom';
import { connectHierarchicalMenu } from '../packages/react-instantsearch/connectors';
import { displayName, filterProps, WrapWithHits, WithoutResults } from './util';

setAddon(JSXAddon);

const stories = storiesOf('Breadcrumb', module);
const VirtualHierarchicalMenu = connectHierarchicalMenu(() => null);

stories
  .addWithJSX(
    'default',
    () => (
      <div>
        <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
          <Breadcrumb
            attributes={['category', 'sub_category', 'sub_sub_category']}
          />
          <hr />
          <HierarchicalMenu
            attributes={['category', 'sub_category', 'sub_sub_category']}
            defaultRefinement="Cooking > Kitchen textiles"
            limitMax={3}
            showMore={true}
          />
        </WrapWithHits>
      </div>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .add('without results', () => (
    <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
      <Breadcrumb
        attributes={['category', 'sub_category', 'sub_sub_category']}
        renderHeader={() => 'Breadcrumb'}
      />

      <WithoutResults />
    </WrapWithHits>
  ))
  .addWithJSX(
    'with header and footer',
    () => (
      <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
          renderHeader={() => 'Header'}
          renderFooter={() => 'Footer'}
        />
        <hr />
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
    <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
      <Breadcrumb
        attributes={['category', 'sub_category', 'sub_sub_category']}
        renderSeparator={() => <span> ⚡ </span>}
      />
      <hr />
      <VirtualHierarchicalMenu
        attributes={['category', 'sub_category', 'sub_sub_category']}
        defaultRefinement="Winter holidays > Toys & play"
      />
    </WrapWithHits>
  ))
  .add('playground', () => (
    <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
      <Breadcrumb
        attributes={['category', 'sub_category', 'sub_sub_category']}
        translations={object('translations', {
          rootLabel: 'Home',
        })}
      />
      <VirtualHierarchicalMenu
        attributes={['category', 'sub_category', 'sub_sub_category']}
        defaultRefinement="Cooking > Bakeware"
      />
    </WrapWithHits>
  ));
