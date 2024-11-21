import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';
import LoginPage from './containers/LoginPage';
import AuthCallback from './containers/AuthCallbackPage';
import LogoutPage from './containers/LogoutPage';

import { store, persistor } from './store';
import { fetchUser } from './features/auth';
import React from 'react';

const AppContent = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  // Fetch user info when the app loads and token exists
  React.useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <AppContent />
    </PersistGate>
  </Provider>
);

export default App;