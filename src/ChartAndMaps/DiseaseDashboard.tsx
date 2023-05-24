 
import axios from "axios";
import { useQuery } from "react-query";
import Cards from "../components/Cards";
import Loader from "../components/loader/loader";
const DiseaseDashboard = () => {
  const fetchDiseaseData = async () => {
    const data = await axios.get("https://disease.sh/v3/covid-19/all");
    return data;
  };
  const { data, isLoading } = useQuery("disease", fetchDiseaseData);

  return (
    <div>
      {isLoading ? (
        <div className=" flex  h-full flex-wrap justify-center items-center mt-36">
          <Loader />
        </div>
      ) : (
        <div className=" flex  h-full flex-wrap justify-center items-center  overflow-hidden">
          {Object.keys(data ? data?.data : []).map(
            (key) =>
              key !== "updated" && <Cards key={key} title={key} quant={data?.data[key]} />
          )}
        </div>
      )}
    </div>
  );
};

export default DiseaseDashboard;
