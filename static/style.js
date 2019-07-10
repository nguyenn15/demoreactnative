import { StyleSheet } from 'react-native';

let Theme = {
  PRIMARY_COLOR: 'rgb(51, 44, 81)',
  SECONDARY_COLOR: 'rgb(209, 196, 233)',
  ACTIVE_BACKGROUND_COLOR: 'rgb(59, 51, 93)',

  BORDER_RADIUS: 3,
  BORDER_SHADOW: 5,

  HEADER_HEIGH: 64,
  FOOTER_HEIGH: 48,

  MAIN_VIEW_WIDTH:350,

  PADDING_HORIZONTAL: 31,
  PADDING_VERTICAL: 18,
  SHADOW: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  SHADOW_TOP: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -30,
    },
    shadowOpacity: 70.5,
    shadowRadius: 15.19,
    elevation: 24,
  },
};

export default Theme;
