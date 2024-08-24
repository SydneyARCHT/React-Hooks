import React, { useReducer, useState } from 'react';
import { shoppingCartReducer } from '../reducers/shoppingCartReducer';
import { ShoppingCartItem } from '../context/types';

const ShoppingCart: React.FC = () => {
  const [cart, dispatch] = useReducer(shoppingCartReducer, []);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState<number | ''>('');


  const addItem = () => {
    if (itemName && itemPrice && typeof itemPrice === 'number') {
      const newItem: ShoppingCartItem = {
        id: Date.now(), 
        name: itemName,
        price: itemPrice,
      };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setItemName('');
      setItemPrice('');
    }
  };


  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };


  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(Number(e.target.value))}
          placeholder="Item Price"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;