import "./App.scss";

import Cities from "../Cities/Cities";
import CityStorage from "../CityStorage/CityStorage";
import Storage from "../Storage/Storage";
import Transportations from "../Transportations/Transportations";
import { useState } from "react";

function App() {
  const [currentCity, setCurrentCity] = useState(1);

  return (
    <div className="app">
      <div>
        <h1 className="app-name">Спекулянт</h1>

        <Cities
          currentCity={currentCity}
          onChange={(city) => {
            setCurrentCity(city);
          }}
        />

        <div className="content">
          <div className="column">
            <div className="storage">
              <Storage />
            </div>
            <div className="transportations">
              <Transportations />
            </div>
          </div>
          <div className="column">
            <div className="city-storage">
              <CityStorage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
