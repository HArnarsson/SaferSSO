import React from 'react';

const Login = () => {
  const handleLogin = () => {
    const clientId = process.env.REACT_APP_OIDC_CLIENT_ID;
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
    const authUrl = `${process.env.REACT_APP_OIDC_PROVIDER_URL}/auth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl; // Redirect to IdP
  };

  return <button onClick={handleLogin}>Log in with OIDC</button>;
};

export default Login;
