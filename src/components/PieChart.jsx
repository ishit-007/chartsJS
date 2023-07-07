import React from "react";
import { Pie } from "react-chartjs-2";
import { UserData } from "../utils/Data";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () => {
  const [data, setData] = React.useState({
    labels: UserData.map((currData) => currData.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((currData) => currData.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });
  return (
    <div style={{ width: "900px" ,height:"900px"}}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
