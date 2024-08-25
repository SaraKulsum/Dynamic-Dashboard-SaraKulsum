import React from "react";
import { Drawer } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import useCategory1Store from "../widgetStore1";
import useCategory2Store from "../widgetStore2";
import useCategory3Store from "../widgetStore3";

import { Add } from "@mui/icons-material";

const AddWidgetDrawer = () => {
  const [value, setValue] = React.useState(0);
  let { category1WidgetsData, updateCate1Widget, toggleCate1Checked } =
    useCategory1Store();
  let { category2WidgetsData, toggleCate2Checked, updateCate2Widget } =
    useCategory2Store();
  let { category3WidgetsData, toggleCate3Checked, updateCate3Widget } =
    useCategory3Store();

  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheck = (name, category) => {
    if (category === "category1") {
      toggleCate1Checked(name);
    } else if (category === "category2") {
      toggleCate2Checked(name);
    } else {
      toggleCate3Checked(name);
    }
  };

  const handleConfirm = () => {
    updateCate1Widget();
    updateCate2Widget();
    updateCate3Widget();

    console.log(category1WidgetsData);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border hover:scale-[0.97] transition-all bg-white border-gray-300 text-gray-500 font-semibold p-1 rounded-md"
      >
        Add Widget <Add fontSize="small" />
      </button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <section className="drawer_header bg-blue-800 text-white text-sm p-2">
          Add Widgets
        </section>
        <div className="drawer-content flex justify-between flex-col h-full">
          <div className="drawer-body-content px-2">
            <section className="drawer_title">
              <h4 className="capitalize my-2">
                personlise your dashboard by adding the following widgets
              </h4>
            </section>
            <section className="tabs">
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{ textTransform: "lowercase" }}
                indicatorColor="primary"
              >
                <Tab
                  id="category1Tab"
                  label="CSPM"
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                />
                <Tab
                  id="category2Tab"
                  label="CWPP"
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                />
                <Tab
                  id="category3Tab"
                  label="Growth"
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                />
              </Tabs>
            </section>

            <section className="tabs-content m-4">
              <div
                id="category1TabContent"
                className={value === 0 ? `block` : `hidden`}
              >
                {category1WidgetsData.map((item, index) => (
                  <div className="flex gap-2 border my-2 px-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {
                        handleCheck(item.widgetName, "category1");
                      }}
                    />
                    <p>{item.widgetName}</p>
                  </div>
                ))}
              </div>
              <div
                id="category2TabContent"
                className={value === 1 ? `block` : `hidden`}
              >
                {category2WidgetsData.map((item) => (
                  <>
                    <div className="flex gap-2 border my-2 px-2">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => {
                          handleCheck(item.widgetName, "category2");
                        }}
                      />
                      <p>{item.widgetName}</p>
                    </div>
                  </>
                ))}
              </div>
              <div
                id="category2TabContent"
                className={value === 2 ? `block` : `hidden`}
              >
                {category3WidgetsData.map((item) => (
                  <>
                    <div className="flex gap-2 border my-2 px-2">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => {
                          handleCheck(item.widgetName, "category3");
                        }}
                      />
                      <p>{item.widgetName}</p>
                    </div>
                  </>
                ))}
              </div>
            </section>
          </div>
          <div className="drawer-footer-content flex gap-3 justify-end m-2">
            <button
              onClick={() => setOpen(false)}
              className="border border-blue-800 px-2 py-1 text-sm rounded-md text-blue-800"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setOpen(false), handleConfirm();
              }}
              className="border border-blue-800 px-2 py-1 text-sm rounded-md bg-blue-800 text-white"
            >
              Confirm
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AddWidgetDrawer;
