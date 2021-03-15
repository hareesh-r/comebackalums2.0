import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import "./PostHere.css";
import { useStateValue } from './StateProvider';


function PostHere() {
    const [{user} , dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // database manupulation pending

        setInput("");
        setImageUrl("");
    };
    return (
        <div className="postHere">
            <div className="postHere__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="postHere__input" placeholder={`Whats on your mind , ${user.displayName}`} type="text" />
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
