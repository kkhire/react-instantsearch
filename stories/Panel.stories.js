import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { Panel } from '../packages/react-instantsearch/dom';
import { connectMenu } from '../packages/react-instantsearch/connectors';
import { displayName, filterProps, WrapWithHits, WithoutResults } from './util';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('Panel', module);

const CustomMenu = connectMenu(({ canRefine }) => (
  <Panel canRefine={canRefine} renderHeader={() => 'Header'}>
    My custom menu
  </Panel>
));

stories
  .addWithJSX(
    'with custom widget',
    () => (
      <WrapWithHits linkedStoryGroup="Panel">
        <CustomMenu attributeName="category" />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  )
  .addWithJSX(
    'without results',
    () => (
      <WrapWithHits linkedStoryGroup="Panel" searchBox={false}>
        <CustomMenu attributeName="category" />

        <WithoutResults />
      </WrapWithHits>
    ),
    {
      displayName,
      filterProps,
    }
  );
