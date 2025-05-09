import React from "react";
import { MdDelete } from "react-icons/md";

import { ITodoItemProps } from "@/interface/Todo";
const DeleteTask = ({ todo, onDelete }: ITodoItemProps) => {

  const [showModal, setShowModal] = React.useState(false);
  const handleDeleteClick = () => {
    setShowModal(true);
  };
   

  return (
    <>
    {showModal ? ( 
      <div>
        <div className="fixed inset-0 bg-black opacity-70"></div>
         {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-2xl text-black font-bold mb-5">Are you sure?</h2>
            <p className="text-lg text-gray-500 mb-5">Do you really want to delete this task?</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => {
                onDelete(todo.id);
                setShowModal(false);
              }}
            >
              Delete
            </button>
            <button
              className="bg-green-500 px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>            
      </div>
    ) : null}
        <MdDelete className="mr-2 text-xl text-red-500 hover:text-red-700 flex items-center cursor-pointer" 
        onClick={() => handleDeleteClick() } />
        </>
  );
};

export default DeleteTask;
