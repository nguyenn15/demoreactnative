import * as React from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Theme from './static/style';
import ToolBar from './components/ToolBar';
import BottomTab from './components/BottomTab';

// You can import from local files
import FavouriteComponent from './components/FavouriteComponent';
import DefaultComponent from './components/DefaultComponent';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  tabs = [
    {
      key: 'Search',
      icon: require('./assets/search.png'),
      label: 'Search',
      barColor: Theme.PRIMARY_COLOR,
      pressColor: Theme.SECONDARY_COLOR,
    },
    {
      key: 'Layout',
      icon: require('./assets/layout.png'),
      label: 'Layout',
      barColor: Theme.PRIMARY_COLOR,
      pressColor: Theme.SECONDARY_COLOR,
    },
    {
      key: 'Home',

      icon: require('./assets/home.png'),
      label: 'Home',
      barColor: Theme.PRIMARY_COLOR,
      pressColor: Theme.SECONDARY_COLOR,
    },
    {
      key: 'Like',
      icon: require('./assets/like.png'),
      label: 'Like',
      barColor: Theme.PRIMARY_COLOR,
      pressColor: Theme.SECONDARY_COLOR,
    },
    {
      key: 'Save',

      icon: require('./assets/save.png'),
      label: 'Save',
      barColor: Theme.PRIMARY_COLOR,
      pressColor: Theme.SECONDARY_COLOR,
    },
  ];

  constructor() {
    super();
    this.state = { activeTab: this.tabs[2] };
  }

  getTabRoute(tab) {
    var index = this.tabs.indexOf(this.tabs.find(item => item.key === tab.key));
    console.log(index);
    var component = null;
    switch (index) {
      case 0:
        component = <DefaultComponent title="Search" />;
        break;
      case 1:
        component = <DefaultComponent title="Grid" />;
        break;
      case 2:
        component = <FavouriteComponent />;
        break;
      case 3:
        component = <DefaultComponent title="Like" />;
        break;
      case 4:
        component = <DefaultComponent title="Save" />;
        break;
      default:
        component = <DefaultComponent title="Dummy" />;
        break;
    }

    return component;
  }

  render() {
    var mainComponent = this.getTabRoute(this.state.activeTab);

    return (
      <View style={styles.container}>
        <ToolBar style={styles.header} title="Favourites" />
        <ScrollView contentContainerStyle={styles.main}>{mainComponent}</ScrollView>

        <View style={styles.footer}>
          <BottomTab
            onPressTab={tab => this.setState({ activeTab: tab })}
            data={this.tabs}
          />
        </View>
      </View>
    );
  }

  onMenuClick() {
    Alert.alert('Menu is click');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.PRIMARY_COLOR,
    color: Theme.SECONDARY_COLOR,
  },

  header: {
    height: Theme.HEADER_HEIGHT,
    backgroundColor: Theme.PRIMARY_COLOR,
  },
  main: {
    backgroundColor: Theme.PRIMARY_COLOR,
    //  paddingHorizontal:16,
    paddingTop: 32,
    flex: 1,
    paddingBottom: Theme.FOOTER_HEIGHT,
    alignItems: 'center',
  },
  footer: {
    height: Theme.FOOTER_HEIGHT,
    backgroundColor: Theme.SECONDARY_COLOR,
  },
});
