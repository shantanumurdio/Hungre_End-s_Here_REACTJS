import { IMG_CDN_URL } from "./Config";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  areaName,
  avgRating,
  sla,
  costForTwo,
}) => {
  return (
    <div className="border w-72 m-10 min-h-[330px] p-3 shadow-xl rounded-md transition-transform hover:scale-105">
      <img
        className="w-72 shadow-md rounded-md"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="text-2xl font-medium ">{name}</h2>
      <h3 className="font-light text-sm">{cuisines.join(", ")}</h3>
      <h5 className="font-light text-sm">{areaName}</h5>
      <div className=" flex justify-between items-center pr-3">
        <h5 className="card-tag flex justify-center border text-sm w-12 mt-2 text-white font-semibold bg-red-900 px-7 py-1 rounded-md">
          {" "}
          ⭐{avgRating}
        </h5>
        <h3 className="font-semibold text-sm mt-2">
          • {costForTwo ?? "₹200 for two"}
        </h3>
        <h3 className="font-semibold text-sm  mt-2">
          • {sla?.lastMileTravelString ?? "2.0 km"}
        </h3>
      </div>
    </div>
  );
};

export default ResturantCard;