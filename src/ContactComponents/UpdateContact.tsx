import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { updateContact } from "../Redux/slice";
const CreateContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const contacts = useSelector((state: RootState) => state.contact.contact);
  const [data, setData] = useState<any>({
    firstName: contacts[Number(id)]?.firstName,
    lastName: contacts[Number(id)]?.lastName,
    status: contacts[Number(id)]?.status,
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("first");
    data.length !== 0 &&
      data.firstName !== "" &&
      data.lastName !== "" &&
      dispatch(updateContact({ data, id }));

    navigate("/contact");
    console.log("first");
  };
  return (
    <div className=" w-full h-96 ">
      <div className="flex justify-center  my-auto mx-auto h-16 py-5">
        <h1>Update Contact Screen</h1>
      </div>
      <div className="bg-white h-60 flex-col w-1/2 flex justify-center my-auto mx-auto ">
        <div className="w-full flex justify-between py-5 px-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="firstName"
            name="firstName"
            onChange={changeHandler}
            value={data?.firstName}
            required
          />
        </div>
        <div className="w-full flex justify-between py-5 px-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="lastName"
            name="lastName"
            value={data?.lastName}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="w-full flex justify-between py-5 px-4">
          <div>
            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Status
            </p>
          </div>

          <div className="w-5/6 flex flex-row  justify-evenly  ">
            <div>
              <input
                type="radio"
                name="status"
                id="Active"
                value="1"
                checked={data.status === "1"}
                onChange={changeHandler}
              />
              <label htmlFor="Active">Active</label>
            </div>
            <div>
              <input
                type="radio"
                name="status"
                id="Inactive"
                value="0"
                checked={data.status === "0"}
                onChange={changeHandler}
              />
              <label htmlFor="Inactive">Inactive</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-5">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={submitHandler}
        >
          Update Contact
        </button>
      </div>
    </div>
  );
};

export default CreateContact;
