import {DefaultTheme} from '@react-navigation/native';
import {Platform} from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryColor: '#7646FF',
    secondColor: '#5030A6',
    complete: '#4CD964',
    orange: '#FA9B4A',
    blue: '#58BBF7',
    red: '#FC5565',
    green: '#4CCB41',
    white: '#fff',
    background: '#F6F6F8',
    primaryBlack: '#172735',
    borderLine: '#00000029',
  },
  fonts: {
    fontWeight: {
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
    },
  },
};

export default theme;
