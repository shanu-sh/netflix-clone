import React from "react";
import "./App.css";
import requets from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requets.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requets.fetchTrending} />
    </div>
  );
}

export default App;
