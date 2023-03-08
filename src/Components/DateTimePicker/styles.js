import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';
import theme from '../../utils/theme';

export default StyleSheet.create({
  dateTimePlaceholder: {
    color: theme.colors.primaryBlack,
    opacity: 0.34,
  },
  dateTimeValue: {
    color: theme.colors.primaryBlack,
  },
  dateTimePickerContainer: {
    backgroundColor: theme.colors.white,
    paddingBottom: getSize.s(24),
    paddingTop: getSize.s(20),
    paddingLeft: getSize.s(16),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLine,
  },
});
