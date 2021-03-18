import Alumini from './Alumini'
import Header from './Header'
import React, { useEffect, useState } from 'react'
import db from './firebase';
import "./AluminiList.css";
import Contact from './Contact';

function Search({ searchName }) {
    const [aluminis , setAluminis] = useState([]);

    useEffect(() => {
        db.collection("aluminis")
        .where("aluminiName", "array-contains", searchName).onSnapshot((snapshot) =>
        setAluminis(snapshot.docs.map((doc) =>({id: doc.id,data: doc.data()})))
        );
    },[]);

    return (
        <div className="aluminilist">
            <Header />
            <div className="aluminilist__body">
            {aluminis.map((alumini) =>(
                <Alumini className="aluminilist__alumini"
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