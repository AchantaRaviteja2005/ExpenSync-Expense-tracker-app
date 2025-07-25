import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomExpenseBarChart from "../Charts/CustomExpenseBarChart";

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);

    return () => {};
  }, [data]);
  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="">Last 30 Days Expenses</h5>
      </div>

      <CustomExpenseBarChart data={chartData} />
    </div>
  );
};

export default Last30DaysExpenses;
