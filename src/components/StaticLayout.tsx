import React from "react";
import { Link } from "react-router-dom";
const StaticLayout = (props: any) => {
  return (
    <div className=" relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-indigo-500 flex items-center justify-center z-[10] w-screen ">
        <h1 className="text-gray-50 inline-block text-5xl">Contact Page</h1>
      </div>
      <div className="absolute flex w-full h-full md:h-2/3 lg:h-full items-start justify-center top-[96px] ">
        <div className="w-1/6 h-5/6  flex items-start justify-center flex-row bg-red-500 flex-wrap content-center ">
          <div className="w-full text-gray-50 text-sm hover:bg-sky-700 hover:text-xs active:bg-sky-700 active:text-xs lg:text-xl lg:hover:text-lg">
            <Link to='/contact' className="my-1 flex items-center justify-center  w-full h-12 cursor-pointer">
              Contact
            </Link>
          </div>
          <div className="w-full  text-gray-50 text-sm hover:bg-sky-700 hover:text-xs active:bg-sky-700 active:text-xs lg:text-xl lg:hover:text-lg">
            <Link to='/ChartAndMaps' className="my-1 flex items-center justify-center  w-full h-12 cursor-pointer">
              Charts and Maps
            </Link>
          </div>
        </div>
        <div className="w-full bg-slate-300  h-5/6  flex justify-center">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default StaticLayout;
