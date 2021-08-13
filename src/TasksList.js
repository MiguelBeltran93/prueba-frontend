import React from "react";
import { useDispatch, useSelector } from 'react-redux';

function TasksList() {
  const task = useSelector(state => state.tasksReducer.saveTask);
  return (
    <div>
      <p id="total"></p>
      <ul>{task.map((element, index) =>{
        return(
          <li className="task">
            <span className="id">{index}</span>
            <span className="name">{element.name}</span>
            <span className="time">{element.time}</span>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default TasksList;
