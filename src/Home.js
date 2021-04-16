import React, { useEffect } from 'react'
import Contact from './Contact'
import Feed from './Feed'
import Header from './Header'


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div>
            <Header active={"home"} />
            <Feed />
            <Contact />
        </div>
    )
}

export default Home
