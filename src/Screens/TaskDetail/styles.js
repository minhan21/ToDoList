import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
  taskBody: {
    padding: getSize.m(16),
    margin: getSize.m(16),
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textPriority: {
    color: theme.colors.white,
    fontWeight: theme.fonts.fontWeight.semibold,
  },
  dateTime: {
    color: theme.colors.primaryBlack,
    fontSize: getSize.s(14),
    opacity: 0.54,
    marginTop: getSize.m(6),
  },
  priorityView: {
    borderRadius: 4,

    alignSelf: 'flex-start',
    paddingHorizontal: getSize.m(16),
    paddingVertical: getSize.m(6),
    marginBottom: getSize.m(6),
  },
  description: {
    color: theme.colors.primaryBlack,
    fontSize: getSize.s(14),

    marginTop: getSize.m(6),
  },
  title: {
    color: theme.colors.primaryBlack,
    fontSize: getSize.s(16),
    fontWeight: theme.fonts.fontWeight.semibold,
  },
  arrowLeft: {
    width: getSize.m(18),
    height: getSize.m(18),
    marginRight: getSize.m(40),
  },
});
