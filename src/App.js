import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ParentComponent from './components/ParentComponent';

const App = () => (
  <Provider store={store}>
    <ParentComponent />
  </Provider>
);

export default App;