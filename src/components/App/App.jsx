import "./App.scss";

import Cities from "../Cities/Cities";
import CityStorage from "../CityStorage/CityStorage";
import Storage from "../Storage/Storage";
import Transportations from "../Transportations/Transportations";
import { useState } from "react";

function App() {
  const [currentCity, setCurrentCity] = useState(1);

  const [storages, setStorages] = useState([
    {
      cityId: 1,
      storage: [
        { id: 1, qty: 10 },
        { id: 2, qty: 25 },
      ],
    },
    {
      cityId: 2,
      storage: [
        { id: 1, qty: 5 },
        { id: 2, qty: 10 },
      ],
    },
    { cityId: 3, storage: [{ id: 1, qty: 35 }] },
  ]);

  const goods = [
    { id: 1, title: "Камень" },
    { id: 2, title: "Дерево" },
  ];

  function getStorageByCity() {
    const store = storages.find((storage) => {
      return storage.cityId === currentCity;
    });

    if (store) {
      return store.storage;
    } else {
      return [];
    }
  }

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
              <Storage
                currentCity={currentCity}
                storage={getStorageByCity()}
                goods={goods}
              />
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
