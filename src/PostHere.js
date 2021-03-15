import { Avatar } from '@material-ui/core';
import React from 'react'
import "./PostHere.css";


function PostHere() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="postHere">
            <div className="postHere__top">
                <Avatar />
                <form>
                    <input
                    className="postHere__input" placeholder="Your Testimonial" type="text"/>
                    <input placeholder="image url (Optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="postHere__boottom">
                
            </div>
        </div>
    )
}

export default PostHere
