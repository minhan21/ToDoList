import {View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {ImageSourcePNG} from '../../assets';
import Header from '../../Components/Header';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {createNewTaskFormValidate} from './validate';
import {CREATE_TASK_FORM_INIT_VALUES} from '../../utils/const';
import FormInput from '../../Components/FormInput';
import PriorityForm from '../../Components/PriorityForm';
import Button from '../../Components/Button';
import DateTimePicker from '../../Components/DateTimePicker';
import {useDispatch, useSelector} from 'react-redux';
import {createNewTask} from '../../Providers/todoListSlice';
import moment from 'moment';

const CreateNewTaskForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const {todoList} = useSelector(state => state.todoList);
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(createNewTaskFormValidate),
    mode: 'onChange',
    defaultValues: CREATE_TASK_FORM_INIT_VALUES,
  });
  watch('priority');
  watch('date');
  watch('time');

  const onSubmit = values => {
    values.date = moment(values.date).format('MMM Do YY');
    values.id = todoList.length + 1;
    console.log(todoList.length, 'todoList.length');
    dispatch(createNewTask(values));
    handleGoBack();
  };

  const _renderHeaderLeft = () => (
    <TouchableOpacity onPress={handleGoBack}>
      <Image style={styles.arrowLeft} source={ImageSourcePNG.ArrowLeft} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <Header headerLeft={_renderHeaderLeft} title="New Task" />
      <View style={styles.formContainer}>
        <FormInput control={control} placeholder="Task Name" name="taskName" />
        <FormInput
          control={control}
          placeholder="Description"
          name="description"
        />
        <DateTimePicker
          currentValue={getValues('date')}
          placeholder="Pick Date"
          control={control}
          mode="date"
          name="date"
        />
        <DateTimePicker
          currentValue={getValues('time')}
          placeholder="Pick Time"
          control={control}
          mode="time"
          name="time"
        />
        <PriorityForm
          currentValue={getValues('priority')}
          control={control}
          name="priority"
        />
      </View>
      <Button
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
        title="ADD"
      />
    </SafeAreaView>
  );
};

export default CreateNewTaskForm;
