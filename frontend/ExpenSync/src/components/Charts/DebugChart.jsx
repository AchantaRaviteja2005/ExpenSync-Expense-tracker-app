import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const DebugChart = () => {
  // Sample data to test if chart works
  const sampleData = [
    { month: "Jan", amount: 400 },
    { month: "Feb", amount: 300 },
    { month: "Mar", amount: 500 },
    { month: "Apr", amount: 200 },
    { month: "May", amount: 600 },
  ];

  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbefb";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    // Only show tooltip when actively hovering over a bar
    if (
      active &&
      payload &&
      payload.length > 0 &&
      payload[0].value !== undefined
    ) {
      const data = payload[0].payload;
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">
            {data.month}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">
              ${data.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Debug Chart - Sample Data</h2>
        <div className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={sampleData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "#555" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#555" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={CustomTooltip}
                cursor={{ fill: "rgba(135, 92, 245, 0.1)" }}
                trigger="hover"
                isAnimationActive={false}
              />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {sampleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(index)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Data Structure:</h3>
          <pre className="text-sm text-gray-700">
            {JSON.stringify(sampleData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DebugChart;
