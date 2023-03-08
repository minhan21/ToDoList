import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';
import theme from '../../utils/theme';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.primaryColor,
    paddingVertical: getSize.m(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getSize.m(16),
  },
  titleHeader: {
    color: theme.colors.white,
    fontWeight: theme.fonts.fontWeight.semibold,
    fontSize: getSize.m(20),
    flex: 1,
  },
});
