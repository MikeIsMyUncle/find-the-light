import React, { useState} from "react";

const Food = props => {
    // const [foodAmount, setFoodAmount] = useState(0);
    // if (props.playerLocation.x === 6 && props.playerLocation.y === 10) {
    //     setFoodAmount(1);
    // } 
    if (props.foodAmount == 1) {
        alert("Eat some cheese!");
    }
  return(<div></div>)
};
export default Food;