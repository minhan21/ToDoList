import {createSlice} from '@reduxjs/toolkit';
import unionBy from 'lodash/unionBy';

const initialState = {
  todoList: [],
  sortBy: 'name',
};

function compareByName(a, b) {
  if (a.taskName < b.taskName) {
    return -1;
  }
  if (a.taskName > b.taskName) {
    return 1;
  }
  return 0;
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    getTodoList(state, action) {
      if (state.sortBy === 'name') {
        state.todoList = action.payload.sort(compareByName);
      } else {
        state.todoList = state.todoList.sort(function (a, b) {
          var priorityA = a.priority.toUpperCase();
          var priorityB = b.priority.toUpperCase();
          if (priorityA < priorityB) {
            return -1;
          }
          if (priorityA > priorityB) {
            return 1;
          }
          return 0;
        });
      }
      return state;
    },
    createNewTask(state, action) {
      state.todoList = unionBy(state.todoList, [action.payload], 'id');
      return state;
    },
    deleteTask(state, action) {
      state.todoList = state.todoList.filter(
        item => item.id !== action.payload.id,
      );
      return state;
    },
    markTaskDone: (state, action) => {
      state.todoList = state.todoList.map(item => {
        if (item.id === action.payload) {
          return {...item, isComplete: true};
        }
        return item;
      });
      return state;
    },
    onSortChange: (state, action) => {
      state.sortBy = action.payload.sortBy;
      if (action.payload.sortBy === 'name') {
        state.todoList = state.todoList.sort(compareByName);
      } else {
        state.todoList = state.todoList.sort(function (a, b) {
          var priorityA = a.priority.toUpperCase();
          var priorityB = b.priority.toUpperCase();
          if (priorityA < priorityB) {
            return -1;
          }
          if (priorityA > priorityB) {
            return 1;
          }
          return 0;
        });
      }
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getTodoList,
  createNewTask,
  markTaskDone,
  deleteTask,
  onSortChange,
} = todoListSlice.actions;

export default todoListSlice.reducer;
