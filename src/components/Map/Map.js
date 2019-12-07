import React, { useState } from 'react'
import styled from 'styled-components';
import positions from '../../data/maps.js';


const Map = props => {

  const GridContainer = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid red;
    display: block;
    position: relative;
  `;

  const Grid = positions.map(position => {
    return (
        <div key={`X${position.x}_Y${position.y}`} x={position.x} y={position.y}
        style={{
          position: 'absolute',
          left: position.x * 20 + 'px',
          bottom: position.y * 20 + 'px',
          width: '20px',
          height: '20px',
          backgroundColor: position.type === 1 ? 'blue' : 'pink'
          
        }} />
    );
  })

  const MovementButton = styled.button`
    width: 100px;
    height: 100px;
  `;

  const getPosition = pos => {
    return positions.find(
      position =>
        position.x === pos.x && position.y == pos.y
    );
  }

  const isLegalMove = pos => {
    const newPosition = getPosition(pos);
    if (!newPosition) {
      return false;
    }
    if (newPosition.type === 1) {
      return false;
    }
    return true;
  }

  const isBattle = pos => {
    if (getPosition(pos).enemies) {
      props.setInBattle(true);
    }
  };

  const moveUp = () => {
    const newLocation = { x: props.playerLocation.x, y: props.playerLocation.y + 1}
    if(isLegalMove(newLocation)) {
      props.setPlayerLocation(newLocation);
      isBattle(newLocation);
    }
  }

  const moveDown = () => {
    const newLocation = { x: props.playerLocation.x, y: props.playerLocation.y - 1 }
    if (isLegalMove(newLocation)) {
      props.setPlayerLocation(newLocation); 
      isBattle(newLocation);
    }
  }

  const moveRight = () => {
    const newLocation = { x: props.playerLocation.x + 1, y: props.playerLocation.y}
    if (isLegalMove(newLocation)) {
      props.setPlayerLocation(newLocation);
      isBattle(newLocation);
    }
  }

  const moveLeft = () => {
    const newLocation = { x: props.playerLocation.x - 1, y: props.playerLocation.y}
    if (isLegalMove(newLocation)) {
      props.setPlayerLocation(newLocation); 
      isBattle(newLocation);
    }
  }

  return (
    //one set of brackets to make it JS, other set to make it object.
    <>
      <div
        id="outer-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <GridContainer>
          {Grid}
          <div
            style={{
              position: "absolute",
              left: props.playerLocation.x * 20 + "px",
              bottom: props.playerLocation.y * 20 + "px",
              width: "20px",
              height: "20px",
              backgroundColor: "green"
            }}
          />
        </GridContainer>
      </div>
      <div id="movement-controls-container">
        <div
          id="movement-top-row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <MovementButton onClick={moveUp}>Move up</MovementButton>
        </div>
        <div id="movement-bottom-row">
          <MovementButton onClick={moveLeft}>Move left</MovementButton>
          <MovementButton onClick={moveDown}>Move down</MovementButton>
          <MovementButton onClick={moveRight}>Move right</MovementButton>
        </div>
      </div>
    </>
  );
}

export default Map;