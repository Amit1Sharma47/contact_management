import axios from "axios";
import DiseaseDashboard from "./DiseaseDashboard";
import DiseaseRecord from "./DiseaseRecord";
import { Carousel } from "@material-tailwind/react";
import { useQuery } from "react-query";
const ChartAndMaps = () => {
  const fetchDiseaseHistData = async () => {
    const data = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return data;
  };
  const dataHistory:any = useQuery("diseaseHistory", fetchDiseaseHistData);
   
  return (
    
    <div>
      <Carousel className="rounded-xl">
       <DiseaseDashboard/>
       <DiseaseRecord data={dataHistory}/>
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default ChartAndMaps;
