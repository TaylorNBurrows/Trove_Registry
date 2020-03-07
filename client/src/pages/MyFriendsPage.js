import React from 'react'
import Main from '../components/Main'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import FriendsList from '../components/FriendList'

const MyFriendsPage = () => {
    return (
        <div>
            <Main>
                <FriendsList />
            </Main>
        </div>

    )
}

export default MyFriendsPage