import React, { useState } from "react";
import "../index.css";
import { FiSettings } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
// import {} "react-icons"
import Calendar from "react-calendar";
import { locale } from "moment";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const [value, onChange] = useState(new Date());
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],

    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  };
  return (
    <>
      <div className="w-full flex space-x-2">
        <div className="p-2 bg-[#474747] w-3/12 flex">
          <div className="bg-[#393232] w-7/12">
            <h6 className="text-center font-bold text-white mb-3">Graph OEE</h6>
            <Pie data={data} />
          </div>
          <div className="bg-[#474747] w-5/12">
            <div className="bg-[#474747] gradienta">
              <h6 className="text-left mb-[20px] font-bold text-white p-2">
                MTTR
              </h6>
              <h6 className="text-right font-bold text-white p-2">79</h6>
            </div>
            <div className="bg-[#474747] gradientb">
              <h6 className="text-left mb-[20px] font-bold text-white p-2">
                MTBF
              </h6>
              <h6 className="text-right font-bold text-white p-2">169</h6>
            </div>
          </div>
        </div>
        <div className="p-2 bg-[#474747] w-5/12">
          <h5>Area Pooling 1 Status</h5>
        </div>
        <div className="p-2 bg-[#474747] w-4/12">
          <Calendar
            className="bg-[#181818] p-10 text-white font-semibold"
            onChange={onChange}
            value={value}
            calendarType={"US"}
            formatMonth={(locale, date) => formatDate(date, "MMM")}
            defaultActiveStartDate={new Date()}
          />
        </div>
      </div>
      <div className="w-full flex space-x-2 mt-10">
        <div className="p-2 bg-[#474747] w-5/12 flex">
          <div className="bg-[#393232] w-7/12">
            <h6 className="text-center font-bold text-white mb-3">Graph OEE</h6>
            <Pie data={data} />
          </div>
          <div className="bg-[#474747] w-5/12">
            <div className="bg-[#474747] gradienta">
              <h6 className="text-left mb-[20px] font-bold text-white p-2">
                MTTR
              </h6>
              <h6 className="text-right font-bold text-white p-2">79</h6>
            </div>
            <div className="bg-[#474747] gradientb">
              <h6 className="text-left mb-[20px] font-bold text-white p-2">
                MTBF
              </h6>
              <h6 className="text-right font-bold text-white p-2">169</h6>
            </div>
          </div>
        </div>
        <div className="p-2 bg-[#474747] w-4/12">
          <h5>Area Pooling 1 Status</h5>
        </div>
        <div className="p-2 bg-[#474747] w-3/12">
          <h5>Area Pooling 1 Status</h5>
        </div>
      </div>
      <div className="w-full flex space-x-2 mt-10">
        <div className="p-2 bg-[#474747] w-5/12 flex justify-between">
          <h6>Production Counter</h6>

          <div className="justify-between w-[150px]">
            <label htmlFor="Type" className="mr-5">
              Type :
            </label>
            <select name="type" id="type" className="w-[80px]">
              <option value="US">US</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
        <div className="p-2 bg-[#474747] w-4/12">
          <h5>Area Pooling 1 Status</h5>
        </div>
        <div className="p-2 bg-[#474747] w-3/12">
          <Calendar
            className="bg-[#181818] p-10 text-white font-semibold"
            onChange={onChange}
            value={value}
            calendarType={"US"}
            formatMonth={(locale, date) => formatDate(date, "MMM")}
            defaultActiveStartDate={new Date()}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
