import React from "react";
import { Context } from "../Context";

export const Task = ({ checkBox, edit, id, value }) => {
  const [valueInputEdit, setValueInputEdit] = React.useState("");
  const { doTask, delTask, editTaskCheck, editTaskValue, tasks } =
    React.useContext(Context);

  const editValueInput = (id, valueTask) => {
    if (valueTask !== "") {
      setValueInputEdit(valueTask);
      editTaskValue(id, valueInputEdit);
    }
  };

  const clickEnter = (e) => {
    if (e.key === "Enter") {
      editValueInput(id, e.target.value);
    }
  };

  React.useEffect(() => {
    setValueInputEdit(value);
  }, [tasks]);

  return (
    <div className="task">
      <div onClick={() => doTask(id, edit)} className="task__block">
        <img
          src={checkBox ? "./img/checkboxTrue.svg" : "./img/checkboxFalse.svg"}
          alt="checkbox_icon"
        />
        {edit ? (
          <input
            className="inputEdit"
            value={valueInputEdit}
            onChange={(e) => setValueInputEdit(e.target.value)}
            onKeyDown={(e) => clickEnter(e)}
            maxLength={25}
          />
        ) : (
          <h3 className={checkBox ? "do" : ""}>{value}</h3>
        )}
      </div>
      <div className="task__btns">
        {edit ? (
          <div className="btns__edit">
            <button
              onClick={() => editValueInput(id, valueInputEdit)}
              className="btn__save"
            >
              save
            </button>
            <button onClick={() => editTaskCheck(id)} className="btn__edit">
              canсel
            </button>
          </div>
        ) : (
          <img
            onClick={() => editTaskCheck(id)}
            src="./img/edit.svg"
            alt="edit"
            className="editBtn"
          />
        )}
        <img
          onClick={() => delTask(id)}
          src="./img/del.svg"
          alt="del"
          className="delBtn"
        />
      </div>
    </div>
  );
};
