import React from 'react'
import Contact from './Contact'
import Header from './Header'
import "./ContactComponent.css";

function ContactComponent() {
    return (
        <div className="contactComponent">
            <div className="contactComponent__header">
            <Header /></div>
            <Contact />
        </div>
    )
}

export default ContactComponent
