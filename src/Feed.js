import React from 'react'
import "./Feed.css";
import ShowOff from "./ShowOff";
import PostHere from "./PostHere";
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <ShowOff />
            {/* Poster */}
            <PostHere />
            <Post
                profilePic="https://avatars.githubusercontent.com/u/53457844?s=460&u=56f3712d5b74b867cd4a6b2981230b9f0b446edf&v=4"
                message="Hello ComeBack 2.0"
                timestamp="This is a timeStamp.."
                username="Hareesh"
                image="https://avatars.githubusercontent.com/u/53457844?s=460&u=56f3712d5b74b867cd4a6b2981230b9f0b446edf&v=4"
            />
            <Post 
            profilePic="https://avatars.githubusercontent.com/u/53457844?s=460&u=56f3712d5b74b867cd4a6b2981230b9f0b446edf&v=4"
            message="Test with Instagram Post"
            timestamp="5:10 PM"
            username="Hareesh"
            image="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-15/e35/130818281_2812069225676377_8278376770559914186_n.jpg?tp=1&_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=58gfviUHVS8AX9ZofWD&oh=3f5ed339af7320a8f110d9e0536c1ba0&oe=6079BD25"/>
            <Post />
        </div>
    )
}

export default Feed
