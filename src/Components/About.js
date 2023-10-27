import React from "react";
import { Link } from "react-router-dom";
import thal from "../Images/thal.jpg";
import { linkedin_URL } from "./Config";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center border h-[630px]">
        <div className="w-[800px]">
        <div>
          <img className="rounded-full h-2/4 w-3/4" src={thal} />
        </div>
          
        </div>
        <div>
        <h1 className="font-bold text-4xl text-gray-600 border mr-5 w-[600px] p-5 bg-blue-100 rounded-md">
          "Food is a rich cultural journey. Savor each bite, respect every ingredient, and minimize waste."
          </h1>

          <div className="flex ml-60  items-center flex-col w-72 justify-evenly">
            <div className="flex mt-10">
              <h2 className="font-semibold">Created By :-</h2>
              <Link to={linkedin_URL} className=" ml-2 font-bold text-blue-900">
                Shantanu Murdio
              </Link>
            </div>
            <h1 className="ml-[82px] mt-2">
               :-
              <Link className=" ml-2 text-blue-900 font-bold" to="/profile">
                My profile
              </Link>
            </h1>
          </div>
        </div>
        
          
      </div>
      
    </>
  );
};

export default About;

{
  /* <Profile />
<Link to="/instamart">Go to instamart page</Link> */
}
