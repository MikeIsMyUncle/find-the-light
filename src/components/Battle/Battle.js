import React, { useState } from "react";

const Battle = props => {
  const [enemyHp, setEnemyHp] = useState(100);
  const [hp, setHp] = useState(100);

  const attackEnemy = () => {
    const damage = Math.floor(Math.random() * 10); //Math.floor means round down
    setEnemyHp(enemyHp - damage);
    attackHero();
  };

  const attackHero = () => {
    const damage = Math.floor(Math.random() * 7); //Math.floor means round down
    setHp(hp - damage);
  };

  return (
    <div>
      <div> Bob's Hit points: {hp} </div>
      <div> Enemy's Hit points: {enemyHp} </div>
      <button onClick={attackEnemy}>Attack</button>
      <button onClick={() => props.setInBattle(false)} >Run Away</button>
    </div>
  );
};

export default Battle;
