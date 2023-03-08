import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';
import theme from '../../utils/theme';

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.colors.primaryColor,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    color: theme.colors.white,
    fontSize: getSize.s(14),
    textAlign: 'center',
    fontWeight: theme.fonts.fontWeight.bold,
    paddingVertical: getSize.s(18),
  },
  disableButton: {
    opacity: 0.5,
  },
});
