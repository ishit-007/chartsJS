import React from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "../utils/Data";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = () => {
  const [data, setData] = React.useState({
    labels: UserData.map((currData) => currData.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((currData) => currData.userGain),
        borderColor:"Gray",
        borderWidth:1
      },
    ],
  });
  return (
    <div style={{ width: "900px" }}>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
