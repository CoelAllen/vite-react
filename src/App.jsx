import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

function App() {
  const cardData = data.map((data) => {
    return <Card key={data.id} {...data} />;
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
