import axios from "axios";
import DiseaseDashboard from "./DiseaseDashboard";
import DiseaseRecord from "./DiseaseRecord";
import DiseaseWorldMap from "./DiseaseWorldMap";
import { Carousel } from "@material-tailwind/react";
import { useQuery } from "react-query";
const ChartAndMaps = () => {
  //fetching data for chart
  const fetchDiseaseHistData = async () => {
    const data = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return data;
  };
  //fetching data for world map
  const dataHistory: any = useQuery("diseaseHistory", fetchDiseaseHistData);
  const fetchDiseaseMapData = async () => {
    const data = await axios.get("https://disease.sh/v3/covid-19/countries");
    return data;
  };
  const dataMap: any = useQuery("diseaseMap", fetchDiseaseMapData);

  return (
    <Carousel className="rounded-xl">
      <div>
        <DiseaseDashboard />
      </div>

      <div className="m-4 p-50 rounded-xl">
        <h1 className="text-center text-xl text-indigo-700">
          Data on number of Cases
        </h1>
        <DiseaseRecord data={dataHistory} />
      </div>
      <div className="m-16 p-50 rounded-xl">
        <h1 className="text-center text-xl text-indigo-700">
          Data on Cases around the world
        </h1>
        <div className="flex justify-center">
          <DiseaseWorldMap data={dataMap} />
        </div>
      </div>

      {/* <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        /> */}
    </Carousel>
  );
};

export default ChartAndMaps;
