import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link to="/create">Create Contact</Link>
      </button>
    </div>
  );
};

export default Contact;
