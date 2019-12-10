import React, { useState, useEffect } from "react";
import "./App.css";
import Map from './components/Map/Map';
import Battle from './components/Battle/Battle';
import Items from './components/Items/Items';
import Food from './components/Items/Food';
import _ from 'lodash';

function App() {
  const [playerLocation, setPlayerLocation] = useState({x: 1, y: 1});
  const [items, setItems] = useState([]);
  const [foods, setFoods] = useState([])
  const [hp, setHp] = useState(100);
  const [currentEnemies, setCurrentEnemies] = useState([]);

  


  useEffect(() => {
    currentEnemies.forEach((enemy, index) => {
      if(enemy.hp <= 0) {

        const newEnemyList = _.cloneDeep(currentEnemies);
        newEnemyList.splice(index, 1);
        setCurrentEnemies(newEnemyList);
      }
    })
  }, [currentEnemies]);


  useEffect(() => {
    if (hp <= 0) {
      alert("Cause of death: Lack of Awesomeness");
    }
  },[hp]);

  

  const startBattle = enemies => {
    setCurrentEnemies(enemies);
  }

  const Page = () => {
    if (currentEnemies.length > 0) {
      return (
      <>
        <Battle hp={hp} setHp={setHp} currentEnemies={currentEnemies} setCurrentEnemies={setCurrentEnemies} /> 
      </>); 
    } else {

      return (
        <div>
          <Map
            startBattle={startBattle}
            setPlayerLocation={setPlayerLocation}
            playerLocation={playerLocation}
            items={items}
            setItems={setItems}
            setFoods={setFoods}
          />
        </div>
      );
    }
  }

  return (
  <div className="App">
    <div>
      Bobs Hitpoints: {hp}
    </div>
    <Page hp={hp} setHp={setHp} />
    <Items items={items} />
    <Food foods={foods} hp={hp} setHp={setHp} setFoods={setFoods} />
  </div>
  );
  
  }

export default App;