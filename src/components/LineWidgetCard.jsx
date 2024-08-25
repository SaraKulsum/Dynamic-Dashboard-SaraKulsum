import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Close } from "@mui/icons-material";
import useCategory3Store from "../widgetStore3";
// let title = "sara";
// const data = [
//   { name: "A", value: 2400 },
//   { name: "B", value: 1398 },
//   { name: "C", value: 9800 },
//   { name: "D", value: 3908 },
//   { name: "E", value: 4800 },
//   { name: "F", value: 3800 },
//   { name: "G", value: 4300 },
// ];

const LineWidgetCard = ({ key, data, title, id }) => {
  const { removeCate3Widget } = useCategory3Store();

  const handleDeleteWidget = (id) => {
    removeCate3Widget(id);
  };
  return (
    <div
      key={key}
      className="w-[95%] lg:w-[45%] xl:w-[32.3%]  border  h-fit bg-white rounded-lg shadow-lg hover:scale-[1.03] transition-all  "
    >
      <div className="title_closeBtn_container m-3  flex justify-between">
        <h3 className="text-gray-600 font-bold text-sm ml-3">{title}</h3>
        <button
          onClick={() => {
            handleDeleteWidget(id);
          }}
        >
          <Close />
        </button>
      </div>
      <ResponsiveContainer width={"100%"} height={200} className={`pr-5 pt-2`}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#34b7d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineWidgetCard;
