import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";
import HondaSmall from "../assets/images/Honda.png";
import UserSmall from "../assets/images/UserSmall.png";
import SettingSmall from "../assets/images/Konfig.png";
import DashboardSmall from "../assets/images/Dahsboard.png";
import ControlPannel from "../assets/images/control.png";
// import VectorSmall from "../assets/images/Vector.png";
// import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex mb-10 h-full">
        <div
          className={`bg-gray-200 h-auto ${
            open
              ? "w-[180px]"
              : "-translate-x-full w-[0px] md:w-[100px] md:block  sm:translate-x-1"
          }`}
        >
          <div
            className={`bg-[#15233F] h-[70px] flex justify-center items-center relative duration-500`}
          >
            {/* <img
              src={ControlPannel}
              alt="Control"
              className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
                !open && "rotate-180 duration-500"
              }`}
              onClick={() => setOpen(!open)}
            /> */}
            <div className="flex gap-x-4 items-center">
              <img
                src={HondaSmall}
                alt="Logo"
                className="cursor-pointer duration-500"
              />
            </div>
            {/* <img src={HondaSmall} alt="Honda" className="mx-auto" /> */}
          </div>
          <ul
            className={`px-2 space-y-4 mt-4 text-center ${
              open ? "block" : "hidden md:block"
            }`}
          >
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

        <div className="w-full h-full">
          <div className="bg-[#4D4D4D] px-4 h-[70px] text-white flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={ControlPannel}
                alt="Control"
                onClick={() => setOpen(!open)}
              />
              <h1 className="ml-5">Main Dashboard</h1>
            </div>
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
