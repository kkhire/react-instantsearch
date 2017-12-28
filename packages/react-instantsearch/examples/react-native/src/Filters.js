import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import { InstantSearch } from 'react-instantsearch/native';
import {
  connectCurrentRefinements,
  connectMenu,
  connectRange,
  connectRefinementList,
  connectSearchBox,
} from 'react-instantsearch/connectors';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  filtersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  clearAll: {
    color: 'blue',
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
  },
});

class Filters extends Component {
  static displayName = 'React Native example';
  constructor(props) {
    super(props);
    this.onSearchStateChange = this.onSearchStateChange.bind(this);
    this.state = {
      searchState: this.props.searchState,
    };
    Keyboard.dismiss();
  }
  onSearchStateChange(nextState) {
    const searchState = { ...this.state.searchState, ...nextState };
    this.setState({ searchState });
    this.props.onSearchStateChange(searchState);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <InstantSearch
          appId="latency"
          apiKey="6be0576ff61c053d5f9a3225e2a90f76"
          indexName="ikea"
          onSearchStateChange={this.onSearchStateChange}
          searchState={this.state.searchState}
        >
          <ConnectedRefinements
            searchState={this.state.searchState}
            onSearchStateChange={this.onSearchStateChange}
          />
          <VirtualRefinementList attributeName="type" />
          <VirtualMenu attributeName="category" />
          <VirtualRange attributeName="price" />
          <VirtualRange attributeName="rating" />
          <VirtualSearchBox />
        </InstantSearch>
      </View>
    );
  }
}

Filters.propTypes = {
  searchState: PropTypes.object,
  onSearchStateChange: PropTypes.func.isRequired,
};

class Refinements extends React.Component {
  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this.mapping = {
      Categories: {
        attributeName: 'category',
        value: item => item.currentRefinement,
      },
      Type: {
        attributeName: 'type',
        value: item => {
          const values = item.items.map(i => i.label).join(' - ');
          return values;
        },
      },
      Price: {
        attributeName: 'price',
        value: item =>
          `From ${item.currentRefinement.min}$ to ${
            item.currentRefinement.max
          }$`,
      },
      Rating: {
        attributeName: 'rating',
        value: item =>
          `From ${item.currentRefinement.min} stars to ${
            item.currentRefinement.max
          } stars`,
      },
      ClearAll: {
        attributeName: 'clearAll',
      },
    };
  }

  _renderRow = refinement => {
    const item = this.props.items.find(
      i => i.attributeName === this.mapping[refinement].attributeName
    );
    const refinementValue = item ? this.mapping[refinement].value(item) : '-';
    const filtersRow =
      refinement !== 'ClearAll' ? (
        <TouchableHighlight
          onPress={() => {
            Actions[refinement]({
              searchState: this.props.searchState,
              onSearchStateChange: this.props.onSearchStateChange,
            });
          }}
        >
          <View style={styles.filtersRow}>
            <View style={{ flex: 4 }}>
              <Text style={{ fontWeight: 'bold' }}>{refinement}</Text>
              <Text style={{ paddingTop: 5 }}>{refinementValue}</Text>
            </View>
            <View>
              <Icon name="pencil" size={20} />
            </View>
          </View>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight onPress={() => this.props.refine(this.props.items)}>
          <View>
            <Text style={styles.clearAll}>CLEAR ALL</Text>
          </View>
        </TouchableHighlight>
      );
    return <View>{filtersRow}</View>;
  };

  _renderSeparator = (sectionID, rowId, adjacentRowHighlighted) => (
    <View
      key={`${sectionID}-${rowId}`}
      style={{
        height: adjacentRowHighlighted ? 4 : 1,
        backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
      }}
    />
  );
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    return (
      <View>
        <ListView
          dataSource={ds.cloneWithRows([
            'Type',
            'Categories',
            'Price',
            'Rating',
            'ClearAll',
          ])}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}
          keyboardShouldPersistTaps={'always'}
          style={styles.mainContainer}
        />
      </View>
    );
  }
}

Refinements.propTypes = {
  searchState: PropTypes.object.isRequired,
  refine: PropTypes.func.isRequired,
  onSearchStateChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const ConnectedRefinements = connectCurrentRefinements(Refinements);
const VirtualRefinementList = connectRefinementList(() => null);
const VirtualSearchBox = connectSearchBox(() => null);
const VirtualMenu = connectMenu(() => null);
const VirtualRange = connectRange(() => null);

export default Filters;
