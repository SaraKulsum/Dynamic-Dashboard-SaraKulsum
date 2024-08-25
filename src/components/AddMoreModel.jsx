import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useCategory3Store from "../widgetStore3";
import useCategory2Store from "../widgetStore2";
import useCategory1Store from "../widgetStore1";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
//Add More Widgets in Category2
const AddMoreModel = ({ AddInCategory }) => {
  const { category3WidgetsData, addCate3Widget, resetState3 } =
    useCategory3Store();

  const { category2WidgetsData, addCate2Widget, resetState2 } =
    useCategory2Store();

  const { category1WidgetsData, addCate1Widget, resetState1 } =
    useCategory1Store();

  const [open, setOpen] = useState(false);
  let [widgetName, setWidgetName] = useState("");
  let [nameValue1, setNameValue1] = useState({ name: "", value: null });
  let [nameValue2, setNameValue2] = useState({ name: "", value: null });
  let [nameValue3, setNameValue3] = useState({ name: "", value: null });
  let [nameValue4, setNameValue4] = useState({ name: "", value: null });

  useEffect(() => {
    resetState3();
    resetState1();
    resetState2();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let category = AddInCategory;

  const submit = (event) => {
    event.preventDefault();

    if (category == "category3") {
      let newId = category3WidgetsData.length;
      let data = [nameValue1, nameValue2, nameValue3, nameValue4];
      addCate3Widget({
        widgetName: widgetName,
        id: newId,
        checked: true,
        data: data,
      });
    } else if (category == "category2") {
      let newId = category2WidgetsData.length;
      let data = [nameValue1, nameValue2, nameValue3, nameValue4];
      addCate2Widget({
        widgetName: widgetName,
        id: newId,
        checked: true,
        data: data,
      });
    } else {
      let newId = category1WidgetsData.length;
      let data = [nameValue1, nameValue2, nameValue3, nameValue4];
      addCate1Widget({
        widgetName: widgetName,
        id: newId,
        checked: true,
        data: data,
      });
    }

    handleClose();

    //reset form after submit
    setWidgetName("");
    setNameValue1({ name: "", value: null });
    setNameValue2({ name: "", value: null });
    setNameValue3({ name: "", value: null });
    setNameValue4({ name: "", value: null });
  };

  const handleChange = (e, setFuction, objKey) => {
    objKey === "value"
      ? setFuction((prevData) => ({
          ...prevData,
          [objKey]: Number(e.target.value),
        }))
      : setFuction((prevData) => ({ ...prevData, [objKey]: e.target.value }));
  };

  return (
    <div>
      <button onClick={handleOpen} className="border rounded-md px-2 py-1">
        ADD MORE
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            id="newWidgetForm"
            onSubmit={submit}
            className="flex flex-col gap-2"
          >
            <label
              htmlFor="widgetName"
              className=" text-gray-700 font-semibold"
            >
              Widget Name
            </label>
            <input
              required
              type="text"
              id="widgetName"
              placeholder="Widget Name"
              value={widgetName}
              onChange={(e) => {
                setWidgetName(e.target.value);
              }}
              className="bg-[var(--primary-color)] w-full focus:outline-[#def5ff] px-2"
            />

            <p className=" text-gray-700 font-semibold">Enter widget data</p>
            <div className="flex gap-2">
              <input
                required
                type="text"
                name="name1"
                id=""
                placeholder="name1"
                value={nameValue1.name}
                onChange={(e) => handleChange(e, setNameValue1, "name")}
                className="w-1/2  px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
              <input
                required
                type="number"
                name="value1"
                id=""
                placeholder="value1"
                value={nameValue1.value}
                onChange={(e) => handleChange(e, setNameValue1, "value")}
                className="w-1/2 px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
            </div>

            <div className="flex gap-2">
              <input
                required
                type="text"
                name="name2"
                id=""
                placeholder="name2"
                value={nameValue2.name}
                onChange={(e) => handleChange(e, setNameValue2, "name")}
                className="w-1/2  px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
              <input
                required
                type="number"
                name="value2"
                id=""
                placeholder="value2"
                value={nameValue2.value}
                onChange={(e) => handleChange(e, setNameValue2, "value")}
                className="w-1/2  px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
            </div>

            <div className="flex gap-2">
              <input
                required
                type="text"
                name="name3"
                id=""
                placeholder="name3"
                value={nameValue3.name}
                onChange={(e) => handleChange(e, setNameValue3, "name")}
                className="w-1/2  px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
              <input
                required
                type="number"
                name="value3"
                id=""
                placeholder="value3"
                value={nameValue3.value}
                onChange={(e) => handleChange(e, setNameValue3, "value")}
                className="w-1/2  px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
            </div>
            <div className="flex gap-2">
              <input
                required
                type="text"
                name="name4"
                id=""
                placeholder="name4"
                value={nameValue4.name}
                onChange={(e) => handleChange(e, setNameValue4, "name")}
                className="w-1/2  px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
              <input
                required
                type="number"
                name="value4"
                id=""
                placeholder="value4"
                value={nameValue4.value}
                onChange={(e) => handleChange(e, setNameValue4, "value")}
                className="w-1/2  px-2 bg-[var(--primary-color)]  focus:outline-[#def5ff]"
              />
            </div>
            <input
              required
              type="submit"
              className="bg-blue-800 text-white mt-2"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddMoreModel;
