import React from 'react';
import { Configure } from '../packages/react-instantsearch/dom';
import { storiesOf } from '@storybook/react';
import { WrapWithHits } from './util';

const stories = storiesOf('Configure', module);

stories.add('default', () => <ConfigureExample />);

class ConfigureExample extends React.Component {
  constructor() {
    super();

    this.state = {
      hitsPerPage: 3,
    };
  }

  onClick = () => {
    this.setState(previousState => ({
      hitsPerPage: previousState.hitsPerPage === 3 ? 1 : 3,
    }));
  };

  render() {
    return (
      <WrapWithHits linkedStoryGroup="Configure">
        <Configure hitsPerPage={this.state.hitsPerPage} />

        <button className="ais-ClearRefinements-button" onClick={this.onClick}>
          Toggle HitsPerPage ({this.state.hitsPerPage})
        </button>
      </WrapWithHits>
    );
  }
}
