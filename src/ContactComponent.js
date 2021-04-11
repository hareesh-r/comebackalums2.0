import React from 'react'
import Contact from './Contact'
import Header from './Header'
import "./ContactComponent.css";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Link } from 'react-router-dom';


function ContactComponent() {
    return (
        <div className="contactComponent">
            <div className="contactComponent__header">
                <Header />
            </div>
            <div className="show__thread">
                <h2>Click Here for threads</h2>
                <Link to="/threads">
                    <QuestionAnswerIcon />
                </Link>
            </div>
            <br/>
            <br/>
            <Contact />
        </div>
    )
}

export default ContactComponent
