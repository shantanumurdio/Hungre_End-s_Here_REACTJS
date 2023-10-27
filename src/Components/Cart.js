import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearItem, removeItem } from "../utils/cartSlice";
import FoodCourt from "../Images/foodCourt.jpg"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);

  const dispatch = useDispatch();

  const ClearTheCart = () => {
    dispatch(clearItem());
  };

  const handleRemoveItem = (itemId) => {
    console.log("Removing item with ID: ", itemId);
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    console.log("Updated cart items: ", updatedCartItems);
    dispatch(removeItem(itemId));
  };

  return (
    <>
      <div className="border w-full flex items-center justify-end pr-28 p-2 bg-gray-200">
        <button
          className=" border p-1 font-semibold bg-red-400 rounded-md px-2"
          onClick={() => {
            ClearTheCart();
          }}
        >
          Clear Cart
        </button>
        <div className="border ml-20 p-2  bg-green-400">
          <h2 className="font-bold">Payment</h2>
          <div className="flex mt-2">
            <h2 className="font-semibold text-gray-700">
              To pay : ₹{totalPrice.toFixed(2) / 100}/-
            </h2>
            <button className="rounded-md ml-4 px-3 bg-blue-600 text-white py-0.5 font-bold">
              Pay
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="border w-full bg-gray-200 ">
          <img
            className="w-full h-[700px] p-16  border rounded-md mr-10"
            src={FoodCourt}
          ></img>
          <h1 className="border h-28 p-3 px-20">
            <input
              className="flex border w-full h-full pl-5 font-semibold text-lg"
              placeholder=" 🏠  Delivery Address"
            />
          </h1>
          <h1 className="border h-28 p-3 px-20">
            <input
              className="flex border w-full h-full pl-5 font-semibold text-lg"
              placeholder=" 💵 Payment"
            />
          </h1>
        </div>
        <div className="">
          {cartItems.map((item) => (
            <div className="border flex items-center">
              <FoodItems key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;