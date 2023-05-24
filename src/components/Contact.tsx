import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";

import ContactCard from "../ContactComponents/ContactCard";
const Contact = () => {
  const contacts = useSelector((state: RootState) => state.contact.contact); //fetches the contact

  return (
    <div className="flex items-center justify-center flex-col w-full h-auto mt-20">
      <div>
        <Link
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          to="/contact_management/create"
        >
          Create Contact
        </Link>
      </div>
      <div className="mt-3 flex justify-center w-3/4 h-auto flex-wrap overflow-y-scroll py-5">
        {contacts.length > 0 &&
          contacts.map((item, index) => (
            <ContactCard key={Math.random() * 100} item={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Contact;
