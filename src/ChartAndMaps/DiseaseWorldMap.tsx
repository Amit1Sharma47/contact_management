import React from "react";


import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataIN from "@highcharts/map-collection/custom/world.geo.json";


highchartsMap(Highcharts);
interface IMyProps {
  data: any;
}
export default function DiseaseWorldMap(props: IMyProps) {
      const { data } = props;
      console.log(data)
  const mapOptions = {
    chart: {
      map: "custom/world",
      pinchType: "none",
      zoomType: "none",
      width:
        document.body.offsetWidth > 1040
          ? 880
          : document.body.offsetWidth > 950
          ? 380
          : document.body.offsetWidth > 900
          ? 330
          : document.body.offsetWidth > 600
          ? 500
          : document.body.offsetWidth > 516
          ? 480
          : document.body.offsetWidth > 440
          ? 400
          : document.body.offsetWidth > 335
          ? 320
          : 260,
      height:
        document.body.offsetWidth > 650
          ? 600
          : document.body.offsetWidth > 950
          ? 400
          : document.body.offsetWidth > 900
          ? 350
          : document.body.offsetWidth > 600
          ? 520
          : document.body.offsetWidth > 516
          ? 500
          : document.body.offsetWidth > 440
          ? 420
          : document.body.offsetWidth > 335
          ? 340
          : 280,
    },
    accessibility: {
      description: "Showing World Detail",
    },
    credits: {
      enabled: false,
    },

    title: {
      text: "",
      align: "left",
    },
    mapNavigation: {
      enabled: false,
    },

    tooltip: {
      useHTML: true,
    //   formatter() {
    //     let point = this,
    //       vals;

    //     data1.forEach((d) => {
    //       if (d[0] == point.point["hc-key"]) {
    //         vals = d[1];
    //       }
    //     });
    //     return `
    //     <h4 class="map-hover-title">${point.point["hc-key"]}</h4>
    //     <hr class="line-break-line">
    //     <table id="india-map-hover-effect">
    //       <tr>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box1"></div><span class="td-title">Daksh</span></div><div class="table-td-spans"><span><b>${vals.daksh}</b> Districts</span></div></td>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box2"></div><span class="td-title">Utkarsh</span></div><div class="table-td-spans"><span><b>${vals.utkarsh}</b> Districts</span></div></td>
    //       </tr>
    //       <tr>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box3"></div><span class="td-title">Ati-Uttam</span></div><div class="table-td-spans"><span><b>${vals.atiuttam}</b> Districts</span></div></td>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box4"></div><span class="td-title">Uttam</span></div><div class="table-td-spans"><span><b>${vals.uttam}</b> Districts</span></div></td>
    //       </tr>
    //       <tr>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box5"></div><span class="td-title">Prachesta-1</span></div><div class="table-td-spans"><span><b>${vals.prachesta1}</b> Districts</span></div></td>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box6"></div><span class="td-title">Prachesta-2</span></div><div class="table-td-spans"><span><b>${vals.prachesta2}</b> Districts</span></div></td>
    //       </tr>
    //       <tr>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box7"></div><span class="td-title">Prachesta-3</span></div><div class="table-td-spans"><span><b>${vals.prachesta3}</b> Districts</span></div></td>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box8"></div><span class="td-title">Akanshi-1</span></div><div class="table-td-spans"><span><b>${vals.akanshi1}</b> Districts</span></div></td>
    //       </tr>
    //       <tr>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box9"></div><span class="td-title">Akanshi-2</span></div><div class="table-td-spans"><span><b>${vals.akanshi2}</b> Districts</span></div></td>
    //         <td><div class="td-name-main-div"><div class="color-box" id="color-box10"></div><span class="td-title">Akanshi-3</span></div><div class="table-td-spans"><span><b>${vals.akanshi3}</b> Districts</span></div></td>
    //       </tr>
    //     </table>`;
    //   },
    },

    series: [
      {
        mapData: mapDataIN,
        data: data,
        type: "map",
        allAreas: false,
        showInLegend: false,
        cursor: "pointer",
        name: "States",
        borderColor: "rgb(1, 131, 131)",
        color: "#42FFF6",
        states: {
          hover: {
            color: "#d63384",
          },
        },
      },
    ],
  };

  return (
    <div className="" id="india-map">
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapOptions}
      />
    </div>
  );
}

