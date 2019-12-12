import React, {useEffect} from 'react'
import styled from 'styled-components';
import positions from '../../data/maps.js';


const Map = props => {

  const mapWidth = (positions.filter(position => position.y === 0).length + 1) * 20;
  const mapHeight = (positions.filter(position => position.x === 0).length + 1) * 20;


  useEffect(() => {
    window.addEventListener("keydown", pressedKey);

    return () => {
      window.removeEventListener("keydown", pressedKey);
    };
  }, [])

  const pressedKey = event => {
    switch (event.keyCode) {
      case 37:
        moveLeft();
        break;
      case 38:
        moveUp();
        break;
      case 39:
        moveRight();
        break;
      case 40:
        moveDown();
        break;
      default:
        break;
    }
  };

  const GridContainer = styled.div`
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
          backgroundColor: position.type === 1 ? 'rgb(103, 103, 103)' : 'rgb(205, 205, 205)'
          
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
        position.x === pos.x && position.y === pos.y
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
      props.startBattle(getPosition(pos).enemies);
    }
  };

  const mergeItems = (items, newItems) => {
    const newItemList = [...props.items];
    newItems.forEach(newItem => {
      if (newItemList.find(item => item.name === newItem.name)) {
        newItemList.find(item => item.name === newItem.name).qty +=
          newItem.qty;
      } else {
        newItemList.push({ name: newItem.name, qty: newItem.qty });
      }
    })
    return newItemList;
  };

  const getItems = pos => {
    if(getPosition(pos).items) {
      props.setItems(mergeItems(props.items,getPosition(pos).items));
      delete getPosition(pos).items;
    }
  }


  const getFood = pos => {
    if(getPosition(pos).food) {
      props.setFoods(mergeItems(props.foods,getPosition(pos).food));
      delete getPosition(pos).food;
    }
  }

  const move = (x, y) => {
    const newLocation = { x: props.playerLocation.x + x, y: props.playerLocation.y + y }
    if (isLegalMove(newLocation)) {
      props.setPlayerLocation(newLocation);
      getItems(newLocation);
      getFood(newLocation);
      isBattle(newLocation);
    }
  }

  const moveUp = () => {
    move(0, 1);
  }

  const moveDown = () => {
    move(0, -1);
  }

  const moveRight = () => {
    move(1, 0);
  }

  const moveLeft = () => {
    move(-1, 0);
  }

  return (
    //one set of brackets to make it JS, other set to make it object.
    <>
      <div
        id="outer-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <GridContainer style={{
          width: mapWidth + 'px',
          height: mapHeight + 'px'}}>
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