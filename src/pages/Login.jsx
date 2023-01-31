import { useState } from "react";
import AHM from "../assets/images/logoahm.png";
import Logo from "../assets/images/Logo.png";
import { CgProfile } from "react-icons/cg";
import Vector from "../assets/images/Vector.png";
import "../index.css";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Login = () => {
  const nav = useNavigate();
  const iniState = {
    email: "",
    password: "",
  };
  const [initialValues, setInitialValue] = useState(iniState);
  const validationSchema = yup
    .object({
      email: yup
        .string()
        .required("Field email wajib di isi")
        .email()
        .matches(
          /^[A-Z0-9._%+-]+@(?=gmail.com)[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "Harus menggunakan gmail.com"
        ),
      password: yup
        .string()
        .required("Password wajib di isi")
        .min(6, "Password yang di isi minimal 6 charcter"),
    })
    .required();
  const {
    register,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const handleSend = (data) => {
    // console.log("data");
    console.log("data form", data);
    nav("/home");
  };
  return (
    <div className="navbar">
      <div className="left lg:block md:block hidden">
        <div className="flex flex-col py-20 h-full bg-left">
          <div className="flex justify-center z-10">
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
      <div className="right flex justify-center items-center mx-auto md:w-full w-full">
        <div className="bg-white max-h-lg rounded text-center py-10 px-10">
          <div className="flex justify-center my-2">
            <img src={Vector} alt="profile" />
          </div>
          <h1 className="text-center font-extrabold">Login</h1>
          <p className="pt-3">Enter your email and password bellow</p>

          <form
            className="text-left space-y-4 my-4"
            onSubmit={handleSubmit(handleSend)}
          >
            <div className="">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="border border-gray-100 rounded-md px-2 py-2 w-full mt-2 "
                type="email"
                placeholder="Email Address"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-700 font-bold">{errors.email.message}</p>
              )}
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
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-700 font-bold">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              // type="submit"
              className="bg-[#3751FF] py-2 px-5 rounded w-full text-white"
            >
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
};

export default Login;
