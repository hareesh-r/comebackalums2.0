import React from 'react'
import Contact from './Contact'
import Feed from './Feed'
import Header from './Header'


function Home() {
    return (
        <div>
            <Header active={"home"} />
            <Feed />
            <Contact />
        </div>
    )
}

export default Home
