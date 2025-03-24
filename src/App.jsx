import React from "react";
import CarList from "./comṕonents/CarList";
import cars from "./data/cars.json";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <div className="title">
        <h1>Alura Cars -JS</h1>
      </div>      
      <CarList cars={cars} />
    </div>
  );
};

export default App;