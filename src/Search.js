import Alumini from './Alumini'
import Header from './Header'
import React, { useEffect, useState } from 'react'
import db from './firebase';
import "./Search.css";
import Contact from './Contact';
import SearchIcon from '@material-ui/icons/Search';

var searchBy = "name";

function Search() {

    const [aluminis, setAluminis] = useState([]);
    const [searchName, setSearch] = useState("");
    var background_nm;
    var background_ds;
    const setName = () => {
        searchBy = "name";
        background_nm = document.getElementById("namebtn").style.backgroundColor;
        if (background_nm === "red") {
            document.getElementById("namebtn").style.background = "white";
            document.getElementById("desbtn").style.background = "red";
        } else {
            document.getElementById("namebtn").style.background = "red";
            document.getElementById("desbtn").style.background = "white";
        }
    }
    const setDes = () => {
        searchBy = "des";
        background_ds = document.getElementById("desbtn").style.backgroundColor;
        if (background_ds === "red") {
            document.getElementById("desbtn").style.background = "white";
            document.getElementById("namebtn").style.background = "red";
        } else {
            document.getElementById("desbtn").style.background = "red";
            document.getElementById("namebtn").style.background = "white";
        }
    }
    const handleSubmit = (e) => {

        e.preventDefault();

        if (searchBy === "des") {
            // db.collection("aluminis")
            //     .where("designation", "==", searchName).onSnapshot((snapshot) =>
            //         setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
            db.collection("aluminis").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.data().designation.split(" ").forEach((partName) => {
                        if (partName == searchName) {
                            console.log("match found " + doc.data().designation);
                            db.collection("aluminis").where("aluminiName", "==", doc.data().designation).onSnapshot((snapshot) =>
                                setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
                        }
                    });
                });
            });
        }
        else if (searchBy === "name") {
            // db.collection("aluminis")
            //     .where("aluminiName", "==", searchName).onSnapshot((snapshot) =>
            //         setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
            db.collection("aluminis").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.data().aluminiName.split(" ").forEach((partName) => {
                        if (partName == searchName) {
                            console.log("match found "+doc.data().aluminiName);
                            db.collection("aluminis").where("aluminiName", "==", doc.data().aluminiName).onSnapshot((snapshot) =>
                                setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
                        }
                    });
                });
            });
        }

        setSearch("");

    };

    useEffect(() => {
        db.collection("aluminis")
            .where("aluminiName", "==", "Hareesh").onSnapshot((snapshot) =>
                setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    }, []);

    return (
        <div className="search">
            <Header />
            <br />
            <br />
            <div className="search__body">
                <div className="search__input">
                    <input type="text" placeholder="Search Alumini" value={searchName}
                        onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={handleSubmit} type="submit"><SearchIcon /></button>
                </div>
                <h5>Search by: <button className="searchBy__btn" id="namebtn" onClick={setName}>Name</button><button id="desbtn" className="searchBy__btn" onClick={setDes}>Designation</button></h5>
                <br />

                {aluminis.map((alumini) => (
                    <Alumini className="search__alumini"
                        key={alumini.id}
                        profilePic={alumini.data.profilePic}
                        message={alumini.data.message}
                        regNo={alumini.data.regNo}
                        aluminiName={alumini.data.aluminiName}
                        cgpa={alumini.data.cgpa}
                        designation={alumini.data.designation}
                    />
                ))}
            </div>
            <Contact />
        </div>
    )
}

export default Search
