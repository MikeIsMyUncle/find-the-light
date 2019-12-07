import React, { useState } from "react";
import "./App.css";
import Map from './components/Map/Map';
import Battle from './components/Battle/Battle';

function App() {
  const [playerLocation, setPlayerLocation] = useState({x: 1, y: 1});
  const [inBattle, setInBattle] = useState(false);

  const Page = () => {
    if (inBattle) {
      return <Battle setInBattle={setInBattle} />;
    } else {
      return <Map setInBattle={setInBattle} setPlayerLocation={setPlayerLocation} playerLocation={playerLocation} />;
    }
  }

  return (
  <div className="App">
    <Page />
  </div>
  );
}

// if ()

export default App;
