import React, { useState } from "react";
import "./App.css";
import Map from './components/Map/Map';
import Battle from './components/Battle/Battle';
import Food from './components/Items/Food';

function App() {
  const [playerLocation, setPlayerLocation] = useState({x: 1, y: 1});
  const [inBattle, setInBattle] = useState(false);
  const [foodAmount, setFoodAmount] = useState(0)

  const Page = () => {
    if (inBattle) {
      return <Battle setInBattle={setInBattle} />;
    } else {

      return (
        <div>
          <Map
            setInBattle={setInBattle}
            setPlayerLocation={setPlayerLocation}
            playerLocation={playerLocation}
            setFoodAmount={setFoodAmount}
          />
          <Food foodAmount={foodAmount} setFoodAmount={setFoodAmount} />
        </div>
      );
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