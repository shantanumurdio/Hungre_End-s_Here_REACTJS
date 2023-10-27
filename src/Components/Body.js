import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { Swiggy_API } from "./Config";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(Swiggy_API);
      const json = await response.json();
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            // console.log(checkData);
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <div className="shimmer-cards">
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="p-3 py-8 flex justify-center">
        <input
          
          type="text"
          className="hover search-input border px-4 py-2 w-96 rounded-md text-lg placeholder:text-gray-700 "
          placeholder="Search resturants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        ></input>

        <button
          className="border px-2 ml-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => {
          console.log(restaurant?.info);
          return (
            <Link to={"/restaraunt/" + restaurant?.info?.id}>
              <ResturantCard key={restaurant?.info?.id} {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;