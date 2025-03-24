import React from "react";
import "../styles/App.css";

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={`${car.brand} ${car.model}`} />
          <h3>{car.brand} {car.model}</h3>
          <p>Año: {car.year}</p>
          <p>{car.isElectric ? "Eléctrico" : "Gasolina"}</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;