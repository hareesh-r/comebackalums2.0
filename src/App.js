import React from "react";
import './App.css';
import Header from "./Header";
import About from "./About";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Router>
      <div className="App">
        <Switch>
          {!user ? (
            <Route path="/">
              <Login />
            </Route>
          ) : (
            <>
              <Route path="/contact">
                <Header />
                <Contact />
              </Route>



              <Route path="/">
                <Header />
                <div className="app__body">
                  <About />
                  <Feed />
                </div>
              </Route>
            </>
          )
          }
        </Switch>
      </div>
    </Router>
  );
}
// https://console.firebase.google.com/u/1/project/comebackalums/settings/general/web:ZDhlZGI0OTItNWI2YS00MmJmLTkxMjctODQ2ZTY5Y2M4ZDUw
export default App;
