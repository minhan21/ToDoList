// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDoListDashBoard from '../Screens/ToDoListDashBoard';
import TaskDetail from '../Screens/TaskDetail';
import CreateNewTaskForm from '../Screens/CreateNewTaskForm';
import {
  CREATE_NEW_TASK_FORM,
  TASK_DETAIL,
  TO_DO_LIST_DASHBOARD,
} from '../utils/const';

const Stack = createNativeStackNavigator();

function NavigationStackContainer() {
  const headerConfig = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={headerConfig}
          name={TO_DO_LIST_DASHBOARD}
          component={ToDoListDashBoard}
        />
        <Stack.Screen
          options={headerConfig}
          name={TASK_DETAIL}
          component={TaskDetail}
        />
        <Stack.Screen
          options={headerConfig}
          name={CREATE_NEW_TASK_FORM}
          component={CreateNewTaskForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStackContainer;
