import React from "react";
import _ from 'lodash';

const Battle = props => {

  const attackEnemy = () => {
    const damage = Math.floor(Math.random() * 10); 
    const newEnemyList = _.cloneDeep(props.currentEnemies);
    newEnemyList[0].hp -= damage
    props.setCurrentEnemies(newEnemyList);
    attackHero();
  };

  const attackHero = () => {
    const damage = Math.floor(Math.random() * 7); 
    props.setHp(props.hp - damage);
  };

  return (
    <div>
      <div> Enemy's Hit points: {props.currentEnemies[0].hp} </div>
      <button onClick={attackEnemy}>Attack</button>
    </div>
  );
};

export default Battle;
