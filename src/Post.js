import { Avatar } from '@material-ui/core';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import ShareIcon from '@material-ui/icons/Share';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React , {useEffect} from 'react'
import "./Post.css";
import db from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import DeleteIcon from '@material-ui/icons/Delete';
import AOS from 'aos';

function Post({ id, profilePic, image, username, timestamp, message, likeCount }) {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    },[]);

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

    let wpURL = "https://wa.me/?text=Post%20shared%20from%20https://comebackalums.web.app%20*" + message.replaceAll(" ","%20").replaceAll("  ","%20").replaceAll("\n","%20").replaceAll("\"","") + "*";

    const [{ user }, dispatch] = useStateValue();

    const signOut = () => {

        localStorage.clear();
        dispatch({
            type: actionTypes.RESET_USER,
            user: null,
        });
    }

    let deletePost = () => {
        if (username === user.displayName) {
            if (window.confirm("Your post will be deleted")) {
                db.collection("posts").doc(id).delete();
                alert("Your post is successfully deleted");
            }
        } else {
            alert("You don't have permission to delete " + username + "'s post");
        }
    }


    return (
        <div data-aos="fade-right" className="post">
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
                    <a href={wpURL} target="_blank"> 
                        <ShareIcon />
                        <p>Share</p>
                    </a> 
                </div>
                <div className="post__option post__option__delete">
                    <DeleteIcon onClick={deletePost} />
                </div>
                <div className="post__option">
                    <a>
                        <ExitToAppIcon onClick={signOut} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Post

