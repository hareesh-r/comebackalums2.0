import { Avatar } from '@material-ui/core';
import { NearMe, ThumbDown, ThumbUp } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react'
import "./Post.css";
import db from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Post({ id, profilePic, image, username, timestamp, message, likeCount }) {

    let like = "like" + id;

    let isLiked = "0";

    let increase = () => {
        if (isLiked === "0") {
            isLiked = "1";
            db.collection("posts").doc(id).update({ "likeCount": likeCount + 1 });
            document.getElementById(like).style.color = "red";
            document.getElementById(dislike).style.color = "grey";
        }
        else if (isLiked === "1") {
            isLiked = "0";
            db.collection("posts").doc(id).update({ "likeCount": likeCount - 1 });
            document.getElementById(like).style.color = "grey";
            document.getElementById(dislike).style.color = "red";

        }
    }
    let dislike = "dislike" + id;

    let decrease = () => {
        if (isLiked === "0") {
            isLiked = "1";
            db.collection("posts").doc(id).update({ "likeCount": likeCount - 1 });
            document.getElementById(dislike).style.color = "red";
            document.getElementById(like).style.color = "grey";
        }
        else if (isLiked === "1") {
            isLiked = "0";
            db.collection("posts").doc(id).update({ "likeCount": likeCount + 1 });
            document.getElementById(dislike).style.color = "grey";
            document.getElementById(like).style.color = "red";

        }
    }

    let URL = "whatsapp://send?text=Post shared from comebackalums.web.app *" + message + "*";

    const [{ user }, dispatch] = useStateValue();

    const signOut = () => {

        localStorage.clear();
        dispatch({
            type: actionTypes.RESET_USER,
            user: null,
        });
    }

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
                    <p>Like</p>
                </div>
                <div id={dislike} className="post__option">
                    <ThumbDown onClick={decrease} />
                    <p>Remove Like</p>
                </div>
                <div className="post__option">
                    <a href={URL} >
                        <NearMe />
                        <p>Share</p></a>
                </div>
                <div className="post__option">
                    <a>
                        <ExitToAppIcon onClick={signOut} /></a>
                </div>
            </div>
        </div>
    )
}

export default Post

