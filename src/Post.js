import { Avatar } from '@material-ui/core';
import { AccountCircle, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';
import { ChatBubbleOutline } from '@material-ui/icons';
import React from 'react'
import "./Post.css";
import db from './firebase';

let isLiked = "0";

function Post({ id, profilePic, image, username, timestamp, message, likeCount }) {

    let like = "like" + id;

    let increase = () => {
        if (isLiked == "0") {
            isLiked = "1";
            db.collection("posts").doc(id).update({ "likeCount": likeCount + 1 });
            document.getElementById(like).style.color = "red";
        }
        else if (isLiked == "1") {
            isLiked = "0";
            db.collection("posts").doc(id).update({ "likeCount": likeCount - 1 });
            document.getElementById(like).style.color = "grey";

        }
    }

    let URL = "whatsapp://send?text=Post shared from comebackalums.web.app *" + message + "*";

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
                <div id={like} className="post__option">
                    <ThumbUp onClick={increase} /> {likeCount}
                    <p>Likes</p>
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

