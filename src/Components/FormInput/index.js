import {View, TextInput} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import styles from './styles';
import {_renderError} from '../../helpers';

const FormInput = ({name, control, placeholder}, ...props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, ref}, formState: {errors}}) => (
        <View>
          <TextInput
            {...props}
            ref={ref}
            placeholder={placeholder}
            style={[styles.inputContainer, props.style]}
            value={props.value}
            onChangeText={text => {
              onChange(text);
              props.onChangeText && props.onChangeText(text);
            }}
            onBlur={e => {
              onBlur();
              props.onBlur && props.onBlur(e);
            }}
          />
          {_renderError(errors[name], props.errorText || errors[name]?.message)}
        </View>
      )}
      defaultValue=""
    />
  );
};

export default FormInput;
