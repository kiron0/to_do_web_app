import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  // delete confirmation sweet alert
  const handleDelete = (id) => {
    Swal.fire({
      text: "Are you sure you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setTasks(tasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto container mx-auto h-screen">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <th>{index + 1}</th>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button className="btn btn-sm btn-error">Complete</button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="btn btn-sm btn-warning"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
