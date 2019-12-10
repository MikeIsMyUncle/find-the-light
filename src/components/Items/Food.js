import React from "react";
import _ from 'lodash';

 const Food = props => {

  const eatFood = foodName => {
    let qty = 0;
    let healAmount = 0;
    switch (foodName) {
      case 'Healing Apple':
        healAmount = 10;
        qty = props.foods.find(food => food.name === "Healing Apple").qty;
        break;    
      default:
        break;
    }

    if (qty === 0 || props.hp === 100) {
      return
    }
    props.setHp(Math.min(props.hp + healAmount, 100));
    let newFoodList = _.cloneDeep(props.foods);
    newFoodList.find(food => food.name === 'Healing Apple').qty -= 1;
    props.setFoods(newFoodList);
  }

  const FoodList = props.foods.map(food => {
    return (
        <div onClick={() => eatFood(food.name)} key={food.name}>{food.name}: {food.qty}</div>
      )
    })

    return (
      <>
        {FoodList}
      </>
    )
}

export default Food;

