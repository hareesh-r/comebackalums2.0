import React from "react";
import './App.css';
import Header from "./Header";
import About from "./About";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";
import AluminiList from "./AluminiList";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Router>
      <Switch>
        <div className="App" >
          {!user ? (
            <Route path="/" component={Login} />
          ) : (
            <>
              <Route path="/about" component={AboutComponent} />
              <Route path="/contact" component={ContactComponent} />
              <Route path="/aluminilist" component={AluminiList} />
              <Route path="/home" component={Home} />
              <Route path="/" component={Home} />
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
