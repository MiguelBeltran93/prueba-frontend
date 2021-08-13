import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SAVE_TASK, saveTaskAction } from './actions';


function TaskCreator() {
  const task = useSelector(state => state.tasksReducer.saveTask);

  const dispatch = useDispatch();
  const [name, setName]= useState('')
  const [time, setTime]= useState(0)

  let intervalRef = null;
  const [startTime, setStartTime]= useState(false)

  const incrementTime = () => {
    setTime(prev => parseInt(prev)+1);
  }
  const saveTask = () => {
    setStartTime(false)
    setTime(0);
    setName('');
    dispatch(saveTaskAction({name,time},SAVE_TASK))
  }

  const addTime = () => {
    setStartTime(true);
  };

  useEffect(()=>{
   if(startTime){
   intervalRef = setInterval(incrementTime, 1000);
   }
    !startTime && clearInterval (intervalRef);
   return ()=>{
     clearInterval (intervalRef);
   }
  },[startTime])

  return (
    <div>
      <label>
        Task name
        <input id="taskName" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
      </label>
      <label>
        Time elapsed
        <input id="timeField" type="number" onChange={(e)=>setTime(e.target.value)} value={time}/>
      </label>
      <button type="button" id="start" onClick={()=>addTime()}>START</button>
      <button type="button" id="stop" onClick={()=>saveTask()}>STOP</button>
    </div>
  )
}

export default TaskCreator;