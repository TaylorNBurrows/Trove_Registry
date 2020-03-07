import React from 'react'
import Main from '../components/Main'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import AvatarImage from '../components/Avatar'
import ProfileBanner from '../components/ProfileBanner'
import TroveCard from '../components/TroveCard'

const DiscoverPage = () => {
    return (
        <div>
            <Main>
                <div>
                    <ProfileBanner />
                    <AvatarImage />
                    <TroveCard />
                </div>

            </Main>
        </div>

    )
}

export default DiscoverPage