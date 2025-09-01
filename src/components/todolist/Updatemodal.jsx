import React, { useState } from "react";

export default function Updatemodal({ title, onClose, onOk }) {
  const[inputvalue,setinputvalue]=useState(title);
  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-10 ">
  <div className="bg-gray-900 rounded-2xl p-6 w-96 shadow-xl flex flex-col gap-4">
    <h2 className="text-xl font-bold text-white">✏ Update Task</h2>
    <input
      value={inputvalue.name}
      onChange={(e) => setinputvalue({...inputvalue,name:e.target.value})}
      className=" bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none text-white"
    />
    <div className="flex justify-end gap-3 mt-4">
      <button
        onClick={() => onOk(inputvalue)}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg"
      >
        ✅ Save
      </button>
      <button
        onClick={onClose}
        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
      >
        ❌ Cancel
      </button>
    </div>
  </div>
</div>
  );
}
