import shantanuPic from "../Images/shantanuPic.png";
import java from "../Images/java.png";
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import react from "../Images/react.png";
import redux from "../Images/redux.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import { Link } from "react-router-dom";
import { linkedin_URL } from "./Config";
import { github_URL } from "./Config";

const Profile = () => {
  return (
    <>
      <div className="  flex justify-center bg-[#dcdad7]">
        <div className="p-24 ">
          <div className="p-12 shadow-2xl  bg-white rounded-lg">
            <div className="flex justify-evenly">
            <img className=" w-36 rounded-full" src={shantanuPic} alt="PhoneOfCreater" />
            <Link to={linkedin_URL}><img className="w-16 h-16 mt-10" src={linkedin} alt="linkedIn" /></Link>
            <Link to={github_URL}><img className="w-16 h-16 mt-10" src={github} alt="linkedIn" /></Link>
            
            
            </div>
            
            <h1 className="font-bold text-4xl p-5">Shantanu Murdio</h1>

            <h1 className="font-bold text-2xl p-3 m-3 shadow-md ">Full Stack Developer</h1>

            <div className="flex">
              <img className="w-12 m-2 rounded-lg" src={java} alt="" />
              <img className="w-12 m-2 rounded-lg" src={html} alt="" />
              <img className="w-12 m-2 rounded-lg" src={css} alt="" />
              <img className="w-12 m-2 rounded-lg" src={js} alt="" />
              <img className="w-12 m-2 rounded-lg" src={react} alt="" />
              <img className="w-12 m-2 rounded-lg" src={redux} alt="" />
            </div>

            <h1 className="pt-2 mt-2 text-center p-2 bg-slate-100">GitHub Repo For "Hunger End's Here"</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
