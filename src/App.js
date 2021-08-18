import "./styles.css";
import React, { useState } from "react";

const travelDb = require("./data");

export default function App() {
  const [places, setPlaces] = useState("NorthIndia");

  function travelInputHandler(places) {
    setPlaces(places);
  }

  return (
    <div className="App">
      <h1>Travel Recommendations</h1>
      <div className="genre-container">
        {Object.keys(travelDb).map((selectedPlace) => {
          return (
            <p
              className="genre-items"
              key={selectedPlace}
              onClick={() => travelInputHandler(selectedPlace)}
            >
              {selectedPlace}
            </p>
          );
        })}
      </div>

      {travelDb[places].map((place) => {
        return (
          <p key={place.name}>
            {" "}
            <div>
              {" "}
              <span className="placeName">Name:</span> {place.name}
            </div>
            <div>
              <span className="bestTime">Best Time to Visit:</span>{" "}
              {place.bestTimeToVisit}
            </div>
          </p>
        );
      })}
    </div>
  );
}
