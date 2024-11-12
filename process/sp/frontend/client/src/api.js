import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,  
});

const idp = axios.create({
  baseURL: process.env.REACT_APP_OIDC_PROVIDER_URL
})
export { api, idp };
