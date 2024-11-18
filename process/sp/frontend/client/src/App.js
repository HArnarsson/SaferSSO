import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import AuthCallback from './containers/AuthCallbackPage';
import LogoutPage from './containers/LogoutPage';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;