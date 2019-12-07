import React, { useState, useEffect } from "react";

const Battle = props => {
  const [enemyHp, setEnemyHp] = useState(100);
  const [hp, setHp] = useState(100);

  useEffect(() => {
    if (enemyHp <= 0 || hp <= 0) {
      props.setInBattle(false);
    }
  }, [hp, enemyHp]);

  const attackEnemy = () => {
    const damage = Math.floor(Math.random() * 10); //Math.floor means round down
    setEnemyHp(enemyHp - damage);
    attackHero();
  };

  const attackHero = () => {
    const damage = Math.floor(Math.random() * 7); //Math.floor means round down
    setHp(hp - damage);
  };

  const attackEnemyBow = () => {
    var damage = Math.floor(Math.random() * 12);
    if (damage >= 10) {
      alert('HEADSHOT!!!')
       var damage = 15
    } else {
      attackHero();
    }
    setEnemyHp(enemyHp - damage);
  }

  return (
    <div>
      <div> Bob's Hit points: {hp} </div>
      <div> Enemy's Hit points: {enemyHp} </div>
      <button onClick={attackEnemy}>Attack</button>
      <button onClick={attackEnemyBow}>Attack with bow</button>
    </div>
  );
};

export default Battle;
