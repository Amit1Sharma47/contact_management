import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";
import { useDispatch } from "react-redux";
import { deleteContact } from "../Redux/slice";

import { useNavigate } from "react-router";
const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state: RootState) => state.contact.contact);
  const deleteHandler = (index: number) => {
    dispatch(deleteContact(index));
    console.log("first", contacts);
  };
  const updateHandler = (index: number) => {
    
    console.log("first", contacts);
    navigate(`./update/${index}`);
  };
  console.log(contacts);
  return (
    <div className="flex items-center justify-center flex-col w-full h-auto mt-20">
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link to="/create">Create Contact</Link>
        </button>
      </div>
      <div className="mt-3 flex justify-center w-3/4 h-auto flex-wrap overflow-y-scroll py-5">
        {contacts.length > 0 &&
          contacts.map((item, index) => (
            <div className="w-56 h-60 m-2 text-center overflow-hidden shadow-lg bg-white rounded-md  ">
              <div className="font-bold text-3xl my-2 mx-2">
                {item.firstName + " " + item.lastName}
              </div>
              <p className="text-gray-700 text-xs mx-2">
                {item.status ==='1' ? "ACTIVE" : "INACTIVE"}
              </p>
              <div className="mt-5">
                <div className="w-full flex justify-center  my-3">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => updateHandler(index)}
                  >
                    Edit
                  </button>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contact;
