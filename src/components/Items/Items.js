import React from 'react';

const Items = props => {
    
  const ItemList = props.items.map(item => {
    return (
        <div key={item.name}>{item.name}: {item.qty}</div>
      )
    })

    return (
      <>
        {ItemList}
      </>
    )
}

export default Items;