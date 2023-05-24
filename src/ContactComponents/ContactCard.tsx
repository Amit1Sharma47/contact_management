import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteContact } from '../Redux/slice';
interface IMyProps {
    item: any,
    index: number
  }
const ContactCard = (props:IMyProps) => {
    const {item,index}=props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const deleteHandler = (index: number) => {
      dispatch(deleteContact(index));//deleting the contact
   
    };
    const updateHandler = (index: number) => {
      
    
      navigate(`/contact_management/update/${index}`);//navigate to update page
    };
  return (
    <div className="w-56 h-60 m-2 text-center overflow-hidden shadow-lg bg-red-100 rounded-md text-red-400 ">
    <div className="font-bold text-3xl my-2 mx-2">
      {item.firstName + " " + item.lastName}
    </div>
    <p className="text-slate-700 text-xs mx-2">
      {item.status ==='1' ? "ACTIVE" : "INACTIVE"}
    </p>
    <div className="mt-5">
      <div className="w-full flex justify-center  my-3">
        <button
          className="bg-green-500 border-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border  rounded"
          onClick={() => updateHandler(index)}
        >
          Edit
        </button>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border rounded"
          onClick={() => deleteHandler(index)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default ContactCard;