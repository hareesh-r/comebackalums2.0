import Alumini from './Alumini'
import Header from './Header'
import React, { useEffect, useState } from 'react'
import db from './firebase';
import "./AluminiList.css";
import Contact from './Contact';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function AluminiList() {
    const [aluminis, setAluminis] = useState([]);
    const [sortBy, setSortBy] = useState("cgpa");

    const sortByName = () => {
        setSortBy("aluminiName");
        console.log("Sort by name");
        db.collection("aluminis").orderBy("aluminiName", "asc").onSnapshot((snapshot) =>
            setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));

    }
    const sortByDesi = () => {
        setSortBy("designation");
        console.log("Sort by designation");
        db.collection("aluminis").orderBy("designation", "asc").onSnapshot((snapshot) =>
            setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));

    }
    const sortByReg = () => {
        setSortBy("regNo");
        console.log("Sort by regNo");
        db.collection("aluminis").orderBy("regNo", "asc").onSnapshot((snapshot) =>
            setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));

    }
    const sortByCGPA = () => {
        setSortBy("cgpa");
        console.log("Sort by cgpa");
        db.collection("aluminis").orderBy("cgpa", "desc").onSnapshot((snapshot) =>
            setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    }

    useEffect(() => {
        db.collection("aluminis").orderBy(sortBy, "desc").onSnapshot((snapshot) =>
            setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    }, []);

    return (
        <div className="aluminilist">
            <Header />
            <div className="aluminilist__sort">
                <div class="dropdown">
                    <button class="dropbtn">Sort By <ArrowDropDownIcon /></button>
                    <div class="dropdown-content">
                        <button onClick={sortByDesi} >
                            Sort by Designation
                        </button>
                        <button onClick={sortByName} > Sort by Name
                        </button>
                        <button onClick={sortByReg}>Sort by Reg NO
                        </button>
                        <button onClick={sortByCGPA}>Sort by CGPA
                        </button>
                    </div>
                </div>
            </div>
            <div className="aluminilist__body">
                {aluminis.map((alumini) => (
                    <Alumini className="aluminilist__alumini"
                        key={alumini.id}
                        profilePic={alumini.data.profilePic}
                        message={alumini.data.message}
                        regNo={alumini.data.regNo}
                        aluminiName={alumini.data.aluminiName}
                        cgpa={alumini.data.cgpa}
                        designation={alumini.data.designation}
                        contactLink={alumini.data.contactLink}
                    />
                ))}
            </div>
            <Contact />
        </div>
    )
}

export default AluminiList
