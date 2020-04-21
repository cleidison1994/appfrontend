import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/reactotronConfig';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import Globalstyle from './styles/GlobalStyle';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer />
          <Globalstyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
