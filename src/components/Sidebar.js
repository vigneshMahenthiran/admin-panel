import React from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { BiSolidTruck } from "react-icons/bi";
import { PiGraphBold } from "react-icons/pi";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-white h-full w-60 p-2 flex flex-col rounded shadow-lg">
      <span className="text-black font-bold mb-4">MAIN MENU</span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <BiSolidDashboard className="text-blue-500 mr-2 text-xl" />
        DashBoard
      </span>

      <span className="text-black font-bold mb-4">LISTS MENU</span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <FaUsers className="text-blue-500 mr-2 text-xl" />
        User
      </span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <BsFillBoxSeamFill className="text-blue-500 mr-2 text-l" />
        Product
      </span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <BiSolidNotepad className="text-blue-500 mr-2 text-xl" />
        Order
      </span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <BiSolidTruck className="text-blue-500 mr-2 text-xl" />
        Delivery
      </span>

      <span className="text-black font-bold mb-4">OTHER MENU</span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <PiGraphBold className="text-blue-500 mr-2 text-xl" />
        Status
      </span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <IoNotificationsSharp className="text-blue-500 mr-2 text-xl" />
        Notification
      </span>

      <span className="text-black font-bold mb-4">SERVICES</span>

      <span className="text-black  mb-4 flex items-center ml-1">
        <MdHealthAndSafety className="text-blue-500 mr-2 text-xl" />
        system Health
      </span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <FaHeadSideVirus className="text-blue-500 mr-2 text-l" />
        Logs
      </span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <IoSettings className="text-blue-500 mr-2 text-xl" />
        Settings
      </span>

      <span className="text-black font-bold mb-4">ACCOUNT</span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <MdAccountBox className="text-blue-500 mr-2 text-xl" />
        Profile
      </span>

      <span className="text-black  mb-4 flex items-center ml-2">
        <IoLogOut className="text-blue-500 mr-2 text-xl" />
        Logout
      </span>
    </div>
  );
};

export default Sidebar;
