import moment from 'moment';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {_renderError} from '../../helpers';
import styles from './styles';

const DateTimePicker = (
  {currentValue, name, control, mode, placeholder},
  ...props
) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const setVisibleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  return (
    <TouchableOpacity
      style={styles.dateTimePickerContainer}
      onPress={setVisibleDatePicker}>
      {currentValue ? (
        <Text style={styles.dateTimeValue}>
          {mode === 'date'
            ? moment(currentValue).format('MMM Do YY')
            : moment(currentValue).format('LT')}
        </Text>
      ) : (
        <Text style={styles.dateTimePlaceholder}>{placeholder}</Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, ref}, formState: {errors}}) => (
          <View>
            <DateTimePickerModal
              ref={ref}
              isVisible={isDatePickerVisible}
              mode={mode}
              locale="en"
              headerTextIOS={'Pick Date'}
              onConfirm={date => {
                onChange(date);
                setVisibleDatePicker();
              }}
              onCancel={setVisibleDatePicker}
            />
            {_renderError(
              errors[name],
              props.errorText || errors[name]?.message,
            )}
          </View>
        )}
        defaultValue=""
      />
    </TouchableOpacity>
  );
};

export default DateTimePicker;
