// Login.js
import React, { useState } from 'react';
import { generateCodeVerifier, generateCodeChallenge } from '../utils/codeverifier';

const Login = () => {

  const handleLogin = async () => {
    // Step 1: Generate code verifier and challenge
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);
    // Step 2: Store code_verifier in localStorage for later use
    await localStorage.setItem('code_verifier', verifier);

    // Step 3: Prepare the OIDC request with the code challenge
    const clientId = process.env.REACT_APP_OIDC_CLIENT_ID;
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
    const authUrl = `${process.env.REACT_APP_OIDC_PROVIDER_URL}/auth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&code_challenge=${challenge}&code_challenge_method=S256`;

    window.location.href = authUrl; // Redirect to IdP
  };

  return <button onClick={handleLogin}>Log in with OIDC</button>;
};

export default Login;
