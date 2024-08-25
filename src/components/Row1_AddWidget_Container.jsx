import React from "react";
import { Add, ArrowDropDown, Sync } from "@mui/icons-material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import AddWidgetDrawer from "./AddWidgetDrawer";
const Row1_AddWidget_Container = () => {
  return (
    <div className="row1 flex sm:flex-row flex-col gap-3 sm:justify-between my-6">
      <h1 className="font-bold font-sans text-gray-700">CNAPP Dashboard</h1>
      <div className="flex gap-3 text-sm">
        <AddWidgetDrawer />

        <button className="border hidden sm:block hover:scale-[0.97] transition-all bg-white border-gray-300 text-gray-500  p-1 rounded-md">
          <Sync fontSize="small" />
        </button>
        <button className="border hover:scale-[0.97] transition-all bg-white border-gray-300 text-gray-500 p-1 rounded-md">
          <MoreVertOutlinedIcon fontSize="small" />
        </button>
        <button className="border hidden  hover:scale-[0.97] transition-all bg-white border-gray-300 text-gray-500 font-semibold sm:flex gap-[3px] items-center p-1 rounded-md">
          <ScheduleOutlinedIcon fontSize="small" /> 2 Days ago
          <ArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default Row1_AddWidget_Container;
