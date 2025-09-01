import React from "react";

export default function TaskList({ tasklist, oneEdit, onDelete, onToggle }) {
  return (
    <div className="flex flex-col gap-2 mt-6">
      {tasklist.map((task, index) => (
        <div
          key={index}
          className={`flex justify-between items-center bg-black/50  hover:bg-gray-950 transition p-3 rounded-lg shadow-sm ${
            task.status === "done" ? "line-through" : null
          }`}
        >
          <span className="text-white font-medium">{task.name}</span>
          <div className="flex gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow"
              onClick={() => onDelete(task)}
            >
              🗑 Delete
            </button>
            <button
              className={`bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg shadow 
               ${task.status === "done" ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => oneEdit(task)}
              disabled={task.status === "done"}
            >
              ✏ Edit
            </button>
            <input
              type="checkbox"
              className="w-6 cursor-pointer"
              checked={task.status === "done"}
              onChange={() => onToggle(task)}
            />{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
