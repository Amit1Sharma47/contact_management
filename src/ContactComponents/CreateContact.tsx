import React from "react";

const CreateContact = () => {
  return (
    <div className=" w-full h-96 ">
      <div className="flex justify-center  my-auto mx-auto h-16 py-5">
        <h1>Create Contact Screen</h1>
      </div>
      <div className="bg-white h-60 flex-col w-1/2 flex justify-center my-auto mx-auto ">
        <div className="w-full flex justify-between py-5 px-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="firstName"
            required
          />
        </div>
        <div className="w-full flex justify-between py-5 px-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="lastName"
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
              <input type="radio" name="Active" id="Active" />
              <label htmlFor="Active">Active</label>
            </div>
            <div>
              <input type="radio" name="Inactive" id="Inactive" />
              <label htmlFor="Inactive">Inactive</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
