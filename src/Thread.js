import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Thread.css"

function Thread({ profilePic, username, message }) {
    return (
        <div className="thread">
            <div className="thread__top">
                <Avatar src={profilePic} className="thread__avatar" />
                <div className="thread__topInfo">
                    <h3>{username}</h3>
                </div>
            </div>

            <div className="thread__bottom">
                <p>{message}</p>
            </div>

        </div>
    )
}

export default Thread
