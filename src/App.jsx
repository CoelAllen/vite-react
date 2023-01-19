import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
// @ts-ignore
import swimmer from "./assets/swimmer.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={swimmer}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
