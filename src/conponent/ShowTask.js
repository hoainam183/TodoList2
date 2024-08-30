import React, { useContext, useRef } from "react";
function ShowTask({ tasklist, setTasklist, task, setTask }) {

  const handleRemove = (id) => {
    tasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(tasklist);
  };
  const handleEdit = (task) => {
    setTask(task)
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist?.map((task) => {
          return (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                className="bi bi-pencil-square"
                onClick={() => handleEdit(task)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleRemove(task.id);
                }}
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default ShowTask;
