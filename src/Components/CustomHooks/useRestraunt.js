import { useState, useEffect } from "react";
import { Swiggy_menu_API } from "../Config";
import { MENU_ITEM_TYPE_KEY } from "../Config";
import { RESTAURANT_TYPE_KEY } from "../Config";

const useRestraunt = (restrauntId) => {
  const [restraunt, setRestraunt] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    try {
      const data = await fetch(Swiggy_menu_API + restrauntId);
      const json = await data.json();

      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      console.log(restaurantData);
      setRestraunt(restaurantData);

      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestraunt(null);
      console.log(error);
    }
  }
  return [restraunt, menuItems];
};

export default useRestraunt;