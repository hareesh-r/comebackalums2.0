import React from 'react'
import "./Alumini.css"

function Alumini({ profilePic, message,aluminiName, regNo, cgpa ,designation }) {
    return (
        <div className="alumini">
            <div className="id-card">
                <img src={profilePic}/>
            </div>
            <blockquote>❝ {message}
              <br />RegNo : {regNo}
              <br />CGPA while passing : {cgpa} ❞
            </blockquote>
            <div className="alumini__name_designation">
            <h3>{aluminiName}<br /> <span>{designation}</span></h3>
            </div>
        </div>
    )
}
export default Alumini
