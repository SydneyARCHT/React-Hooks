import { ShoppingCartAction, ShoppingCartItem } from "../context/types";



export const shoppingCartReducer = (
    state: ShoppingCartItem[],
    action: ShoppingCartAction
    
  ): ShoppingCartItem[] => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload];
      case 'REMOVE_ITEM':
        return state.filter(item => item.id !== action.payload);
      default:
        return state;
    }
  };