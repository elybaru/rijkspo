import React, { useEffect } from "react";
import './App.css';
import Header from "./components/Header"
import { Switch, Route } from "react-router-dom"
import VisitorLog from "./components/VisitorLog"
import Favorites from "./components/Favorites"
import Search from "./components/Search"
import NavBar from "./components/NavBar"


function App() {
  // Change the page title to "Rijkspo" - not working

  // useEffect(() => {
  //   const text = "Rijkspo"
  //   document.title = text;
  // }, [text]);



  // console.log(process.env.REACT_APP_API_KEY)

  // fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&search?p=1&ps=12&who=Rembrandt&st=Objects&ii=6`)
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))

  return (
    <div>
      <h1>I'm the App component</h1>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/visitorlog">
          <VisitorLog />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;


// All works on display in the museum currently and with an image
// https://www.rijksmuseum.nl/en/search?p=3&ps=12&ondisplay=True&st=Objects&ii=0

// All works on display in the museum with an image and search string Rembrandt
// https://www.rijksmuseum.nl/en/search?q=Rembrandt&v=&s=&ondisplay=True&ii=0&p=1

// search: Rembrandt
// https://www.rijksmuseum.nl/en/search?p=1&ps=12&who=Rembrandt&st=Objects

// search: rembrandt
// https://www.rijksmuseum.nl/en/search?p=1&ps=12&who=Rembrandt&st=Objects

// search: painting and in the museum
// https://www.rijksmuseum.nl/en/search?q=painting&v=&s=&ondisplay=True&ii=0&p=1

// fetch all of them
// so when the user clicks, another fetch request
// modal pop up,
// save the results in state
// p=1&ps=100
// 1 page, 100 results


// State can be declared in paintingsContainer, and withing paintingsContainer, filers results saved in state
// in that filtered variable
// on Search


// passes down callback function, will pass back up the search term



// Copy info into a local db.json
// a form to upload a new artwork POST
// Visitor log


// stretch goal:
// PATCH to update favorite
// search
