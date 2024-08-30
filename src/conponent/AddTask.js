import React, { useRef, useEffect } from "react";
export default function AddTask({ tasklist, setTasklist, task, setTask }) {
  const inputRef = useRef();
  const buttonRef = useRef();
  //   console.log(task);
  const isEditing = task.id;
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
      inputRef.current.value = task.name;
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: isEditing ? task.id : date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toDateString()}`,
    };
    if (!isEditing) setTasklist([...tasklist, newTask]);
    if (isEditing) {
      const index = tasklist.findIndex((_task) => _task.id === task.id);
      tasklist[index] = newTask;
      setTasklist([...tasklist]);
      setTask({});
    }
    e.target.reset();
  };
  return (
    <section className="addTask">
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task ..."
          maxLength="25"
        />
        <button
          type="submit"
          ref={buttonRef}
          style={{ backgroundColor: isEditing ? "blue" : "#03ba5c" }}
        >
          {isEditing ? "Edit Task" : "Add Task"}
        </button>
      </form>
    </section>
  );
}
