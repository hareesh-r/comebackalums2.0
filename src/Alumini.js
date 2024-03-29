import React from 'react'
import "./Alumini.css"

function Alumini({ profilePic, contactLink, message, aluminiName, regNo, cgpa, designation }) {
    return (
        <div  data-aos="fade-right">
            <div className="alumini">
                <a href={contactLink} target="__blank">
                    <div className="id-card">
                        <img src={profilePic} alt="Profile Here" />
                    </div>
                    <blockquote>❝ {message}
                        <br />RegNo : {regNo}
                        <br />CGPA while passing : {cgpa} ❞
                    </blockquote>
                    <div className="alumini__name_designation">
                        <h3>{aluminiName}<br /> <span>{designation}</span></h3>
                    </div>
                </a>
            </div>
            {/* <div className="ad__here">
                <h1>Ads will be displayed here</h1>
            </div> */}
        </div>
    )
}
export default Alumini
