import React from 'react'
import LeftSidebar from './LeftSidebar'
import Navbars from './Navbars'
import RightSideBar from './RightSideBar'

const Home = () => {
    return (
        <>
            <Navbars />
            <div class="container-fluid">
                <div class="row">
                    <LeftSidebar />
                    <RightSideBar />
                </div>
            </div>
        </>
    )
}

export default Home