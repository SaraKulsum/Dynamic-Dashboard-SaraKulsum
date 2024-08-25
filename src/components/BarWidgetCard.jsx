import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useCategory2Store from "../widgetStore2";
import { Close } from "@mui/icons-material";

const BarWidgetCard = ({ key, data, title, id }) => {
  const { removeCate2Widget } = useCategory2Store();

  const handleDeleteWidget = (id) => {
    removeCate2Widget(id);
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
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarWidgetCard;
