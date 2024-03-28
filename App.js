import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import Todo from './src/screens/Todo';
import {Store} from './src/store/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Todo />
    </Provider>
  );
};

export default App;
