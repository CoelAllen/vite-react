import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

function App() {
  const cardData = data.map((d) => {
    return (
      <Card
        key={d.id}
        title={d.title}
        description={d.description}
        price={d.price}
        coverImg={d.coverImg}
        stats={d.stats}
        location={d.location}
        openSpots={d.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cardData}</section>
    </div>
  );
}

export default App;
