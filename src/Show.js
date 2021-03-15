import React from 'react'
import "./Show.css";
import { Avatar } from "@material-ui/core";
function Show({ profileSrc, text, description }) {
    return (
        <div className="show">
            <div className="services">
                <div className="icon">
                    <Avatar src={profileSrc} />
                </div>
                <h3 className="alutitle">{text}</h3>
                <p>{description}
                </p>
            </div>
        </div>
    )
}

export default Show
