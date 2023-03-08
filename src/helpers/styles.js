import {StyleSheet} from 'react-native';
import {getSize} from '../utils/responsive';
import theme from '../utils/theme';

export default StyleSheet.create({
  errorContainer: {
    backgroundColor: theme.colors.white,
    paddingVertical: getSize.s(4),
    paddingLeft: getSize.s(16),
  },
  errorText: {
    fontSize: getSize.s(13),
    color: theme.colors.red,
    fontStyle: 'italic',
  },
});
