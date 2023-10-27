import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "./Config";
import { Shimmer } from "./Shimmer";
import useRestraunt from "./CustomHooks/useRestraunt";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ShimmerRestMenu } from "./ShimmerRestMenu";
const RestrauntMenu = () => {
  const { restrauntId } = useParams();
  console.log(restrauntId);
  const [restraunt, menuItems] = useRestraunt(restrauntId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restraunt ? (
    <ShimmerRestMenu />
  ) : (
    <div className="menu flex flex-col items-center mt-10">
      <div className="restaurant-summary flex items-center  p-10 pl-80 bg-gray-900  w-full ">
        <img
          className="rounded-md w-72"
          src={IMG_CDN_URL + restraunt?.cloudinaryImageId}
          alt={restraunt?.name}
        />
        <div className="">
          <h2 className="text-3xl font-bold pl-10 text-white">
            {restraunt?.name}
          </h2>
          <p className="font-semibold mt-2 pl-10 text-gray-300">
            {restraunt?.cuisines?.join(", ")}
          </p>

          <div className="font-bold text-white flex pl-10 mt-2">
            <div className=" px-1 py-1 pr-2 bg-green-900  rounded-md">
              ⭐ {restraunt?.avgRating}{" "}
            </div>
            <div className="px-5">|</div>
            <div> ⏱️{restraunt?.sla?.slaString} </div>
            <div className="px-5">|</div>
            <div className="">{restraunt?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="menu-items-container">
          <div className=" pl-6 flex text-lg mt-6">
            <h3 className="font-bold">Recommended </h3>
            <p className="font-bold pl-3">({menuItems.length})</p>
          </div>
          <div>
            {menuItems.map((item) => (
              <div
                className="border flex justify-between w-[900px] py-5 my-5"
                key={item?.id}
              >
                <div className=" w-[450px] pl-5 ">
                  <h3 className="text-xl py-2 font-semibold">{item?.name}</h3>
                  <p className="font-medium py-1">Rs.{item?.price / 100}/-</p>
                  <p className="font-light">{item?.description}</p>
                </div>
                <div className="flex flex-col items-center mr-2">
                  {
                    <img
                      className="w-32 h-28 rounded-md"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  }

                  <button
                    className="mt-3 w-20 py-1 text-green-500 font-semibold shadow-md border rounded-md hover:bg-green-600 hover:text-white"
                    onClick={() => {
                      addFoodItem(item);
                    }}
                  >
                    {isNaN(item.price) ? "Out of Stock" : "ADD +"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;