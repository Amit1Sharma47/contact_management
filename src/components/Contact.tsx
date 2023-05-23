import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-auto mt-20">
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link to="/create">Create Contact</Link>
        </button>
      </div>
      <div className="mt-3 flex justify-center w-3/4 h-auto flex-wrap">
        <div className="w-56 h-60 m-2 rounded overflow-hidden shadow-lg bg-white rounded-md ">
          <div className="font-bold text-xl my-2 mx-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="w-full flex justify-center my-3">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Edit
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Delete
            </button>
          </div>
        </div>
        <div className="w-56 h-60 mx-2  rounded overflow-hidden shadow-lg bg-white rounded-md ">
          <div className="font-bold text-xl my-2 mx-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="w-full flex justify-center my-3">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Edit
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Delete
            </button>
          </div>
        </div>
        <div className="w-56 h-60 mx-2  rounded overflow-hidden shadow-lg bg-white rounded-md ">
          <div className="font-bold text-xl my-2 mx-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="w-full flex justify-center my-3">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Edit
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Delete
            </button>
          </div>
        </div>
        <div className="w-56 h-60 mx-2  rounded overflow-hidden shadow-lg bg-white rounded-md ">
          <div className="font-bold text-xl my-2 mx-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="w-full flex justify-center my-3">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Edit
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Delete
            </button>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Contact;
