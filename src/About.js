import React from 'react'
import "./About.css";
import ProgressBar from "./Progressbar";
import CreateIcon from '@material-ui/icons/Create';
import ListAltIcon from '@material-ui/icons/ListAlt';


const testData = [
    { bgcolor: "#c70000", completed: 100, title_text: "Total percent of Students" },
    { bgcolor: "#c70000", completed: 80, title_text: "Alumni Found" },
    { bgcolor: "#c70000", completed: 90, title_text: "Batch 2020" },
    { bgcolor: "#ff0000", completed: 32, title_text: "Batch 2019" },
    { bgcolor: "#ff0000", completed: 19, title_text: "Batch 2018" },
    { bgcolor: "#fc6d6d", completed: 16, title_text: "Batch 2017" },
    { bgcolor: "#fc6d6d", completed: 10, title_text: "Batch 2016" },
];


function About() {
    return (
        <div className="about">
            <div className="about__left">
                <h2 className="bout">About Us</h2>
                <h3>Comback</h3>
                <p>Would be an online platform for college alumni to talk about their experiences as well as to encourage other students regarding what they have accomplished.<br />
                Hello there, Alumni! Take advantage of this opportunity to inspire a large number of students.<br />
                Share what you've accomplished during your college career in this segment.<br />
                    <strong>How ?</strong> Just click on the <strong>Alumni Application</strong> <CreateIcon /> and proceed.<br />
                    <strong>Not an Alumni ?</strong> Look for mentors here like who you want to become.<br />
                Simple as that just click on <strong>Alumni List</strong> <ListAltIcon /> to see the list of alumni.<br /></p>
            </div>
            <div className="about__right">
                {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title_text={item.title_text} />
                ))}
            </div>
        </div>
    )
}

export default About
