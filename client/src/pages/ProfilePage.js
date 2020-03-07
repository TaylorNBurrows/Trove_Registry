import React, { useState, useEffect } from 'react';
import Auth from '../utils/Auth';
import Profile from '../components/Profile/index'
import SearchBar from '../components/SearchBar'
import Main from '../components/Main'
import API from '../utils/API';

const ProfilePage = () => {
    const [secretData, setSecretData] = useState('');
    const [user, setUser] = useState({});

    /**
     * This method will be executed after initial rendering.
     */
    useEffect(() => {
        API.dashboard(Auth.getToken())
            .then(res => {
                setSecretData(res.data.message)
                setUser(res.data.user)
            });
    }, [])


    /**
     * Render the component.
     */
    return (
        <div>
            <Main>
                <SearchBar />
                <Profile />
            </Main>
        </div>

    )

}

export default ProfilePage;
