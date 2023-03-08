import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';

export default StyleSheet.create({
  formContainer: {
    height: '90%',
  },
  arrowLeft: {
    width: getSize.m(18),
    height: getSize.m(18),
    marginRight: getSize.m(40),
  },
});
