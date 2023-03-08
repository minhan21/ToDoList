import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import styles from './styles';
import {renderPriorityStatusColor} from '../../helpers';
import {PRIORITY_ARRAY} from '../../utils/const';

const PriorityForm = ({name, control, currentValue}, ...props) => {
  const renderPriorityChoice = (priority, onChange) => (
    <TouchableOpacity
      key={priority}
      onPress={() => onChange(priority)}
      style={[
        styles.priorityView,
        {backgroundColor: renderPriorityStatusColor(priority)},
        currentValue === priority && styles.selectedPriority,
      ]}
    />
  );
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}, formState: {errors}}) => (
        <View key={value}>
          <View style={styles.priorityLabel}>
            <Text style={styles.title}>Priority</Text>
          </View>
          <View style={[styles.row, styles.priorityContainer]}>
            {PRIORITY_ARRAY.map(priority =>
              renderPriorityChoice(priority, onChange),
            )}
          </View>
        </View>
      )}
      defaultValue=""
    />
  );
};

export default PriorityForm;
