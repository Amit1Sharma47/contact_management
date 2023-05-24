import axios from "axios";
import React, { PureComponent } from "react";
import { useQuery } from "react-query";
import HighchartsReact from "highcharts-react-official";

import Highcharts from "highcharts";

interface IMyProps {
  data: any;
}
const DiseaseRecord = (props: IMyProps) => {
  const { data } = props;
  const casesData = data?.data?.data;
  console.log(casesData);
  const dataArray: any = [];
  Object.keys(casesData?.cases ? casesData?.cases : []).map((key) => {
    dataArray.push({
      name: `${key}`,
      cases: casesData?.cases[key],
      deaths: casesData?.deaths[key],
      recovered: casesData?.recovered[key],
    });
  });
  let slicedArray = dataArray.slice(0, 100);
  console.log(slicedArray);

  const options = {
    chart: {
      height: 450,
      marginTop: 105,
      backgroundColor: "transparent",
    },
    yAxis: {
      title: {
        text: "",
      },
    },

    xAxis: {
      categories: dataArray.map((item: any) => item.name),
      crosshair: true,
    },

    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span>',
      pointFormat: `<table>
      <tr>
      <td style='color:{series.color}; padding:0}">{series.name}: </td>
      <td style="padding:1"><b>{point.y} people</b></td>
      </tr>
      <tr>
      <td style='color:{series.color}; padding:0}">{series.name}: </td>
      <td style="padding:1"><b>{point.y} people</b></td>
      </tr>
      </table>
       `,

      shared: true,
      useHTML: true,
    },
    credits: false,
    title: {
      text: "",
    },
    plotOptions: {
      series: {
        animation: false,
      },
    },
    legend: {
      verticalAlign: "top",
      align: "left",
      x: -20,
    },
    series: [
      {
        name: "cases",
        data: dataArray.map((item: any) => item.cases),
        color: "rgb(56, 56, 118)",
      },
      {
        name: "deaths",
        data: dataArray.map((item: any) => item.deaths),
        color: "rgb(217, 65, 72)",
      },
      {
        name: "recovered",
        data: dataArray.map((item: any) => item.recovered),
        color: "rgb(71, 169, 146)",
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {},
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DiseaseRecord;
