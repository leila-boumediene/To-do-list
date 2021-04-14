import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ handleClickCheck, handleClickTrash, tasks }) => {
  return (
    <ul className="tasks">
      {tasks.length > 0 &&
        tasks.map((task, index) => {
          return (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={task.done ? true : false}
                  onChange={() => handleClickCheck(index)}
                />
                <span className={task.done ? "done" : ""} key={index}>
                  {task.title}
                </span>
              </div>

              <FontAwesomeIcon
                onClick={() => handleClickTrash(index)}
                className="trash"
                icon="trash"
                size="1x"
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Task;
