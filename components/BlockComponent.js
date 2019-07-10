import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Theme from '../static/style';
export default class BlockComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
    
        <Image
          style={styles.blockItem}
          source={this.props.image}
          resizeMode="contain"
          resizeMethod="scale"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    minWidth: 100,
    maxWidth: 164,
    height: 125,
    maxHeight: 125,
    backgroundColor: '#CCC',
    overflow: 'hidden',
    borderRadius: Theme.BORDER_RADIUS,
  },
  blockItem: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Theme.PRIMARY_COLOR,
    padding: 5,
  },
});
