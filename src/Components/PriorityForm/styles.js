import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';
import theme from '../../utils/theme';

export default StyleSheet.create({
  title: {
    fontSize: getSize.s(16),
    color: theme.colors.primaryBlack,
    fontWeight: theme.fonts.fontWeight.semibold,
    paddingVertical: getSize.s(12),
    marginLeft: getSize.m(16),
  },
  priorityContainer: {
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.borderLine,
    borderBottomWidth: 1,
    paddingVertical: getSize.s(16),
  },
  priorityLabel: {
    borderBottomColor: theme.colors.borderLine,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  priorityView: {
    marginLeft: getSize.m(16),
    width: 20,
    height: 20,
    borderRadius: 40,
  },
  selectedPriority: {
    borderWidth: 2,
    borderColor: '#E3E2E2',
  },
});
