"use client";

export default function TodoListHeader() {
    return(
        <>
        <div className="flex items-center justify-between p-4 mb-3 bg-white text-indigo-900 font-bold rounded-lg shadow-sm">
          <span>Titre</span>
          <span>Statut</span>
          <span>Action</span>
        </div>
        </>
    )
}

