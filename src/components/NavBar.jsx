import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import useCategory1Store from "../widgetStore1";
import useCategory2Store from "../widgetStore2";
import useCategory3Store from "../widgetStore3";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = useState(false);
  const { category1WidgetsData } = useCategory1Store();
  const { category2WidgetsData } = useCategory2Store();
  const { category3WidgetsData } = useCategory3Store();
  let [inputValue, setInputValue] = useState("");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  let dropDownLists = [
    category1WidgetsData.map((item) => item.widgetName),
    category2WidgetsData.map((item) => item.widgetName),
    category3WidgetsData.map((item) => item.widgetName),
  ];

  let dropDownListData = dropDownLists.flat();
  let filteredDropDownListData = dropDownListData.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <nav className="flex justify-between bg-white py-2 px-6 items-center">
      <div className="temprary_bredCrumb font-semibold">
        <span className="text-gray-400">Home / </span>
        <a href="">
          <span className="text-blue-700">Dashboard</span>
        </a>
      </div>

      <form className="hidden sm:block">
        <div className="border border-[#dcf1fa]   bg-[var(--primary-color)] px-2 rounded-md relative">
          <Search color="action" fontSize="small" />
          <input
            type="text"
            className="border-[#dcf1fa] outline-none  bg-[var(--primary-color)] rounded-sm p-1 "
            placeholder="search anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setHidden(!hidden)}
            onBlur={() => setHidden(!hidden)}
          />
        </div>
        <ul
          className={
            hidden ? `bg-white fixed w-[220px] p-3 z-20 rounded-md` : `hidden`
          }
        >
          {filteredDropDownListData.map((item, index) => (
            <li
              key={index}
              onMouseDown={() => {
                setInputValue(item);
              }}
              className="w-full px-2 py-1 rounded-md hover:bg-slate-300 hover:cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </form>

      <div className="user-account-temp hidden sm:block bg-[var(--primary-color)] rounded-full">
        <AccountCircleOutlinedIcon color="disabled" fontSize="large" />
      </div>
      <button
        onClick={toggleDrawer(true)}
        className="text-gray-500 block sm:hidden"
      >
        <MenuIcon />
      </button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="DrawerMenuSmScreens px-2 flex flex-col items-end gap-10 h-full">
          <button className="m-2" onClick={toggleDrawer(false)}>
            <CloseIcon />
          </button>
          <form>
            <div className="border border-[#dcf1fa]   bg-[var(--primary-color)] px-2 rounded-md">
              <Search color="action" fontSize="small" />
              <input
                type="text"
                className="border-[#dcf1fa] outline-none  bg-[var(--primary-color)] rounded-sm p-1 "
                placeholder="search anything..."
              />
            </div>
          </form>
        </div>
      </Drawer>
    </nav>
  );
};

export default NavBar;
