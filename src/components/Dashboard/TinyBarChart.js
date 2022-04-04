import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import "./styles.css";

const data = [
  {
    month: "Mar M",
    investment: 4000,
    sell: 2400,
    revenue: 2400,
  },
  {
    month: "April A",
    investment: 3000,
    sell: 1398,
    amt: 2210,
  },
  {
    month: "May M",
    investment: 2000,
    sell: 8,
    amt: 2290,
  },
  {
    month: "June J",
    investment: 2780,
    sell: 3908,
    amt: 2000,
  },
  {
    month: "July J",
    investment: 18,
    sell: 4800,
    amt: 2181,
  },
  {
    month: "August A",
    investment: 2390,
    sell: 3800,
    amt: 2500,
  },
  {
    month: "Sep S",
    investment: 3490,
    sell: 4300,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

export default function TinyBarChart() {
  return (
    <BarChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sell" fill="#8884d8" minPointSize={5}>
        <LabelList dataKey="month" content={renderCustomizedLabel} />
      </Bar>
      <Bar dataKey="investment" fill="#82ca9d" minPointSize={10} />
    </BarChart>
  );
}
