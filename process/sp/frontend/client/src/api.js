import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,  
});

const idp = axios.create({
  baseURL: process.env.REACT_APP_OIDC_PROVIDER_URL
})

const fetchUserInfo = async (token) => {
  const response = await api.get('http://localhost:8002/user/info/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export { api, idp, fetchUserInfo};

