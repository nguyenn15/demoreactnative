import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native';
import  Theme  from '../static/style';

 export default class ToolBar extends React.Component {


  render() {
    return (
      <View style={[styles.container, Theme.SHADOW]}>
        <Image  source={require('../assets/logo.png')} />
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.onPressButton}>
          <Image  source={require('../assets/menu.png')} />
        </TouchableOpacity>
      </View>
    );
  }

  onPressButton()
  {
    Alert.alert("Tap menu button");
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor:Theme.PRIMARY_COLOR,
    height:Theme.HEADER_HEIGH,
    paddingHorizontal:Theme.PADDING_HORIZONTAL,
    paddingVertical:Theme.PADDING_VERTICAL
  },
  title:{
    color:Theme.SECONDARY_COLOR
  }
});