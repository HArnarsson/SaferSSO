import Layout from '../components/Layout';
import { api } from '../api.js';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpdateProfilePage = () => {
    const [formData, setFormData] = useState({
        favorite_color: '',
        age: '',
        profession: '',
    });
    const accessToken = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('api/dashboard/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setFormData({
                    favorite_color: response.data.favorite_color || '',
                    age: response.data.age || '',
                    profession: response.data.profession || '',
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (accessToken) {
            fetchUserData();
        }
    }, [accessToken]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.patch('api/dashboard/update/', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            alert('Profile updated successfully!');
            navigate('/dashboard'); // Redirect to dashboard after successful update
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <Layout title='SaferSSO | Update Profile' content='Update profile page'>
            <div>
                <h1>Update Your Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Favorite Color:</label>
                        <input
                            type="text"
                            name="favorite_color"
                            value={formData.favorite_color}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Profession:</label>
                        <input
                            type="text"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Update Profile</button>
                </form>
            </div>
        </Layout>
    );
};

export default UpdateProfilePage;
