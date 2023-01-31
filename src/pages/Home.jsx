import React, { useState } from "react";
import "../index.css";
import { FiSettings } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
// import {} "react-icons"
import LineChart from "../component/LIneChart";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";
import { locale } from "moment";
import { faker } from "@faker-js/faker";
import Horizontal from "../component/HorizontalBar";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import HorizontalChart from "../component/HorizontalChart";
// import BarChart from "../component/BarChart";
// import faker from "faker";
// import { Filler } from "chart.js/dist";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);
import StackedBar from "../component/StackedBar";
import PieChart from "../component/PieChart";
import MultitypeChart from "../component/MultitypeChart";
const Home = () => {
  // const [value, onChange] = useState(new Date());
  let [date, setDate] = useState(new Date());
  return (
    <div className="w-full h-auto flex flex-wrap">
      {/* Line 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-full lg:flex gap-2 text-white h-full">
        <div className="p-2 bg-[#474747] w-full lg:w-5/12 flex">
          <div className="bg-[#393232] w-8/12">
            <PieChart />
          </div>
          <div className="bg-[#474747] w-4/12">
            <div className="bg-[#474747] gradienta">
              <h2 className="text-left mb-[50px] font-bold p-2 text-lg">
                MTTR
              </h2>
              <h2 className="text-right font-bold p-2 lg:text-7xl text-3xl">
                79
              </h2>
            </div>
            <div className="bg-[#474747] gradientb">
              <h2 className="text-left mb-[50px] font-bold p-2 text-lg">
                MTBF
              </h2>
              <h2 className="text-right font-bold p-2 lg:text-7xl text-3xl">
                169
              </h2>
            </div>
          </div>
        </div>
        <div className="p-1 bg-[#474747] w-full lg:w-4/12 ">
          <h3 className="font-bold text-left mb-10">Area Pooling 1 Status</h3>
          <div className="flex justify-center">
            <StackedBar />
          </div>
        </div>
        <div className="p-2 bg-[#474747] w-full lg:w-3/12">
          <div className="calendar-container">
            <Calendar
              className="bg-[#181818] p-3 text-white font-semibold"
              onChange={setDate}
              value={date}
              selectRange={false}
              defaultView="month"
              // nextLabel="month>>"
              // nextAriaLabel="Go to next month"
              // next2Label="year>>"
              // next2AriaLabel="Go to next year"
              // prevLabel="<<month"
              // prevAriaLabel="Go to prev month"
              // prev2Label="<<year"
              // prev2AriaLabel="Go to prev year"
              // nextLabel=">"
              // nextAriaLabel="Go to next month"
              // next2Label=">>"
              // next2AriaLabel="Go to next year"
              // prevLabel="<"
              // prevAriaLabel="Go to prev month"
              // prev2Label="<<"
              // prev2AriaLabel="Go to prev year"
              // maxDate={new Date()}
              // minDate={new Date(2015, 6, 1)} // will not allow date before 1st July 2015
              // maxDetail="year"
              // minDetail="year"
            />
          </div>
          {date.length > 0 ? (
            <p className="text-center">
              <span className="bold">Start:</span> {date[0].toDateString()}
              &nbsp;|&nbsp;
              <span className="bold">End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p className="text-center">
              <span className="bold">Default selected date:</span>{" "}
              {date.toDateString()}
            </p>
          )}
        </div>
      </div>
      {/* Line 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-full lg:flex mt-10 gap-2 text-white h-full">
        <div className="p-2 bg-[#474747] w-full lg:w-8/12">
          <MultitypeChart />
        </div>
        <div className="p-1 bg-[#474747] w-full lg:w-4/12">
          <h5 className="font-bold text-left mb-5">Area Pooling 1 Status</h5>
          <LineChart />
        </div>
      </div>
      {/* LIne 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-full lg:flex gap-2 mt-10 text-white h-full">
        <div className="p-2 bg-[#474747] w-full lg:w-5/12">
          <div className="flex justify-between pb-5 font-bold">
            <h6>Production Counter</h6>
            <div className="justify-between w-[210px]">
              <label htmlFor="Type" className="p-2">
                Type :
              </label>
              <select
                name="type"
                id="type"
                className="w-[130px] h-9 p-1 text-black rounded-xl"
              >
                <option value="US">US</option>
                <option value="EN">EN</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="p-2">Area Pooling 1</span>
            <span className="p-2">0/200</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
          <div className="flex justify-between">
            <span className="p-2">Area Pooling 2</span>
            <span className="p-2">0/200</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
          <div className="flex justify-between">
            <span className="p-2">Area Pooling 3</span>
            <span className="p-2">0/200</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
          <div className="flex justify-between">
            <span className="p-2">Area Pooling 4</span>
            <span className="p-2">0/200</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
        </div>
        <div className="p-2 bg-[#474747] w-full lg:w-4/12">
          <div className="my-7 p-3 flex justify-center">
            <HorizontalChart />
          </div>
        </div>
        <div className="p-2 bg-[#474747] w-full lg:w-3/12">
          <div className="my-7 p-3 flex justify-center">
            <Horizontal />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
