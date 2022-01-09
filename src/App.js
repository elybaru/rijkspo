import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header"
import { Switch, Route } from "react-router-dom"
import VisitorLog from "./components/VisitorLog"
import Favorites from "./components/Favorites"
import Search from "./components/Search"
import NavBar from "./components/NavBar"
import ArtworksContainer from "./components/ArtworksContainer";
import ArtworkDetail from "./components/ArtworkDetail";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import "./styles.css";



function App() {
  const [searchResults, setSearchResults] = useState({})
  // Change the page title to "Rijkspo" - not working

  // useEffect(() => {
  //   const text = "Rijkspo"
  //   document.title = text;
  // }, [text]);

  // useEffect(() => {
  //   document.title = "Rijkspo";
  // }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/visitorlog">
            <VisitorLog />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route path="/favorites/:id">
            {/* change to objectnumber instead of id */}
            <ArtworkDetail />
          </Route>
          <Route path="/artworks/:id">
            <ArtworkDetail />
          </Route>
          <Route exact path="/search">
            <Search setSearchResults={setSearchResults} />
            <ArtworksContainer searchResults={searchResults} />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;