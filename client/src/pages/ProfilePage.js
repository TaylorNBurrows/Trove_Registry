import React, { useState, useEffect } from 'react';
import Auth from '../utils/Auth';
import Profile from '../components/Profile/index'
import SearchBar from '../components/SearchBar'
import Main from '../components/Main'
import API from '../utils/API';
import Avatar from '../components/Avatar'
import ProfileBanner from '../components/ProfileBanner'

const ProfilePage = () => {
    const [secretData, setSecretData] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        API.dashboard(Auth.getToken())
            .then(res => {
                setSecretData(res.data.message)
                setUser(res.data.user)
            });
    }, [])

    return (
        <div>

            <Main>
                <ProfileBanner />
                <Avatar />
                <Profile />
            </Main>

        </div>

    )

}

export default ProfilePage;
