
import './App.scss';

import Cities from "../Cities/Cities";
import CityStorage from "../CityStorage/CityStorage";
import Storage from "../Storage/Storage";
import Transportations from "../Transportations/Transportations";

function App() {
  return (
    <div className="app">
      <div>
      <h1 className="app-name">
      Спекулянт
      </h1>

      <div className="content">
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <Cities />
      <CityStorage />
      <Storage />
      <Transportations />
      </div>
    </div>
  );
}

export default App;
