import * as React from 'react';
import {
  Icon,
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Theme from '../static/style';

export default class BottomTab extends React.Component {
  render() {
    var arrButtons = this.props.data.map(item => (
      <TouchableOpacity
        style={styles.item}
        key={item.key}
        onPress={e => this.onPress(e, item)}>
        <Image style={styles.item} source={item.icon} />
      </TouchableOpacity>
    ));

    return <View style={[styles.container,  Theme.SHADOW_TOP]}>{arrButtons}</View>;
  }

  onPress(e, tab) {
    e.stopPropagation();
    //console.log(tab);
    if (this.props.onPressTab) this.props.onPressTab(tab);
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: Theme.PRIMARY_COLOR,
    height: Theme.FOOTER_HEIGHT,
    paddingVertical: 20,
  },
  item: {
    paddingHorizontal: 10,
    height: 28,
  },
});
