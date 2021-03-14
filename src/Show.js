import React from 'react'
import "./Show.css";
import { Avatar} from "@material-ui/core";
function Show({ profileSrc , text , description}) {
    return (
        <div className="show">
            <div class="row services">
          <div class="icon">
          <Avatar src={profileSrc} />
          </div>
          <h3><span id="alutitle"><a>{text}</a></span></h3>
          <p>{description}
          </p>
        </div>

        </div>
    )
}

export default Show
