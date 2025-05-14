"use client";

import { ITodoItemProps } from "@/interface/Todo";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import DeleteTask from "@/components/DeleteTask/DeleteTask";

export default function TodoItem({ todo }: ITodoItemProps) {
  const router = useRouter();
  
  const handleEditTask = () => {
    router.push(`/updatetask/${todo.id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'terminé':
        return 'bg-green-100 text-green-700';
      case 'en cours':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-indigo-100 text-indigo-700';
    }
  };

  return (
    <>
      <div className="group flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center space-x-4 flex-1">
        <span className="flex-1 text-lg text-indigo-900 group-hover:text-indigo-700 transition-all duration-200">
          {todo.title}
        </span>
      </div>

      <div className="flex w-full items-center space-x-4 justify-center ml-10" >
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(todo.status)}`}>
          {todo.status}
        </span>
      </div>
      
      <div className="flex items-center space-x-4">
        
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleEditTask}
            className="p-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
            aria-label="Edit task"
          >
            <FaEdit className="w-5 h-5" />
          </button>
          
          <DeleteTask todo={todo} />
        </div>
      </div>
    </div>
    </>
  );
}