var data = [
  ["madhya pradesh", 1],
  ["uttar pradesh", 1],
  ["karnataka", 1],
  ["nagaland", 1],
  ["bihar", 1],
  ["lakshadweep", 1],
  ["andaman and nicobar", 1],
  ["assam", 1],
  ["west bengal", 1],
  ["puducherry", 1],
  ["daman and diu", 1],
  ["gujarat", 1],
  ["rajasthan", 1],
  ["dadara and nagar havelli", 1],
  ["chhattisgarh", 1],
  ["tamil nadu", 1],
  ["chandigarh", 1],
  ["punjab", 1],
  ["haryana", 1],
  ["andhra pradesh", 1],
  ["maharashtra", 1],
  ["himachal pradesh", 1],
  ["meghalaya", 1],
  ["kerala", 1],
  ["telangana", 1],
  ["mizoram", 1],
  ["tripura", 1],
  ["manipur", 1],
  ["arunanchal pradesh", 1],
  ["jharkhand", 1],
  ["goa", 1],
  ["nct of delhi", 1],
  ["odisha", 1],
  ["jammu and kashmir", 1],
  ["sikkim", 1],
  ["uttarakhand", 1],
  ["ladakh", 1],
];
var data1 = [
  [
    "madhya pradesh",
    {
      daksh: 1,
      utkarsh: 2,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "uttar pradesh",
    {
      daksh: 1,
      utkarsh: 1,
      atiuttam: 2,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "karnataka",
    {
      daksh: 2,
      utkarsh: 1,
      atiuttam: 2,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "nagaland",
    {
      daksh: 3,
      utkarsh: 1,
      atiuttam: 2,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "bihar",
    {
      daksh: 4,
      utkarsh: 3,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "lakshadweep",
    {
      daksh: 5,
      utkarsh: 3,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "andaman and nicobar",
    {
      daksh: 6,
      utkarsh: 3,
      atiuttam: 2,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "assam",
    {
      daksh: 7,
      utkarsh: 2,
      atiuttam: 4,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "west bengal",
    {
      daksh: 8,
      utkarsh: 7,
      atiuttam: 5,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "puducherry",
    {
      daksh: 9,
      utkarsh: 6,
      atiuttam: 4,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "daman and diu",
    {
      daksh: 0,
      utkarsh: 2,
      atiuttam: 4,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "gujarat",
    {
      daksh: 1,
      utkarsh: 2,
      atiuttam: 1,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "rajasthan",
    {
      daksh: 2,
      utkarsh: 3,
      atiuttam: 5,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "dadara and nagar havelli",
    {
      daksh: 3,
      utkarsh: 1,
      atiuttam: 6,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "chhattisgarh",
    {
      daksh: 5,
      utkarsh: 7,
      atiuttam: 0,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "tamil nadu",
    {
      daksh: 5,
      utkarsh: 8,
      atiuttam: 1,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "chandigarh",
    {
      daksh: 4,
      utkarsh: 0,
      atiuttam: 0,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "punjab",
    {
      daksh: 0,
      utkarsh: 2,
      atiuttam: 5,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "haryana",
    {
      daksh: 0,
      utkarsh: 5,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "andhra pradesh",
    {
      daksh: 1,
      utkarsh: 6,
      atiuttam: 8,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "maharashtra",
    {
      daksh: 4,
      utkarsh: 2,
      atiuttam: 4,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "himachal pradesh",
    {
      daksh: 7,
      utkarsh: 6,
      atiuttam: 5,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "meghalaya",
    {
      daksh: 4,
      utkarsh: 6,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "kerala",
    {
      daksh: 8,
      utkarsh: 5,
      atiuttam: 4,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "telangana",
    {
      daksh: 7,
      utkarsh: 6,
      atiuttam: 4,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "mizoram",
    {
      daksh: 5,
      utkarsh: 5,
      atiuttam: 2,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "tripura",
    {
      daksh: 6,
      utkarsh: 5,
      atiuttam: 2,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "manipur",
    {
      daksh: 7,
      utkarsh: 5,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "arunanchal pradesh",
    {
      daksh: 2,
      utkarsh: 6,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "jharkhand",
    {
      daksh: 2,
      utkarsh: 5,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "goa",
    {
      daksh: 3,
      utkarsh: 4,
      atiuttam: 6,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "nct of delhi",
    {
      daksh: 3,
      utkarsh: 5,
      atiuttam: 8,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "odisha",
    {
      daksh: 6,
      utkarsh: 2,
      atiuttam: 6,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "jammu and kashmir",
    {
      daksh: 6,
      utkarsh: 2,
      atiuttam: 7,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "sikkim",
    {
      daksh: 4,
      utkarsh: 1,
      atiuttam: 5,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "uttarakhand",
    {
      daksh: 5,
      utkarsh: 6,
      atiuttam: 3,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
  [
    "ladakh",
    {
      daksh: 9,
      utkarsh: 6,
      atiuttam: 1,
      uttam: 2,
      prachesta1: 1,
      prachesta2: 3,
      prachesta3: 4,
      akanshi1: 2,
      akanshi2: 5,
      akanshi3: 7,
    },
  ],
];
