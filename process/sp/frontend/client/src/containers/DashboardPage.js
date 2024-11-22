import Layout from '../components/Layout'
import { api } from '../api.js'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const [userData, setUserData] = useState(null);
    const accessToken = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('api/dashboard/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // Set header here
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        console.log("request!!!!")
        if(accessToken){
            console.log("two!!!")
            fetchUserData();
        }
    }, []);

    if (!userData) return <div>Loading...</div>;

    return (
        <Layout title='SaferSSO | Home' content='Home page'>
            <div>
                <h1>Welcome, {userData.username}</h1>
                <p>Email: {userData.email}</p>
                <p>Favorite Color: {userData.favorite_color}</p>
                <p>Age: {userData.age}</p>
                <p>Profession: {userData.profession}</p>
                <button onClick={() => navigate('/dashboard/update')}>Edit Profile</button>
            </div>
        </Layout>
    );
};

export default DashboardPage;
