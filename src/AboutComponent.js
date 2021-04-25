import React from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'

function AboutComponent() {
    return (
        <div>
            <Header active={"about"} />
            <About />
            <Contact />
        </div>
    )
}

export default AboutComponent
