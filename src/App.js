import React, { useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import "./App.css";
import "./index.css";
import TotalRevenue from "./components/TotalRevenue";
import Sidebar from "./components/Sidebar";
import LineChart from "./components/LineChart";

function App() {
  const [message, setMessage] = useState(true);

  return (
    <div className="flex mt-4  mr-2 h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex flex-row space-x-4">
          <div className="w-1/4 p-2 bg-white rounded flex flex-col items-center justify-between shadow-lg">
            <div className="flex items-center justify-between w-full ">
              <span className="text-gray-500 sm: text-sm">USERS</span>
              <span className="text-green-500 font-bold sm: text-sm">^30%</span>
            </div>
            <div className="text-black text-2xl mt-2 text-left self-start">
              76
            </div>

            <div className="flex items-center justify-between w-full mt-2">
              <span className="text-black underline">See All Users</span>
              <span className="text-red-500">
                <BiSolidContact className="text-2xl" />
              </span>
            </div>
          </div>

          <div className="w-1/4 p-2 bg-white rounded flex flex-col items-center justify-between shadow-lg">
            <div className="flex items-center justify-between w-full">
              <span className="text-gray-500">ORDERS</span>
              <span className="text-green-500 font-bold">^67%</span>
            </div>
            <div className="text-black text-2xl mt-2 text-left self-start">
              31
            </div>

            <div className="flex items-center justify-between w-full mt-2">
              <span className="text-black underline">See All Orders</span>
              <span className="text-orange-500">
                <BsFillCartCheckFill className="text-2xl" />
              </span>
            </div>
          </div>

          <div className="w-1/4 p-2 bg-white rounded flex flex-col items-center justify-between shadow-lg">
            <div className="flex items-center justify-between w-full">
              <span className="text-gray-500">BALANCE</span>
              <span className="text-green-500 font-bold">^39%</span>
            </div>
            <div className="text-black text-2xl mt-2 text-left self-start">
              $ 19
            </div>

            <div className="flex items-center justify-between w-full mt-2">
              <span className="text-black underline">View Earnings</span>
              <span className="text-green-500">
                <SiCashapp className="text-2xl" />
              </span>
            </div>
          </div>

          <div className="w-1/4 p-2 bg-white rounded flex flex-col items-center justify-between shadow-lg">
            <div className="flex items-center justify-between w-full">
              <span className="text-gray-500">EARNINGS</span>
              <span className="text-green-500 font-bold">^49%</span>
            </div>
            <div className="text-black text-2xl mt-2 text-left self-start">
              $ 64
            </div>

            <div className="flex items-center justify-between w-full mt-2">
              <span className="text-black underline">See Details</span>
              <span className="text-violet-500">
                <GiWallet className="text-2xl" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-4 space-x-4 shadow">
          <div className="w-1/2 p-4 bg-white h-30 rounded shadow-lg h-full">
            {/* Total Revenue Content */}
            <TotalRevenue />
            <div className="flex items-center justify-center">
              <span className="text-black">Total Sales For Today</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-bold text-gray-500 mt-2 text-xl">
                $1,000,000
              </span>
            </div>
            {message && (
              <div className="flex items-center justify-center ">
                <span className="font-semibold text-gray-500 mt-2 text-sm">
                  Previous transaction processing. Last payment may not be
                  inclined.
                </span>
              </div>
            )}
            <div className="flex items-center justify-between ">
              <span className="font-bold text-gray-500 mt-2 text-xl">
                Target
              </span>
              <span className="font-bold text-gray-500 mt-2 text-xl">
                Last Week
              </span>
              <span className="font-bold text-gray-500 mt-2 text-xl">
                Last Month
              </span>
            </div>
            <div className="flex items-center justify-between ">
              <span className="font-semibold text-red-500 mt-2 text-xl">
                $10.4k
              </span>
              <span className="font-semibold text-red-500 mt-2 text-xl">
                $12.4k
              </span>
              <span className="font-semibold text-green-500 mt-2 text-xl">
                $22.2k
              </span>
            </div>
          </div>

          <div className="w-3/4 p-4 bg-white h-30 rounded shadow-lg">
            {/* Last 6 Months Revenue Content */}
            Last 6 Months Revenue
            <div className="w-700px">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
