import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // Payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // Payload = PizzaId
      state.cart = state.cart.filter((item) => item.pizzaId != action.payload);
    },
    increaseItemQuantity(state, action) {
      // Payload = PizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity += 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // Payload = PizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity -= 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
