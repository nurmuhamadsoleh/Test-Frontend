import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";
import HondaSmall from "../assets/images/Honda.png";
import UserSmall from "../assets/images/UserSmall.png";
import SettingSmall from "../assets/images/Konfig.png";
import DashboardSmall from "../assets/images/Dahsboard.png";
// import VectorSmall from "../assets/images/Vector.png";
// import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex mb-10">
        <div className="bg-gray-200 w-[100px] h-screen">
          <div className="bg-[#15233F] h-[70px] flex justify-center items-center">
            <img src={HondaSmall} alt="Honda" className="mx-auto" />
          </div>
          <ul className="px-2 space-y-4 mt-4 text-center">
            <li>
              <img
                src={DashboardSmall}
                alt="DashboardSmall"
                className="mx-auto"
              />
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <img src={SettingSmall} alt="SettingSamll" className="mx-auto" />
              <Link to="">Setting</Link>
            </li>
            <li>
              <img src={UserSmall} alt="User Small" className="mx-auto" />
              <a href="">User</a>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <div className="bg-[#4D4D4D] px-4 h-[70px] text-white flex justify-between items-center">
            <h1>Main Dashboard</h1>
            <span>{moment().format("LL")}</span>
          </div>
          <div className="p-4 bg-[#282828] h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
