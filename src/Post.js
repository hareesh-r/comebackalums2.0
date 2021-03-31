import { Avatar } from '@material-ui/core';
import { AccountCircle, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';
import { ChatBubbleOutline } from '@material-ui/icons';
import React from 'react'
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
    let URL = "whatsapp://send?text=Post shared from comebackalums.web.app \'"+message+"\'";
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <a href={URL} >
                    <NearMe />
                    <p>Share</p></a>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
