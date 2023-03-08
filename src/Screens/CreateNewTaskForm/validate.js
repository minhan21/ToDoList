import {object, string} from 'yup';

export const createNewTaskFormValidate = object().shape({
  taskName: string().trim().required('Field is required'),
  description: string().trim().required('Field is required'),
  date: string().trim().required('Field is required'),
  time: string().trim().required('Field is required'),
  priority: string().trim().required('Field is required'),
});
