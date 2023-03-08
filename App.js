import React from 'react';
import NavigationStackContainer from './src/NavigationStackContainer';
import {Provider} from 'react-redux';
import {store} from './src/utils/store';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <Provider store={store}>
      <NavigationStackContainer />
    </Provider>
  );
};

export default App;
