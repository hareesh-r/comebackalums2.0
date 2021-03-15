import React from 'react'
import "./Feed.css";
import ShowOff from "./ShowOff";
import PostHere from "./PostHere";

function Feed() {
    return (
        <div className="feed">
            <ShowOff />
            {/* Poster */}
            <PostHere />
        </div>
    )
}

export default Feed
