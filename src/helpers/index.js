/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import theme from '../utils/theme';
import styles from './styles';

export const renderPriorityStatusColor = priority => {
  switch (priority) {
    case 'high':
      return theme.colors.orange;
    case 'medium':
      return theme.colors.blue;
    case 'low':
      return theme.colors.green;
    case 'highest':
      return theme.colors.red;
    default:
      return theme.colors.blue;
  }
};
export const _renderError = (isError, errorMsg) => {
  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }
};
