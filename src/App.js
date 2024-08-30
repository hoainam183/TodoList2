import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./conponent/AddTask";
import Header from "./conponent/Header";
import ShowTask from "./conponent/ShowTask";
function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);
  return (
    <div className="App">
      <Header></Header>
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      ></AddTask>
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      ></ShowTask>
    </div>
  );
}

export default App;
