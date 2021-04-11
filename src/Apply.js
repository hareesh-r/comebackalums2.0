import React, { useState } from 'react'
import db from './firebase';
import "./Apply.css";
import { useStateValue } from './StateProvider';
import Header from './Header';
import Footer from './Footer';


function Apply() {
    const [{ user }] = useStateValue();

    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [aluminiName, setAluminiName] = useState("");
    const [CGPA, setCGPA] = useState("");
    const [designation, setDesignation] = useState("");
    const [regNo, setRegNo] = useState("");
    const [contactLink, setContactLink] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("aluminis").add({
            message: message,
            profilePic: imageUrl,
            aluminiName: aluminiName,
            cgpa: CGPA,
            designation: designation,
            regNo: regNo,
            contactLink: contactLink,
            applicant: user.displayName,
        });

        setMessage("");
        setImageUrl("");
        setAluminiName("");
        setCGPA("");
        setDesignation("");
        setRegNo("");
        setContactLink("");

    };
    return (
        <div className="apply">
            <Header />
            <div className="apply__top">
                <form>
                    <br />
                    <br />
                    <br />
                    <h1>Please Enter Your Details Here</h1>
                    <h3>Kindly Copy and Paste your image link </h3>
                    <div className="apply__inputs">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} placeholder={`Your words , ${user.displayName}`} type="text" />

                        <input
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)} placeholder={`URL of ${user.displayName}'s image`} type="text" />


                        <input
                            value={aluminiName}
                            onChange={(e) => setAluminiName(e.target.value)} placeholder={`Real Name of ${user.displayName}`} type="text" />


                        <input
                            value={CGPA}
                            onChange={(e) => setCGPA(e.target.value)} placeholder={`CGPA while passing`} type="text" />

                        <input
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)} placeholder="Company and Designation" type="text" />

                        <input
                            value={regNo}
                            onChange={(e) => setRegNo(e.target.value)} placeholder="Your Registration Number" type="text" />

                        <input
                            value={contactLink}
                            onChange={(e) => setContactLink(e.target.value)} placeholder="Contact (Any links , linkedin , fb , insta...)" type="text" />

                        <button onClick={handleSubmit} type="submit">Publish</button>

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Apply