import { Avatar } from '@material-ui/core';
import React , { useState } from 'react'
import "./PostHere.css";


function PostHere() {
    
    const [input , setInput] = useState("");
    const [imageUrl , setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // database manupulation pending

        setInput("");
        setImageUrl("");
    };
    return (
        <div className="postHere">
            <div className="postHere__top">
                <Avatar />
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="postHere__input" placeholder="Your Testimonial" type="text"/>
                    <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} placeholder="image url (Optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="postHere__boottom">

            </div>
        </div>
    )
}

export default PostHere
