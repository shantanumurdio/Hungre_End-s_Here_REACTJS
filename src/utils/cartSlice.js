import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      //   state.items.push(action.payload);
      //   state.totalPrice += action.payload.price;
      const priceToAdd = action.payload.price;
      if (!isNaN(priceToAdd)) {
        state.items.push(action.payload);
        state.totalPrice += priceToAdd;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const removedId = state.items.find((item) => item.id === itemId);
      if (removedId) {
        const priceToRemove = removedId.price;
        if (!isNaN(priceToRemove)) {
          state.totalPrice -= priceToRemove;
        }
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    clearItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;