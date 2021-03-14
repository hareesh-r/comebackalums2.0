import React from 'react'
import "./About.css";
import ProgressBar from "./Progressbar";


const testData = [
    { bgcolor: "#007bff", completed: 100 ,title_text:"Total Students"},
    { bgcolor: "#007bff", completed: 80 ,title_text:"Alumini Found"},
    { bgcolor: "#007bff", completed: 32 ,title_text:"Batch 2019"},
    { bgcolor: "#007bff", completed: 19 ,title_text:"Batch 2018"},
    { bgcolor: "#007bff", completed: 16 ,title_text:"Batch 2017"},
    { bgcolor: "#007bff", completed: 10 ,title_text:"Batch 2016"},
  ];


function About() {
    return (
        <div className="about">
            <div className="about__left">
            <h2 className="bout">About Us</h2>
            <h3>Comback</h3>
                <p>Is an online portal for alumini of the colleges to share their<br />
                 experience also help other students with what they have done for what they have achieved<br />
            Hey Alumini out there Grab this opportunity to become ispiration to lot of students.<br />
            Share Your Achievements here with what you have achieved through your college.<br />
            How ? Just click on the Alumini Application and proceed.<br />
            Not an alumini ? Look for mentors here like who you want to become.<br />
            Simple as that just click on Alumini List to see the list of alumini.<br /></p>
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
