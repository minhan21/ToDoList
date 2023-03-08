import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';
import theme from '../../utils/theme';

export default StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLine,
    paddingBottom: getSize.s(24),
    paddingTop: getSize.s(20),
    paddingLeft: getSize.s(16),
    backgroundColor: theme.colors.white,
  },
});
