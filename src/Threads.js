import Contact from './Contact'
import "./Threads.css";
import Header from './Header'
import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import db from './firebase';
import { useStateValue } from './StateProvider';
import Thread from './Thread';
import firebase from "firebase";


function Threads() {
    const [{ user }] = useStateValue();
    const [thread, setThread] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("thread").add({

            message: thread.trim(),
            profilePic: user.photoURL.trim(),
            username: user.displayName.trim(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),


        });

        setThread("");
    };

    const [threads, setThreads] = useState([]);

    useEffect(() => {
        db.collection("thread").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setThreads(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className="threadss">
            <Header />
            <h1>Inter College Threads</h1>
            <div className="threads">
                <div className="threads__top">
                    <Avatar src={user.photoURL} />
                    <form>
                        <input
                            value={thread}
                            onChange={(e) => setThread(e.target.value)}
                            className="threads__input" placeholder={`Create Your Thread , ${user.displayName}`} type="text" />
                        <button onClick={handleSubmit} type="submit">Post Thread</button>
                    </form>
                </div>
            </div>
            {threads.map((singleThread) => (
                <Thread
                    profilePic={singleThread.data.profilePic}
                    message={singleThread.data.message}
                    username={singleThread.data.username}
                />
            ))}
            <Contact />
        </div>
    )
}

export default Threads
