import Alumini from "./Alumini";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import db from "./firebase";
import "./AluminiList.css";
import Contact from "./Contact";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function AluminiList() {
  const [aluminis, setAluminis] = useState([]);
  const [sortBy, setSortBy] = useState("cgpa");
  const [load, setLoad] = useState(true);

  const sortByName = () => {
    setSortBy("aluminiName");
    db.collection("aluminis")
      .orderBy("aluminiName", "asc")
      .onSnapshot((snapshot) =>
        setAluminis(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  };
  const sortByDesi = () => {
    setSortBy("designation");
    db.collection("aluminis")
      .orderBy("designation", "asc")
      .onSnapshot((snapshot) =>
        setAluminis(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  };
  const sortByReg = () => {
    setSortBy("regNo");
    db.collection("aluminis")
      .orderBy("regNo", "asc")
      .onSnapshot((snapshot) =>
        setAluminis(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  };
  const sortByCGPA = () => {
    setSortBy("cgpa");
    db.collection("aluminis")
      .orderBy("cgpa", "desc")
      .onSnapshot((snapshot) =>
        setAluminis(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  };

  useEffect(() => {
    db.collection("aluminis")
      .orderBy(sortBy, "desc")
      .onSnapshot((snapshot) =>
        setAluminis(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, []);

  function imageExists(image_url) {
    try {
      var http = new XMLHttpRequest();
      http.open("HEAD", image_url, false);
      http.send();
    } catch (err) {
      return http.status != 403 && http.status != 404;
    }
    return http.status != 403 && http.status != 404;
  }

  return (
    <div className="aluminilist">
      <Header active={"list"} />
      <div className="aluminilist__sort">
        <div class="dropdown">
          <button class="dropbtn">
            Sort By <ArrowDropDownIcon />
          </button>
          <div class="dropdown-content">
            <button onClick={sortByDesi}>Sort by Designation</button>
            <button onClick={sortByName}> Sort by Name</button>
            <button onClick={sortByReg}>Sort by Reg NO</button>
            <button onClick={sortByCGPA}>Sort by CGPA</button>
          </div>
        </div>
      </div>
      <div className="aluminilist__body">
        {aluminis.map((alumini) => (
          <Alumini
            className="aluminilist__alumini"
            key={alumini.id}
            profilePic={
              imageExists(alumini.data.profilePic)
                ? alumini.data.profilePic
                : alumini.data.isMale
                ? `https://firebasestorage.googleapis.com/v0/b/comebackalums.appspot.com/o/avatar-icon-images-4.jpg?alt=media&token=90930622-551b-44b1-bf50-12f17da35e4b`
                : `https://firebasestorage.googleapis.com/v0/b/comebackalums.appspot.com/o/87-512.webp?alt=media&token=af35f40d-278e-4712-8832-1333fecc48d3`
            }
            message={alumini.data.message}
            regNo={alumini.data.regNo}
            aluminiName={alumini.data.aluminiName}
            cgpa={alumini.data.cgpa}
            designation={alumini.data.designation}
            contactLink={alumini.data.contactLink}
          />
        ))}
      </div>
      {load && (
        <div className="loader-container">
          <div class="loader"></div>
        </div>
      )}

      <Contact />
    </div>
  );
}

export default AluminiList;
