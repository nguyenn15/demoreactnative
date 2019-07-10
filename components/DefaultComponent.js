import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Theme from '../static/style';


export default class DefaultComponent extends React.Component {
 


  render() {
    return (
      <View style={styles.container}>
        <Text> Default Layout {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }
});
