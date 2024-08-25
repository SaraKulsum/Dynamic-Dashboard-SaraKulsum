import React, { useEffect } from "react";
import "./App.css";
import PieWidgetCard from "./components/pieWidgetCard";
import NavBar from "./components/NavBar";
import Row1_AddWidget_Container from "./components/Row1_AddWidget_Container";
import useCategory1Store from "./widgetStore1";
import useCategory2Store from "./widgetStore2";
import useCategory3Store from "./widgetStore3";
import BarWidgetCard from "./components/BarWidgetCard";
import AddMoreModel from "./components/AddMoreModel";
import LineWidgetCard from "./components/LineWidgetCard";

function App() {
  const { category1WidgetsData, resetState1 } = useCategory1Store();
  const { category2WidgetsData, resetState2 } = useCategory2Store();
  const { category3WidgetsData, resetState3 } = useCategory3Store();

  useEffect(() => {
    resetState1();
    resetState2();
    resetState3();
  }, []);

  return (
    <>
      <NavBar />
      <main className="mx-4 md:mx-8">
        <Row1_AddWidget_Container />

        <div className="category1 flex flex-col gap-3 my-8">
          <h2 className="category1-title font-sans font-semibold text-gray-700 ">
            CSPM Executive Dashboard
          </h2>
          <div className="category1WidgetsContainer flex gap-4 flex-row flex-wrap  items-center  justify-center ">
            {category1WidgetsData.map((item, index) => (
              <PieWidgetCard
                key={index}
                data={item.data}
                title={item.widgetName}
                id={item.id}
              />
            ))}
            <div className="border flex justify-center items-center w-[95%] lg:w-[45%] xl:w-[32.3%] h-[250px] bg-white rounded-lg shadow-lg hover:scale-[1.03] transition-all p-3">
              <AddMoreModel AddInCategory="category1" />
            </div>
          </div>
        </div>

        <div className="category2 flex flex-col gap-3 my-8">
          <h2 className="category2Title font-sans font-semibold text-gray-700 ">
            Performance Dashboard
          </h2>
          <div className="category2WidgetContainer flex gap-4 flex-row flex-wrap  items-center  justify-center ">
            {category2WidgetsData.map((item, index) => (
              <BarWidgetCard
                key={index}
                data={item.data}
                title={item.widgetName}
                id={item.id}
              />
            ))}
            <div className="border flex justify-center items-center   w-[95%] lg:w-[45%] xl:w-[32.3%] h-[250px] bg-white rounded-lg shadow-lg hover:scale-[1.03] transition-all p-3">
              <AddMoreModel AddInCategory="category2" />
            </div>
          </div>
        </div>

        <div className="category3 flex flex-col gap-3 my-8">
          <h2 className="category3Title font-sans font-semibold text-gray-700 ">
          Growth
          </h2>
          <div className="category3WidgetContainer flex gap-4 flex-row flex-wrap  items-center  justify-center ">
            {category3WidgetsData.map((item, index) => (
              <LineWidgetCard
                key={index}
                data={item.data}
                title={item.widgetName}
                id={item.id}
              />
            ))}
            <div className="border flex justify-center items-center   w-[95%] lg:w-[45%] xl:w-[32.3%] h-[250px] bg-white rounded-lg shadow-lg hover:scale-[1.03] transition-all p-3">
              <AddMoreModel AddInCategory="category3" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
