import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import {
  Breadcrumb,
  Panel,
  HierarchicalMenu,
} from '../packages/react-instantsearch/dom';
import { connectHierarchicalMenu } from '../packages/react-instantsearch/connectors';
import { object } from '@storybook/addon-knobs';
import { displayName, filterProps, WrapWithHits } from './util';
import JSXAddon from 'storybook-addon-jsx';

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
  .addWithJSX(
    'with header and footer',
    () => (
      <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
        <Breadcrumb
          header="Header"
          footer="Footer"
          attributes={['category', 'sub_category', 'sub_sub_category']}
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
  );

stories
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
      <Panel title="Category">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
          translations={object('translations', {
            rootLabel: 'Home',
          })}
        />
      </Panel>
      <VirtualHierarchicalMenu
        attributes={['category', 'sub_category', 'sub_sub_category']}
        defaultRefinement="Cooking > Bakeware"
      />
    </WrapWithHits>
  ));
