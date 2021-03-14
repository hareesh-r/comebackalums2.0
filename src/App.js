import React from "react";
import './App.css';
import Header from "./Header";
import About from "./About";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <About />
        <Feed />
      </div>
          
      
    </div>
  );
}
// https://console.firebase.google.com/u/1/project/comebackalums/settings/general/web:ZDhlZGI0OTItNWI2YS00MmJmLTkxMjctODQ2ZTY5Y2M4ZDUw
export default App;
