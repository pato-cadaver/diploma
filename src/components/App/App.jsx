import logo from "../../logo.svg";
import './App.css';

import Cities from "../Cities/Cities";
import CityStorage from "../CityStorage/CityStorage";
import Storage from "../Storage/Storage";
import Transportations from "../Transportations/Transportations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img scr={logo} className="App-logo" alt="logo"/>
      </header>

      <Cities />
      <CityStorage />
      <Storage />
      <Transportations />

    </div>
  );
}

export default App;
