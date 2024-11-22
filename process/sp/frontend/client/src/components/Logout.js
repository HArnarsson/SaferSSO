import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../features/auth';  // Assume clearToken action removes token from Redux
import { api } from '../api';  // Axios instance for API calls
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.token);
  console.log(accessToken);

  const handleLogout = async () => {
    try {
      // Revoke the token
      // TODO: finish implementing this
      // await api.post('/api/token/revoke', {
      //   token: accessToken,  // Assuming you store access token here
      // });

      // Dispatch to clear the token from Redux
      dispatch(clearToken());

      // Clean up localStorage
      localStorage.removeItem('code_verifier');

      // Redirect to login page or home
      navigate('/');
    } catch (error) {
      console.error("Failed to log out:", error);
      // Optional: handle error or show notification
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default Logout;
