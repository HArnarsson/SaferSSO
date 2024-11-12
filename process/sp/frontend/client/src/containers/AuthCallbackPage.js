// AuthCallback.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const codeVerifier = localStorage.getItem('code_verifier');

    if (code && codeVerifier) {
      // Step 4: Exchange authorization code for JWT
      api
        .post('/api/token/oidc/', {
          code,
          redirect_uri: window.location.origin + '/auth/callback',
          code_verifier: codeVerifier,
        })
        .then(response => {
          const { access } = response.data;
          dispatch(setToken(access));  // Store JWT in Redux
          navigate('/');  // Redirect to home or dashboard
        })
        .catch(error => {
          console.error("Authentication failed:", error);
          // Handle error or redirect to login
        });
    } else {
        throw("Error authenticating");
    }
  }, [dispatch, navigate]);

  return <div>Authenticating...</div>;
};

export default AuthCallback;
