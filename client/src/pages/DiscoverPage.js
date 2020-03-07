import React from 'react'
import Main from '../components/Main'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import AvatarImage from '../components/Avatar'

const DiscoverPage = () => {
    return (
        <div>
            <Nav />
            <SideBar />
            <Main>

                <div>This is the discover page</div>
                <AvatarImage />
            </Main>
        </div>

    )
}

export default DiscoverPage