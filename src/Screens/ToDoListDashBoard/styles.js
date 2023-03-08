import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/responsive';
import theme from '../../utils/theme';

export default StyleSheet.create({
  sortActiveText: {
    color: theme.colors.white,
  },
  sortActive: {
    backgroundColor: theme.colors.primaryColor,
  },
  sortOption: {
    paddingHorizontal: getSize.m(8),
    paddingVertical: getSize.m(4),
    borderRadius: 4,
  },
  sortBox: {
    flexDirection: 'row',
  },
  sortViewContainer: {
    flexDirection: 'row',
    paddingHorizontal: getSize.m(16),
    backgroundColor: theme.colors.white,
  },
  emptyTaskContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyTask: {
    title: {
      fontSize: getSize.s(18),
      color: theme.colors.secondColor,
      fontWeight: theme.fonts.fontWeight.bold,
    },
    subContent: {
      color: theme.colors.primaryBlack,
      fontSize: getSize.s(14),
      fontWeight: theme.fonts.fontWeight.semibold,
    },
    width: getSize.s(200),
    height: getSize.s(200),
    resizeMode: 'contain',
  },
  done: {
    backgroundColor: theme.colors.green,
    height: '100%',
    paddingHorizontal: getSize.m(6),
  },
  bin: {
    backgroundColor: theme.colors.red,
    height: '100%',
    paddingHorizontal: getSize.m(6),
  },
  marginLeft12: {
    marginLeft: getSize.m(12),
  },
  saveData: {
    width: getSize.s(23),
    height: getSize.s(23),
    resizeMode: 'contain',
    marginLeft: getSize.m(16),
  },
  hiddenItemContainer: {
    markTaskDone: {
      width: getSize.s(18),
      height: getSize.s(18),
      resizeMode: 'contain',
    },
    done: {
      color: theme.colors.white,
      fontSize: getSize.s(14),
      fontWeight: theme.fonts.fontWeight.semibold,
      marginRight: getSize.s(6),
      marginLeft: getSize.s(3),
    },

    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  priorityView: {
    width: 20,
    height: 20,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timeFormat: {
    color: theme.colors.primaryBlack,
    opacity: 0.75,
    fontWeight: theme.fonts.fontWeight.bold,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  plusIconStyle: {
    width: getSize.m(24),
    height: getSize.m(24),
  },
  userDashBoardContainer: {
    completeTaskContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      title: {
        color: theme.colors.green,
        fontSize: getSize.s(14),
        marginBottom: getSize.m(8),
      },
    },
    title: {
      fontSize: getSize.s(16),
      username: {
        fontWeight: theme.fonts.fontWeight.semibold,
      },
    },
    currentDate: {
      fontSize: getSize.s(26),
      fontWeight: theme.fonts.fontWeight.bold,
      color: theme.colors.primaryBlack,
    },
    today: {
      fontSize: getSize.s(20),
      fontWeight: theme.fonts.fontWeight.semibold,
      color: theme.colors.primaryColor,
      paddingVertical: getSize.m(3),
    },
    padding: getSize.m(20),
    marginHorizontal: getSize.m(16),
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: getSize.m(16),
  },
  taskItemContainer: {
    priorityText: {
      fontSize: getSize.s(14),
      marginRight: getSize.m(6),
      fontWeight: theme.fonts.fontWeight.semibold,
    },
    description: {
      color: theme.colors.primaryBlack,
      opacity: 0.67,
      marginTop: getSize.s(3),
    },
    taskName: {
      flex: 1,
      marginLeft: getSize.s(12),
    },
    paddingHorizontal: getSize.m(16),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    completeTask: {
      width: getSize.s(16),
      height: getSize.s(16),
      marginLeft: getSize.m(8),
    },
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLine,
    paddingVertical: getSize.m(12),
  },
});
