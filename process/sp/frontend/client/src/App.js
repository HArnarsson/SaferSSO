import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" elements={<HomePage />} />
      <Route path="/dashboard" elements={<DashboardPage />} />
      <Route path="/login" elements={<LoginPage />} />
      <Route path="/register" elements={<RegisterPage />} />
    </Routes>
  </Router>
);

export default App;