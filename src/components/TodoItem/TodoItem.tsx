"use client";


import { ITodoItemProps } from "@/interface/Todo";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";

import DeleteTask from "@/app/deletetask/page";  

export default function TodoItem(  {todo, onToggle, onDelete }: ITodoItemProps) {
    // const { todo, onToggle, onDelete } = props; // Déstructuration des props

  const router = useRouter(); // Initialiser le routeur
  
    const handleEditTask = () => {
      // Rediriger vers la page de modification avec l'ID de la tâche
      router.push(`/updatetask/${todo.id}`);
      console.log("Tâche sauvegardée :", todo);
    };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2 cursor-pointer"
        />
      <span
        className={` ${
          todo.completed ? "line-through text-gray-500" : ""
        }break-work whitespace-normal`}
      >
        <span className="text-gray-700 ">{todo.title}</span>
      </span>
      
      <div className="flex items-center justify-between ">
        <span className="text-gray-500 mr-15  text-center">{todo.completed ? 
          <span className="text-green-500">Completed</span> 
        : <span className={`text-red-400`}>Pending</span> }
        </span>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <FaEdit
                    className="edit-icon text-xl text-blue-500 hover:text-blue-700 cursor-pointer text-center"
                    onClick={handleEditTask}
                  />
              </div>
            </div>
              <DeleteTask todo={todo} onDelete={() => onDelete(todo.id)} onToggle={() => onToggle(todo.id)} />
      </div>
    </div>
  );
}
