import React,{useEffect,useState} from "react";
import './App.css';
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";
import AluminiList from "./AluminiList";
import Apply from "./Apply";
import Search from "./Search";

function App() {

  const [{ user }, dispatch] = useStateValue();


  return (
    <Router>
      <Switch>
        <div className="App" >
          {!user? (
            <Route path="/" component={Login} />
          ) : (
            <>
              <Route exact path="/about" component={AboutComponent} />
              <Route exact path="/contact" component={ContactComponent} />
              <Route exact path="/aluminilist" component={AluminiList} />
              <Route exact path="/apply" component={Apply} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </>
          )
          }
        </div>
      </Switch>
    </Router>
  );
}
// https://console.firebase.google.com/u/1/project/comebackalums/settings/general/web:ZDhlZGI0OTItNWI2YS00MmJmLTkxMjctODQ2ZTY5Y2M4ZDUw
export default App;
