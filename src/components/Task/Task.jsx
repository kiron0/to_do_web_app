import React from "react";
import toast from "react-hot-toast";
import List from "../List/List";

const Task = () => {
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: e.target.title.value,
      description: e.target.description.value,
    };
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Task Added Successfully");
          e.target.title.value = "";
          e.target.description.value = "";
        }
      });
  };
  return (
    <>
      <div className="py-12">
        <div className="card-actions justify-center">
          <label
            htmlFor="task-modal"
            className="btn btn-md btn-primary text-white uppercase"
          >
            Add Task
          </label>
        </div>

        <input type="checkbox" id="task-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box text-center">
            <label
              htmlFor="task-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-2xl text-secondary mb-6">
              Input Your Task Details
            </h3>
            <form
              onSubmit={handleTaskSubmit}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                type="text"
                name="title"
                className="input input-bordered w-full max-w-sm mb-4"
                placeholder="Task Title"
                required
              />
              <textarea
                type="text"
                name="description"
                className="input input-bordered w-full max-w-sm"
                placeholder="Description"
                style={{ resize: "none", height: "8rem" }}
                required
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-28 max-w-xs text-white"
              />
            </form>
          </div>
        </div>
      </div>
      <List></List>
    </>
  );
};

export default Task;
