import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ReportShow = ({ data: chartData, loading }) => {
  if (loading) {
    return <div className="flex justify-center items-center flex-col w-full">
    
    <div className="w-[80%] " style={{ height: 400 }}>
      <Skeleton height="100%" width="100%" />
    </div>
    <p>
      <span className="font-bold">Loading:</span> Preparing today's sell report...
    </p>
  </div>;
  }

  console.log(chartData[0].items.length);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const data = [];
  chartData.map((item) => {
    data.push({
      name: (item.category === "today" ? "total" : item.category).toUpperCase(),
      uv: item.items.length,
    });
    return null;
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p>
        <span className="font-bold">Figure :</span> Todays total sell report
      </p>
    </div>
  );
};

export default ReportShow;
