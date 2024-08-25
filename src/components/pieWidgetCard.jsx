import React from 'react'
import data1 from "../data.json";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Close, Tune } from '@mui/icons-material';
import useCategory1Store from '../widgetStore1'

const PieWidgetCard = ({data, title, id}) => {
  const {removeCate1Widget} = useCategory1Store()
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const handleDeleteWidget = (id)=>{
    removeCate1Widget(id)
  }

  return (
    <div className='border w-[95%] lg:w-[45%] xl:w-[32.3%] h-fit bg-white rounded-lg shadow-lg hover:scale-[1.03] transition-all p-3'> 
     <div className='title_closeBtn_container flex justify-between'>
      <h3 className=' text-gray-600 font-bold text-sm ml-3'>{title}</h3>
      <button onClick={()=>{handleDeleteWidget(id)}}><Close/></button>
      </div>
     <ResponsiveContainer width={'100%'} height={200} >
     <PieChart width={300} height={180}>
      <Pie
        data={data}
        cx={85}
        cy={95}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend iconSize={12} align = "right"  layout='right' />
     </PieChart>
     </ResponsiveContainer>
    </div>
  )
}

export default PieWidgetCard