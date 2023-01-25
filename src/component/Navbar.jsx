import React from "react";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="pb-10 border-b-2">
      <ul className="flex justify-between bg-[#eb1a1a] font-extrabold items-center">
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            Main Dasboard
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/date" ? "font-bold" : ""}`}>
            {moment().format("YYYY-MM-DD")};
          </Link>
        </li>
      </ul>
    </div>
  );
}
