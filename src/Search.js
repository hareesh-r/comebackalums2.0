import Alumini from './Alumini'
import Header from './Header'
import React, { useEffect, useState } from 'react'
import db from './firebase';
import "./Search.css";
import Contact from './Contact';
import SearchIcon from '@material-ui/icons/Search';



function Search() {

    const [aluminis, setAluminis] = useState([]);
    const [searchName, setSearch] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(searchName);
        db.collection("aluminis")
            .where("aluminiName", "==",searchName).onSnapshot((snapshot) =>
                setAluminis(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
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
            <br />
            <div className="search__body">
                <div className="search__input">
                <input type="text" placeholder="Search Alumini" value={searchName}
                    onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSubmit} type="submit"><SearchIcon /></button>
                </div>
                <br />
                <br />
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
