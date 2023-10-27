
import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN_URL } from "./Config";
import { removeItem } from "../utils/cartSlice";

const FoodItems = ({ name, description, imageId, price, id }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  return (
    <>
      <div className="flex  justify-end pr-28 ml-10">
        <div className=" border justify-between  w-96 p-3 my-3 bg-gray-100 rounded-md">
          <div className="flex justify-between">
            <img className="w-20 h-14" src={ITEM_IMG_CDN_URL + imageId}></img>
            <div className="flex flex-col pl-10">
              <h2 className="font-bold">{name}</h2>
              <h3 className="w-90 font-light text-xs">{description}</h3>
            </div>
          </div>
          <div className="flex items-center justify-between   mt-3">
            <button
              className="border bg-red-500 p-1 text-white"
              onClick={() => {
                handleRemoveItem(id);
              }}
            >
              Remove
            </button>
            <div className="flex justify-between w-16 border bg-white ml-3">
              <button className=" w-7 text-lg font-bold text-green-600">
                -
              </button>
              <button className=" w-7 text-lg font-bold text-green-600">
                +
              </button>
            </div>
            <h4 className="border px-2 bg-green-800 text-white py-1">
              Rs.{price / 100}/-
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItems;