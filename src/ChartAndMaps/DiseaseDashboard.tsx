import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Cards from "../components/Cards";
const DiseaseDashboard = () => {
  const fetchDiseaseData = async () => {
    const data = await axios.get("https://disease.sh/v3/covid-19/all");
    return data;
  };
  const { data, isLoading } = useQuery("disease", fetchDiseaseData);

  return (
    <div>
      <div className="m-1 flex w-full flex-wrap justify-center items-center pt-5">
        {Object.keys(data ? data?.data : []).map(
          (key) =>
            key !== "updated" && <Cards title={key} quant={data?.data[key]} />
        )}
      </div>
    </div>
  );
};

export default DiseaseDashboard;
