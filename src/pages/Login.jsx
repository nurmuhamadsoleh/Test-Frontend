import { useState } from "react";
import AHM from "../assets/images/logoahm.png";
import Logo from "../assets/images/Logo.png";
import { CgProfile } from "react-icons/cg";
import Vector from "../assets/images/Vector.png";
import "../index.css";

function Login() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="flex flex-col py-20 h-full bg-left ">
          <div className="flex justify-center z-10 relative py-">
            <div className="z-20 absolute mt-32">
              <img src={AHM} alt="AHM" placeholder="AHM" />
            </div>
            <img src={Logo} alt="Logo" placeholder="Logo" />
          </div>
          {/* <div className="front">
          </div> */}
          <p className="text-center text-white font-black mt-20 text-[50px]">
            Digitalization <br />
            Assembly Frame Plant 6
          </p>
        </div>
      </div>
      <div className="right flex justify-center items-center">
        <div className="bg-white w-96 max-h-lg rounded text-center py-10 px-[32px]">
          <div className="flex justify-center my-2">
            <img src={Vector} alt="profile" />
          </div>
          <h1 className="text-center font-extrabold">Login</h1>
          <p className="pt-3">Enter your email and password bellow</p>

          <form className="text-left space-y-4 my-4">
            <div className="">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="border border-gray-100 rounded-md px-2 py-2 w-full mt-2 "
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="">
              <div className="flex justify-between">
                <label htmlFor="email">Password</label>
                <label className="text-xs" htmlFor="email">
                  Forgit password ?
                </label>
              </div>
              <input
                className="border border-gray-100 rounded-md px-2 py-2 w-full mt-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <button className="bg-[#3751FF] py-2 px-5 rounded w-full text-white">
              Log in
            </button>
          </form>
          <p className="text-center">
            Don’t have an account?{" "}
            <a className="text-[#3751FF]" href="">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
