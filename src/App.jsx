import React from "react";
import "./App.scss";
import { Skeleton } from "./components/Skeleton";
import { Task } from "./components/Task";
import { Context } from "./Context";

function App() {
  const [valueInput, setValueInput] = React.useState("");
  const [tasks, setTasks] = React.useState([]); // {id, value, checkbox}

  const addTask = () => {
    if (valueInput !== "") {
      const newData = [
        ...tasks,
        { id: tasks.length, value: valueInput, checkBox: false, edit: false },
      ].map((item, i) => ({ ...item, id: i }));
      setTasks(newData);
    }
    setValueInput("");
  };

  const doTask = (id, edit) => {
    if (!edit) {
      const newData = tasks.map((task) =>
        id === task.id ? { ...task, checkBox: !task.checkBox } : task
      );
      setTasks(newData);
    }
  };

  const delTask = (id) => {
    const newData = tasks.filter((task) => task.id !== id);
    setTasks(newData);
  };

  const funcEnter = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const editTaskCheck = (id) => {
    const newData = tasks.map((task) =>
      id === task.id ? { ...task, edit: !task.edit } : task
    );
    setTasks(newData);
  };
  const editTaskValue = (id, value) => {
    const newData = tasks.map((task) =>
      id === task.id ? { ...task, value: value, edit: !task.edit } : task
    );
    setTasks(newData);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Context.Provider
          value={{
            doTask,
            delTask,
            editTaskCheck,
            editTaskValue,
            tasks,
            setTasks,
            valueInput,
            setValueInput,
          }}
        >
          <div className="input__block">
            <input
              className="input"
              type="text"
              placeholder="Добавить..."
              maxLength={25}
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
              onKeyDown={(e) => {
                funcEnter(e);
              }}
            />
            <img
              onClick={addTask}
              src="./img/add.svg"
              className="add__icon"
              alt="add"
            />
          </div>
          <div className="tasks__block">
            {tasks != 0 ? (
              tasks.map((task, i) => {
                return <Task key={i} {...task} />;
              })
            ) : (
              <Skeleton />
            )}
          </div>
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
