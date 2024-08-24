export interface ShoppingCartItem {
    id: number;
    name: string;
    price: number;
  }
  
  export type ShoppingCartAction =
    | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
    | { type: 'REMOVE_ITEM'; payload: number }; 