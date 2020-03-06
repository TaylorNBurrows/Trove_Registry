import React from 'react'
import Main from '../components/Main'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'

const MyFriendsPage = () => {
    return (
        <div>
            <Nav />
            <SideBar />
            <Main>

                <div>This is the list of friends page</div>
            </Main>
        </div>

    )
}

export default MyFriendsPage