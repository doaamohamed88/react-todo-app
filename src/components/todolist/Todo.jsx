import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Updatemodal from "./Updatemodal";

export default function Todo() {
  const [task, settask] = useState({ name: "", status: "inProgress" });
  const [tasklist, settasklist] = useState(() => {
    const saved = localStorage.getItem("tasklist");
    return saved ? JSON.parse(saved) : [{ name: "", status: "inProgress" }];
  });
  const [editingTask, setEditingTask] = useState(null);
  // set list in localstorage
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);
  //add
  function handleAddTask() {
    if (!task.name.trim()) return;
    let newlist = [...tasklist, task];
    settask({ name: "", status: "inProgress" });
    settasklist(newlist);
  }
  //delete
  function handleeDelete(taskToDelete) {
    const taskafterdelete = tasklist.filter((e) => e.name != taskToDelete.name);
    settasklist(taskafterdelete);
  }
  //update
  function handleUpdate(oldTask, newTask) {
    if (oldTask.name === newTask.name) {
      setEditingTask(null);
      return;
    }
    settasklist(tasklist.map((e) => (e.name === oldTask.name ? newTask : e)));
  }
  //toggle status
  // toggle status
  function toggleStatus(taskToToggle) {
    settasklist(
      tasklist.map((t) =>
        t.name === taskToToggle.name
          ? { ...t, status: t.status === "done" ? "inProgress" : "done" }
          : t
      )
    );
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-end "
      style={{
        backgroundImage: `url("background.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // width: "100%",
      }}
    >
      <div className="w-full max-w-lg   shadow-yellow-500  border-black border-spacing-2   mr-60 bg-black/50 backdrop-blur-md shadow-md rounded-2xl p-6 border border-white/20">
        <h1 className="font-bold italic p-5 text-center text-white text-3xl text-gradient ">
          To do app
        </h1>
        <div className="text-center mb-5 text-white flex justify-between">
          <div>
            <span className="font-bold text-orange-400">{tasklist.length}</span>{" "}
            tasks
          </div>
          <div>
            <span className="font-bold text-orange-400">
              {tasklist.filter((task) => task.status == "inProgress").length}
            </span>{" "}
            inProgress
          </div>
          <div>
            <span className="font-bold text-orange-400">
              {tasklist.filter((task) => task.status == "done").length}
            </span>{" "}
            Done
          </div>{" "}
        </div>
        <div className="flex gap-3">
          <input
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            className="flex-1  p-3 rounded-xl focus:ring-2 focus:ring-yellow-600 outline-none bg-black/65 text-white"
            placeholder="Add new task..."
            value={task.name}
            onChange={(e) => settask({ ...task, name: e.target.value })}
          />
          <button
            className="border border-black hover:bg-yellow-500 px-5 py-3 rounded-xl text-white font-semibold shadow"
            onClick={handleAddTask}
          >
            ➕ Add
          </button>
        </div>
        {/* //tasklist */}
        {tasklist.length > 0 ? (
          <TaskList
            tasklist={tasklist}
            onDelete={handleeDelete}
            oneEdit={setEditingTask}
            onToggle={toggleStatus}
          />
        ) : (
          <p className=" p-10 text-white text-center">No tasks added yet</p>
        )}
        {/* //update modal */}
        {editingTask && (
          <Updatemodal
            title={editingTask}
            onOk={(newtask) => {
              handleUpdate(editingTask, newtask);
              setEditingTask(null);
            }}
            onClose={() => setEditingTask(null)}
          ></Updatemodal>
        )}
      </div>
    </div>
  );
}
