import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import db from './firebase';
import "./PostHere.css";
import { useStateValue } from './StateProvider';
import firebase from "firebase";


function PostHere() {
    const [{user} , dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // database manupulation pending
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,

        });

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
        </div>
    )
}

export default PostHere
