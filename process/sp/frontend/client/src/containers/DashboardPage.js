/* import Layout from '../components/Layout' */

import React from 'react';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const user = useSelector((state) => state.auth.user);

  console.log("User state:", user); // Debugging: Check if `user` is null, undefined, or an object.

  if (!user) {
    return <div>Loading user info...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
    </div>
  );
};

export default DashboardPage;