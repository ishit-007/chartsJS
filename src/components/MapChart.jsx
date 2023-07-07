import React from "react";
import { Chart } from "react-google-charts";


export const data = [
  ["Country", "Latitude"],
  ["Macao", 10],
    ["Singapore", -6],
    ["Hong Kong", -9],
    ["Bahrain", -4],
    ["Maldives", -22],
    ["Bangladesh", 26],
    ["Palestine", -17],
    ["Lebanon", 3],
    ["South Korea", 33],
    ["India", 25],
    ["Israel", 23],
    ["Philippines", -3],
    ["Sri Lanka", 13],
    ["Japan", 0],
    ["Vietnam", 19],
    ["Pakistan", -25],
    ["Kuwait", -12],
    ["Qatar", -20],
    ["North Korea", -26],
    ["Nepal", -10],
    ["China", -27],
    ["Indonesia", 2],
    ["Thailand", -19],
    ["UA Emirates", -13],
    ["Jordan", 15],
    ["Azerbaijan", -3],
    ["Syria", 21],
    ["Malaysia", 12],
    ["Armenia", 28],
    ["Iraq", 11],
    ["Cambodia", 27],
    ["Brunei", -8],
    ["Burma", -7],
    ["Uzbekistan", -5],
    ["Tajikistan", 30],
    ["Georgia", 34],
    ["Yemen", 20],
    ["Afghanistan", -2],
    ["Iran", 32],
    ["Kyrgyzstan", 31],
    ["Laos", -14],
    ["Bhutan", -21],
    ["Saudi Arabia", -15],
    ["Oman", 36],
    ["Turkmenistan", 9],
    ["Kazakhstan", -16],
    ["Mongolia", 19],
];


export const options = {
  region: "142",
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};

export default function MapChart() {
  return (
    <Chart
      chartType="GeoChart"
      width="50%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
