import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A 1",
      mark: 60,
    },
    {
      name: "A 2",
      mark: 59,
    },
    {
      name: "A 3",
      mark: 56,
    },
    {
      name: "A 4",
      mark: 59,
    },
    {
      name: "A 5",
      mark: 60,
    },
    {
      name: "A 6",
      mark: 58,
    },
    {
      name: "A 7",
      mark: 60,
    },
    {
      name: "A 8",
      mark: 60,
    },
  ];

  return (
    <section>
      <div className="bg-[#F9F9FF] py-28">
        <h1 className="text-center text-3xl font-extrabold">Assignment Marks</h1>
      </div>

      <div className="mx-16 my-32">
        <AreaChart width={1170} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="rgb(129 140 248)"
            fill="#E8E8FF"
          />
        </AreaChart>
      </div>
    </section>
  );
};

export default Statistics;
