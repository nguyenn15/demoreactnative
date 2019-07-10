import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Card,
  TouchableOpacity,
  Alert,
  ListItem,
  Dimensions,
} from 'react-native';
import Theme from '../static/style';
import BlockComponent from './BlockComponent';
/* Dummy data for grid results */
const data = [
  { key: 1, title: 'Dinosaus', image: require('../assets/dinosaus.png') },
  { key: 2, title: 'painting', image: require('../assets/painting.png') },
  { key: 3, title: 'Dinosaus', image: require('../assets/dinosaus.png') },
  { key: 4, title: 'painting', image: require('../assets/painting.png') },
  { key: 5, title: 'Dinosaus', image: require('../assets/dinosaus.png') },
  { key: 6, title: 'painting', image: require('../assets/painting.png') },
  { key: 7, title: 'painting', image: require('../assets/painting.png') },
  { key: 8, title: 'painting', image: require('../assets/painting.png') },
];

const DEVICEWIDTH = Dimensions.get('window').width;

export default class FavouriteComponent extends React.Component {
  Filters = ['Experiences', 'Collections', 'Destinations'];

  constructor() {
    super();
    this.state = { activeFilter: this.Filters[0] };
  }

  getFilterButton(item) {
    var active = this.state.activeFilter === item;
    var curStyle =
      active === true ? [styles.button, styles.active] : styles.button;
    return (
      <TouchableOpacity
        key={item}
        style={curStyle}
        onPress={() => this.onPressFilter(item)}>
        <Text style={styles.filterColor}> {item} </Text>
      </TouchableOpacity>
    );
  }

  renderFilterTabs() {
    var arrFilters = this.Filters.map(item => this.getFilterButton(item));

    return (
      <View style={[styles.containerFilter]}>
        {arrFilters}
        <TouchableOpacity
          style={styles.item}
          key={'search'}
          onPress={e => this.onPressSearch()}>
          <Image style={styles.icon} source={require('../assets/search.png')} />
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderFilterTabs()}

        <FlatList
          style={styles.gridContainer}
          contentContainerStyle={styles.gridContentStyle}
          data={data}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => <BlockComponent image={item.image} />}
          keyExtractor={item => {
            return item.key;
          }}
        />
      </View>
    );
  }

  onPressFilter(item) {
    var index = this.Filters.indexOf(item);
    this.setState({ activeFilter: item });
    console.log('Clicked ' + index);
    if (this.props.onPress) this.props.onPress(item);
  }
  onPressSearch() {
    Alert.alert('Clicked search icon');
    if (this.props.onPress) this.props.onPress(this.state.activeFilter); //dummy call
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.PRIMARY_COLOR,
    width: Theme.MAIN_VIEW_WIDTH,

    justifyContent: 'center',
    alignContent: 'center',
  },
  containerFilter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',

    height: 32,
  },
  gridContainer: {
    paddingTop: 24,
  },
  gridContentStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
  //  flexWrap: 'wrap',
    paddingBottom: Theme.FOOTER_HEIGH,
  },
  icon: {
    height: 28,
    width: 28,
  },
  button: {
    backgroundColor: Theme.PRIMARY_COLOR,
    borderRadius: Theme.BORDER_RADIUS,
    paddingVertical: 5,
    paddingHorizontal: 4,
    height: 32,
    color: Theme.SECONDARY_COLOR,
  },
  active: {
    backgroundColor: Theme.ACTIVE_BACKGROUND_COLOR,
  },
  filterColor: {
    color: Theme.SECONDARY_COLOR,
  },
});
