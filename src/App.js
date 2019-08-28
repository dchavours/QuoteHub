import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes/Routes';
import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
