import React, { useState } from 'react'
import db from './firebase';
import "./Apply.css";
import { useStateValue } from './StateProvider';
import Header from './Header';


function Apply() {
    const [{user} , dispatch] = useStateValue();

    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [aluminiName, setAluminiName] = useState("");
    const [CGPA, setCGPA] = useState("");
    const [designation, setDesignation] = useState("");
    const [regNo, setRegNo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // database manupulation pending
        db.collection("aluminis").add({
            message: message,
            profilePic: imageUrl,
            aluminiName: aluminiName,
            cgpa : CGPA,
            designation: designation,
            regNo : regNo,
        });

        setMessage("");
        setImageUrl("");
        setAluminiName("");
        setCGPA("");
        setDesignation("");
        setRegNo("");
    };
    return (
        <div className="apply">
            <Header />
            <div className="apply__top">

                <form>
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} placeholder={`Your Testimonial , ${user.displayName}`} type="text" />

                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)} placeholder={`URL of your Image , ${user.displayName}`} type="text" />

                    <input
                        value={aluminiName}
                        onChange={(e) => setAluminiName(e.target.value)} placeholder={`Your Real Name , ${user.displayName}`} type="text" />

                    <input
                        value={CGPA}
                        onChange={(e) => setCGPA(e.target.value)} placeholder={`CGPA while passing, ${user.displayName}`} type="text" />

                    <input
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)} placeholder="Your Designation please" />

                    <input
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)} placeholder="Your Registration Number" />

                    <button onClick={handleSubmit} type="submit">Publish</button>
                </form>
            </div>
        </div>
    )
}

export default Apply