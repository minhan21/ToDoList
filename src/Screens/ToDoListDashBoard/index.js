import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../Components/Header';
import {ImageSourcePNG} from '../../assets';
import styles from './styles';
import moment from 'moment';
import {CREATE_NEW_TASK_FORM, TASK_DETAIL, TODAY} from '../../utils/const';
import {useDispatch, useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useNavigation} from '@react-navigation/native';
import {renderPriorityStatusColor} from '../../helpers';
import {
  deleteTask,
  getTodoList,
  markTaskDone,
  onSortChange,
} from '../../Providers/todoListSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoListDashBoard = () => {
  const {todoList, sortBy} = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNavigateToCreateTaskForm = () => {
    navigation.navigate(CREATE_NEW_TASK_FORM);
  };

  useEffect(() => {
    const getToDoListData = async () => {
      try {
        const value = await AsyncStorage.getItem('@todo_list');
        if (value !== null) {
          dispatch(getTodoList(JSON.parse(value)));
        }
      } catch (e) {
        Alert.alert('Error', e);
      }
    };

    getToDoListData();
  }, [dispatch]);

  useEffect(() => {
    const saveData = async () => {
      try {
        const jsonValue = JSON.stringify(todoList);
        await AsyncStorage.setItem('@todo_list', jsonValue);
      } catch (e) {
        Alert.alert('Error', e);
      }
    };
    saveData();
  }, [todoList]);
  useEffect(() => {
    dispatch(onSortChange({sortBy}));
  }, [todoList, sortBy, dispatch]);
  const navigateToTaskDetail = item => {
    navigation.navigate(TASK_DETAIL, item);
  };

  const onSortChangeValue = value => {
    dispatch(onSortChange({sortBy: value}));
  };
  const onMarkTaskDone = index => {
    dispatch(markTaskDone(index));
  };

  const onDeleteTask = index => {
    dispatch(deleteTask({id: index}));
  };

  const _renderHeaderRight = () => (
    <TouchableOpacity
      testID="createNewTaskButton"
      onPress={handleNavigateToCreateTaskForm}>
      <Image style={styles.plusIconStyle} source={ImageSourcePNG.PlusIcon} />
    </TouchableOpacity>
  );

  const _renderUserDashBoard = () => (
    <View style={styles.userDashBoardContainer}>
      <View>
        <Text style={styles.userDashBoardContainer.title}>
          Good Morning{' '}
          <Text style={styles.userDashBoardContainer.title.username}>Kai!</Text>
        </Text>
        <Text style={styles.userDashBoardContainer.today}>{TODAY}</Text>
        <Text style={styles.userDashBoardContainer.currentDate}>
          {moment().format('MMM Do YY')}
        </Text>
      </View>
      <View style={styles.userDashBoardContainer.completeTaskContainer}>
        <Text style={styles.userDashBoardContainer.completeTaskContainer.title}>
          Completed
        </Text>
        <Text>
          {todoList.filter(item => item.isComplete).length}/{todoList.length}
        </Text>
      </View>
    </View>
  );

  const _renderTaskItem = ({item}) => (
    <TouchableHighlight onPress={() => navigateToTaskDetail(item)}>
      <View style={styles.taskItemContainer}>
        <View>
          <Text>{moment(item.time).format('h:mm')}</Text>
          <Text style={styles.timeFormat}>
            {moment(item.time).format('A') ? 'PM' : 'AM'}
          </Text>
        </View>
        <View style={styles.taskItemContainer.taskName}>
          <Text numberOfLines={2}>{item.taskName}</Text>
          <Text numberOfLines={3} style={styles.taskItemContainer.description}>
            {item.description}
          </Text>
        </View>
        <View style={[styles.row, styles.marginLeft12]}>
          <Text
            style={[
              styles.taskItemContainer.priorityText,
              {color: renderPriorityStatusColor(item.priority)},
            ]}>
            {item?.priority?.toUpperCase()}
          </Text>
          <View
            style={[
              styles.priorityView,
              {backgroundColor: renderPriorityStatusColor(item.priority)},
            ]}
          />
          <Image
            style={styles.taskItemContainer.completeTask}
            source={
              item.isComplete
                ? ImageSourcePNG.CompleteTask
                : ImageSourcePNG.InProgressTask
            }
          />
        </View>
      </View>
    </TouchableHighlight>
  );

  const _renderHiddenItem = ({item}) => {
    return (
      <View style={styles.hiddenItemContainer}>
        <TouchableOpacity
          onPress={() => onMarkTaskDone(item.id)}
          style={[styles.row, styles.done]}>
          <Image
            style={styles.hiddenItemContainer.markTaskDone}
            source={ImageSourcePNG.MarkTaskDone}
          />
          <Text style={styles.hiddenItemContainer.done}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDeleteTask(item.id)}
          style={[styles.row, styles.bin]}>
          <Image
            style={styles.hiddenItemContainer.markTaskDone}
            source={ImageSourcePNG.Bin}
          />
          <Text style={styles.hiddenItemContainer.done}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderEmptyTask = () => (
    <View style={styles.emptyTaskContainer}>
      <Image style={styles.emptyTask} source={ImageSourcePNG.EmptyTask} />
      <Text style={styles.emptyTask.title}>All Done For Now</Text>
      <Text style={styles.emptyTask.subContent}>Time for a Break</Text>
    </View>
  );

  const _renderSortView = () => (
    <View style={styles.sortViewContainer}>
      <View style={styles.sortBox}>
        <TouchableOpacity
          onPress={() => onSortChangeValue('name')}
          style={[styles.sortOption, sortBy === 'name' && styles.sortActive]}>
          <Text style={sortBy === 'name' && styles.sortActiveText}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSortChangeValue('priority')}
          style={[
            styles.sortOption,
            sortBy === 'priority' && styles.sortActive,
          ]}>
          <Text style={sortBy === 'priority' && styles.sortActiveText}>
            Priority
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header headerRight={_renderHeaderRight} title="To Do App" />
      {_renderUserDashBoard()}
      {_renderSortView()}
      <SwipeListView
        data={todoList}
        ListEmptyComponent={_renderEmptyTask}
        renderItem={_renderTaskItem}
        renderHiddenItem={_renderHiddenItem}
        leftOpenValue={160}
        rightOpenValue={-160}
        disableRightSwipe={true}
      />
    </SafeAreaView>
  );
};

export default ToDoListDashBoard;
